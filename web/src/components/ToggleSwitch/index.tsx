import { ChangeEvent, useState } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';

interface ToggleSwitchProps {
  label?: string;
  containerProps?: Record<string, unknown>;
  isChecked: boolean;
}

export function ToggleSwitch({ label, isChecked = false, ...rest }: ToggleSwitchProps) {
  const { toggleTheme } = useDarkMode();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    toggleTheme();
  };

  return (
    <label {...rest} className="flex gap-2 items-center cursor-pointer">
      {label && <span className="">{label}</span>}
      <input
        className="absolute opacity-0 peer"
        checked={checked}
        type="checkbox"
        onChange={handleChange}
      />
      <div
        className={`relative w-14 h-7 rounded-full bg-zinc-700 ease-in-out duration-300 before:absolute before:top-0 before:left-0 before:w-7 before:h-7 before:rounded-full before:ease-in-out before:duration-300 before:bg-zinc-50 before:translate-y-0 before:peer-checked:bg-black peer-checked:before:translate-x-full`}
      />
    </label>
  );
}
