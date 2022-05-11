import { Header } from '@/components/Header';

import { Home } from './pages/Home';

export function App() {
  return (
    <div>
      <Header />
      <main className="max-md:mt-[120px]">
        <Home />
      </main>
    </div>
  );
}
