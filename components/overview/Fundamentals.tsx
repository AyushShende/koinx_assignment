import { FaInfoCircle } from 'react-icons/fa';

export default function Fundamentals() {
  return (
    <div className="space-y-4">
      <h4 className="font-medium text-xl flex-item-center gap-2">
        <span>Fundamentals</span>
        <FaInfoCircle color="#9ca3af" />
      </h4>
      <div className="grid md:grid-cols-2 md:gap-16 text-sm">
        <div className="space-y-3">
          <div className="flex justify-between pb-3 border-b-2">
            <p className="text-slate-400">Bitcoin Price</p>
            <p>$16815.45</p>
          </div>
          <div className="flex justify-between pb-3 border-b-2">
            <p className="text-slate-400">24h Low / 24h High</p>
            <p>$16382.45 / $16784.02</p>
          </div>
          <div className="flex justify-between pb-3 border-b-2">
            <p className="text-slate-400">7d Low / 7d High</p>
            <p>$16382.45 / $16784.02</p>
          </div>
          <div className="flex justify-between pb-3 border-b-2">
            <p className="text-slate-400">Tading Volume</p>
            <p>$23,249,202,782</p>
          </div>
          <div className="flex justify-between pb-3 border-b-2">
            <p className="text-slate-400">Market Cap Rank</p>
            <p>#1</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between pb-3 border-b-2">
            <p className="text-slate-400">Market Cap</p>
            <p>$323,507,202,782</p>
          </div>
          <div className="flex justify-between pb-3 border-b-2">
            <p className="text-slate-400">Market Cap Dominance</p>
            <p>38.343%</p>
          </div>
          <div className="flex justify-between pb-3 border-b-2">
            <p className="text-slate-400">Volume / Market Cap</p>
            <p>0.0718</p>
          </div>
          <div className="flex justify-between items-center border-b-2">
            <p className="text-slate-400">All-Time High</p>
            <div>
              <p className="text-right">
                $69,044.77 <span className="text-red-500">-75.6%</span>
              </p>
              <p className="text-xs">Nov 10, 2021 (about 1 year)</p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b-2">
            <p className="text-slate-400">All-Time Low</p>
            <div>
              <p className="text-right">
                $68.81 <span className="text-green-500">24729.6%</span>
              </p>
              <p className="text-xs">Nov 6, 2013 (about 10 year)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
