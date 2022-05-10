import { Widget } from '@/components/Widget';

export function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto my-12 px-4">
        <div className="h-32 px-14 dark:bg-zinc-700 rounded-lg flex items-center">
          <p>Experimente enviar um feedback de um bug na aplicação 🐛 </p>
        </div>
        <ul className="my-8 grid grid-cols-3 gap-8">
          <li className="h-72 bg-zinc-700 rounded-lg"></li>
          <li className="h-72 bg-zinc-700 rounded-lg"></li>
          <li className="h-72 bg-zinc-700 rounded-lg"></li>
          <li className="h-72 bg-zinc-700 rounded-lg"></li>
          <li className="h-72 bg-zinc-700 rounded-lg"></li>
        </ul>
      </section>
      <Widget />
    </>
  );
}
