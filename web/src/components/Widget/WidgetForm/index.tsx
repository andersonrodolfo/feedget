import { useState } from 'react';

import BugImage from '@/assets/images/bug.svg';
import IdeaImage from '@/assets/images/idea.svg';
import ThoughtImage from '@/assets/images/thought.svg';
import { FeedbackContentStep } from '@/components/Widget/Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from '@/components/Widget/Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from '@/components/Widget/Steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugImage,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeaImage,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: ThoughtImage,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="surface-primary p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-3rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {feedbackType && (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
          {!feedbackType && <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />}
        </>
      )}
      <footer className="text-secondary text-xs">
        Desenvolvido por{' '}
        <a
          className="underline underline-offset-2 text-brand-300 hover:text-brand-500 transition-colors"
          href="https://github.com/andersonrodolfo"
          target="_blank"
          rel="noreferrer"
        >
          Anderson Rodolfo
        </a>
      </footer>
    </div>
  );
}
