export default function Navigator() {
  return (
    <div>
      <ul className="flex overflow-x-auto gap-8">
        <li className="text-blue-700 font-medium whitespace-nowrap border-b-2 border-blue-700 pb-2">
          Overview
        </li>
        <li className="text-slate-700 font-medium whitespace-nowrap">
          Fundamentals
        </li>
        <li className="text-slate-700 font-medium whitespace-nowrap">
          News Insights
        </li>
        <li className="text-slate-700 font-medium whitespace-nowrap">
          Sentiments
        </li>
        <li className="text-slate-700 font-medium whitespace-nowrap">Team</li>
        <li className="text-slate-700 font-medium whitespace-nowrap">
          Technicals
        </li>
        <li className="text-slate-700 font-medium whitespace-nowrap">
          Tokenomics
        </li>
      </ul>
      <div className="h-[1px] bg-slate-300 w-full"></div>
    </div>
  );
}
