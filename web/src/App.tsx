import { Header } from '@/components/Header';
import { Toastify } from '@/components/Toast';

import { Home } from './pages/Home';

export function App() {
  return (
    <div>
      <Toastify />
      <Header />
      <main className="max-md:mt-[120px]">
        <Home />
      </main>
    </div>
  );
}
