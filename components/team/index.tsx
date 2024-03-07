import Image from 'next/image';

export default function Team() {
  return (
    <section className="bg-white rounded-lg space-y-6 px-2 py-4 md:px-6 md:py-8">
      <h3 className="title text-2xl">Team</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia
        dolorum facere repellendus minus unde eaque architecto delectus
        exercitationem rerum hic vero eos deserunt ab, laboriosam at similique
        corporis et?
      </p>
      <div className="flex-item-center flex-col md:flex-row gap-6 bg-sky-100 px-6 py-3 rounded-lg">
        <div className="text-center">
          <Image
            className="rounded-lg mx-auto"
            src="/person1.png"
            alt="team-member-john"
            height={100}
            width={100}
          />
          <p className="text-slate-800 font-semibold text-lg pt-2">
            John Smith
          </p>
          <p className="text-slate-400 whitespace-nowrap">Designation here</p>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          exercitationem, perferendis maxime pariatur quod quidem quam tenetur
          enim delectus voluptas. Laborum hic vel ducimus ab explicabo ipsa
          Consequuntur iure ipsum minus autem, accusantium esse aut voluptatibus
          magni nemo possimus voluptate necessitatibus! Et voluptates illo
          maiores.
        </div>
      </div>
      <div className="flex-item-center flex-col md:flex-row gap-6 bg-sky-100 px-6 py-3 rounded-lg">
        <div className="text-center">
          <Image
            className="rounded-lg mx-auto"
            src="/person2.png"
            alt="team-member-elina"
            height={100}
            width={100}
          />
          <p className="text-slate-800 font-semibold text-lg pt-2">
            Elina Williams
          </p>
          <p className="text-slate-400 whitespace-nowrap">Designation here</p>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          exercitationem, perferendis maxime pariatur quod quidem quam tenetur
          enim delectus voluptas. Laborum hic vel ducimus ab explicabo ipsa
          Consequuntur iure ipsum minus autem, accusantium esse aut voluptatibus
          magni nemo possimus voluptate necessitatibus! Et voluptates illo
          maiores.
        </div>
      </div>
      <div className="flex-item-center flex-col md:flex-row gap-6 bg-sky-100 px-6 py-3 rounded-lg">
        <div className="text-center">
          <Image
            className="rounded-lg mx-auto"
            src="/person3.png"
            alt="team-member-john"
            height={100}
            width={100}
          />
          <p className="text-slate-800 font-semibold text-lg pt-2">
            John Smith
          </p>
          <p className="text-slate-400 whitespace-nowrap">Designation here</p>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          exercitationem, perferendis maxime pariatur quod quidem quam tenetur
          enim delectus voluptas. Laborum hic vel ducimus ab explicabo ipsa
          Consequuntur iure ipsum minus autem, accusantium esse aut voluptatibus
          magni nemo possimus voluptate necessitatibus! Et voluptates illo
          maiores.
        </div>
      </div>
    </section>
  );
}
