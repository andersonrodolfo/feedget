import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { CloseButton } from '@/components/CloseButton';
import { Loading } from '@/components/Loading';
import { ScreenshotButton } from '@/components/Widget/ScreenshotButton';
import { FeedbackType, feedbackTypes } from '@/components/Widget/WidgetForm';
import { api } from '@/services/api';

type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
};

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const { title, image } = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);
    await api.post('/feedbacks', {
      type: title,
      comment,
      screenshot,
    });

    setComment('');
    setScreenshot(null);
    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={image.source} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={(event) => handleSubmitFeedback(event)}>
        <textarea
          disabled={isSendingFeedback}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-0 scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin disabled:cursor-not-allowed"
          placeholder="Conte com detalhes o que está acontecendo..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            isDisabled={!comment.length || isSendingFeedback}
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={!comment.length || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-300 disabled:cursor-not-allowed"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
