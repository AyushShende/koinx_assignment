import { CoinPriceData } from '@/types';
import { formatCurrency } from '@/utils';
import { GoTriangleUp } from 'react-icons/go';

export default function CoinPrice({ inr, usd, usdChange }: CoinPriceData) {
  return (
    <div className="space-y-2">
      <div className="flex-item-center gap-8">
        <h3 className="title text-xl md:text-3xl">
          {formatCurrency(usd, 'USD')}
        </h3>
        <div className="flex-item-center gap-4">
          <span className="flex-item-center px-2 py-1 rounded bg-emerald-100 text-emerald-600">
            <GoTriangleUp size={24} />
            {usdChange.toFixed(2)}%
          </span>
          <span className="text-slate-500">(24H)</span>
        </div>
      </div>
      <div className="text-slate-700">
        {formatCurrency(inr, 'INR', 'en-IN')}
      </div>
    </div>
  );
}
