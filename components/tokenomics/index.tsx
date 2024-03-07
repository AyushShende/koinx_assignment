export default function Tokenomics() {
  return (
    <section className="hidden md:block bg-white rounded-lg space-y-4 px-2 py-4 md:px-6 md:py-8">
      <h3 className="title text-2xl mb-2">Tokenomics</h3>
      <h4 className="text-slate-800 font-semibold text-xl">
        Initial Distribution
      </h4>
      <div className="flex-item-center gap-6">
        <div className="w-40 h-40 relative">
          <div className="w-full h-full rounded-full bg-white border-[30px] border-blue-500 border-t-orange-400 -rotate-45"></div>
          <div className="absolute inset-0 rounded-full bg-transparent"></div>
        </div>
        <div className="space-y-2">
          <div className="flex-item-center gap-2">
            <div className="rounded-full bg-blue-500 w-3 h-3"></div>
            <p>Crowdsale investors: 80%</p>
          </div>
          <div className="flex-item-center gap-2">
            <div className="rounded-full bg-orange-400 w-3 h-3"></div>
            <p>Foundation: 20%</p>
          </div>
        </div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        dolore nihil nulla dolorem voluptas! Distinctio qui illum, saepe
        laudantium totam dignissimos fuga, sit optio adipisci, quaerat aut
        explicabo minus nulla?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Natus, ratione sint accusantium quos mollitia, inventore dolores
        et earum reprehenderit, nisi voluptatibus minus! Laboriosam nam
        assumenda obcaecati atque sed nisi nihil.
      </p>
    </section>
  );
}
