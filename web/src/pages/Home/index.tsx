import { Widget } from '@/components/Widget';

export function Home() {
  const boxStyle = 'surface-secondary h-72 rounded-lg';
  return (
    <>
      <section className="max-w-7xl mx-auto my-12 px-4">
        <div className="surface-secondary h-32 px-14 rounded-lg flex items-center">
          <p>Experimente enviar um feedback de um bug na aplicação 🐛 </p>
        </div>
        <ul className="my-8 grid grid-cols-3 gap-8">
          <li className={boxStyle}></li>
          <li className={boxStyle}></li>
          <li className={boxStyle}></li>
          <li className={boxStyle}></li>
          <li className={boxStyle}></li>
        </ul>
      </section>
      <Widget />
    </>
  );
}
