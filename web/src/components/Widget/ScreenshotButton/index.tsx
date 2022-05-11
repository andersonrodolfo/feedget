import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Loading } from '@/components/Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
  isDisabled: boolean;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
  isDisabled,
}: ScreenshotButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleTakeScreenshot() {
    setIsLoading(true);
    const canvas = await html2canvas(document.querySelector('html') as HTMLElement);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);
    setIsLoading(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 text-secondary hover:text-primary rounder-md border-transparent flex justify-end items-end transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      disabled={isDisabled}
      type="button"
      className="p-2 w-10 h-10 surface-secondary hover:surface-secondary-hover rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:offset focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
      onClick={handleTakeScreenshot}
    >
      {isLoading ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
