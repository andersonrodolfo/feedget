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
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
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
      <footer className="text-xs text-neutral-400">
        Feito com <span className="text-brand-500">♥</span> pela{' '}
        <a className="underline underline-offset-2" href="https://rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
