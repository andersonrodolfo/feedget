import { ToggleSwitch } from '@/components/ToggleSwitch';
import { useDarkMode } from '@/hooks/useDarkMode';

export function Header() {
  const { componentMounted, theme } = useDarkMode();
  return (
    <header className="bg-zinc-800">
      <div className="max-w-7xl m-auto h-[72px] p-4 flex justify-between items-center">
        <div className="w-40 h-10 bg-zinc-700 rounded-lg shrink-0"></div>
        <ul className="flex gap-6 items-center p-4">
          <li className="w-24 h-4 bg-zinc-700 rounded-lg shrink-0"></li>
          <li className="w-24 h-4 bg-zinc-700 rounded-lg shrink-0"></li>
          <li className="w-24 h-4 bg-zinc-700 rounded-lg shrink-0"></li>
          <li className="w-24 h-4 bg-zinc-700 rounded-lg shrink-0"></li>
        </ul>
        <div className="flex gap-4 items-center">
          {componentMounted && <ToggleSwitch isChecked={theme === 'dark'} />}
          <div className="w-8 h-8 bg-zinc-700 rounded-lg shrink-0"></div>
          <div className="w-12 h-12 bg-zinc-700 rounded-full shrink-0 "></div>
        </div>
      </div>
    </header>
  );
}
