import Fundamentals from './Fundamentals';
import Performance from './Performance';

export default function Overview() {
  return (
    <section className="bg-white space-y-8 rounded-lg px-2 py-4 md:px-6 md:py-8">
      <Performance />
      <Fundamentals />
    </section>
  );
}
