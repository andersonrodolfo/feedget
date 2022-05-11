import { ToggleSwitch } from '@/components/ToggleSwitch';
import { useDarkMode } from '@/hooks/useDarkMode';

export function Header() {
  const { componentMounted, theme } = useDarkMode();
  const surfaceStyle = 'surface-secondary-hover';
  const menuItemStyle = `${surfaceStyle} w-20 h-4 rounded-lg shrink-0`;

  return (
    <header className="surface-secondary">
      <div className="max-w-7xl m-auto h-[72px] p-4 flex justify-between items-center">
        <div className={`${surfaceStyle} w-40 h-10 rounded-lg shrink-0`}></div>
        <ul className="flex gap-4 items-center p-4">
          <li className={menuItemStyle}></li>
          <li className={menuItemStyle}></li>
          <li className={menuItemStyle}></li>
          <li className={menuItemStyle}></li>
        </ul>
        <div className="flex gap-4 items-center">
          {componentMounted && <ToggleSwitch isChecked={theme === 'dark'} />}
          <div className={`${surfaceStyle} w-8 h-8 rounded-lg shrink-0`}></div>
          <div className={`${surfaceStyle} w-12 h-12 rounded-full shrink-0`}></div>
        </div>
      </div>
    </header>
  );
}
