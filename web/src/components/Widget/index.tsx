import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import { WidgetForm } from './WidgetForm';

export function Widget() {
  return (
    <Popover className="fixed bottom-4 right-4 md:bottom-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 text-white flex items-center rounded-full px-3 h-12 group drop-shadow-brand ">
        <ChatTeardropDots className="w-6 h-6 overflow-hidden" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
