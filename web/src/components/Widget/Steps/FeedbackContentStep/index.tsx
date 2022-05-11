import { AxiosError } from 'axios';
import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { CloseButton } from '@/components/CloseButton';
import { Loading } from '@/components/Loading';
import { ScreenshotButton } from '@/components/Widget/ScreenshotButton';
import { FeedbackType, feedbackTypes } from '@/components/Widget/WidgetForm';
import { useDarkMode } from '@/hooks/useDarkMode';
import { api } from '@/services/api';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

type ErrorMessage = Record<string, unknown>;

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const { theme } = useDarkMode();
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const { title, image } = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);
    try {
      const response = await api.post('/feedbacks', {
        type: title,
        comment,
        screenshot,
      });

      toast.success(response.data.message, { theme });

      setComment('');
      setScreenshot(null);
      setIsSendingFeedback(false);
      onFeedbackSent();
    } catch (err) {
      const error = err as AxiosError;
      const { message } = error.response?.data as ErrorMessage;
      toast.error(message as string, { theme });
    }
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-secondary hover:text-primary transition-colors"
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
          className="placeholder:text-secondary text-primary min-w-[304px] w-full min-h-[112px] text-sm border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-0 scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin disabled:cursor-not-allowed transition"
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
            className="text-on-brand p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:offset focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-300 disabled:cursor-not-allowed transition"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
