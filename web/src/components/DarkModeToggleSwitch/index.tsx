import { MoonStars, SunDim } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';

interface DarkModeToggleSwitchProps {
  label?: string;
  containerProps?: Record<string, unknown>;
  isChecked: boolean;
}

export function DarkModeToggleSwitch({
  isChecked = false,
  ...rest
}: DarkModeToggleSwitchProps) {
  const { toggleTheme } = useDarkMode();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    toggleTheme();
  };

  return (
    <label {...rest} className="flex gap-2 items-center cursor-pointer">
      <input
        className="absolute opacity-0 peer"
        checked={checked}
        type="checkbox"
        onChange={handleChange}
      />
      <div
        className={`relative w-14 h-7 border-2 border-zinc-500 rounded-full shadow-[0_35px_60px_-15px_#e4e7ec] ${
          checked ? 'bg-zinc-900' : 'bg-white'
        }`}
      >
        <div
          className={`absolute top-0 bottom-0 m-auto w-5 h-5 origin-[50%_50%] transition-all duration-[500ms] ease-[cubic-bezier(.26,2.5,.46,.71)]  ${
            checked
              ? 'translate-x-[1.6rem] -rotate-45 opacity-0'
              : 'translate-x-[1.8rem] opacity-100 rotate-0'
          }`}
        >
          <SunDim className="w-5 h-5" color="#ffbb52" weight="fill" />
        </div>
        <div
          className={`absolute transition-all duration-[500ms] ease-[cubic-bezier(.26,2,.46,.71)] w-5 h-5 rounded-full bg-[#ffeccf] left-1 top-0 bottom-0 m-auto shadow-[inset_0px_0px_0px_0.15em_#ffbb52] ${
            checked &&
            'bg-[#485367] shadow-[inset_0px_0px_0px_0.15em_white] translate-x-[1.5rem]'
          }`}
        />
        <div
          className={`absolute top-0 bottom-0 m-auto w-5 h-5 origin-[50%_50%] transition-all duration-[500ms] ease-[cubic-bezier(.26,2.5,.46,.71)]  ${
            checked
              ? 'translate-x-[0.2rem] -rotate-0 opacity-100'
              : 'translate-x-[1rem] opacity-0 -rotate-12'
          }`}
        >
          <MoonStars className="w-5 h-5" color="#485367" weight="fill" />
        </div>
      </div>
    </label>
  );
}
