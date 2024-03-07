import { TrendingCoinsResponse } from '@/types';
import Image from 'next/image';

type CoinDataProps = {
  symbol: string;
  imgUrl: string;
  price: string;
  price_change: number;
  sparkline: string;
};

export default function CoinCard({
  sparkline,
  symbol,
  price,
  price_change,
  imgUrl,
}: CoinDataProps) {
  return (
    <div className="space-y-2 border min-w-[200px] max-w-[250px] border-slate-300 rounded-lg p-3">
      <div className="flex-item-center gap-1">
        <Image
          className="rounded-full"
          width={20}
          height={20}
          src={imgUrl}
          alt="coin"
        />
        <span className="text-sm">{symbol}</span>
        <span className="text-xs">{price_change.toFixed(2)}</span>
      </div>

      <div className="font-medium">{price}</div>

      <Image
        className="w-full"
        src={sparkline}
        alt="coin graph"
        width={50}
        height={50}
      />
    </div>
  );
}
