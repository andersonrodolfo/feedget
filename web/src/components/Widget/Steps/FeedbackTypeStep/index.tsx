import { CloseButton } from '@/components/CloseButton';
import { FeedbackType, feedbackTypes } from '@/components/Widget/WidgetForm';

type FeedbackTypeSteProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeSteProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="surface-secondary rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:outline-none focus:border-brand-500 ease-in-out duration-200"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
