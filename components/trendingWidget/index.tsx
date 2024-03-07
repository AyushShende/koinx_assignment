import { TrendingCoinsResponse } from '@/types';
import Image from 'next/image';

// type TrendingWidgetProps = {
//   imgUrl: string;
//   name: string;
//   symbol: string;
//   price_change: number;
// };
export default function TrendingWidget({ coins }: TrendingCoinsResponse) {
  return (
    <section className="bg-white rounded-lg space-y-6 px-2 py-4 md:px-6 md:py-8">
      <h3 className="title text-2xl">Trending Coins (24h)</h3>
      <div className="space-y-3">
        {coins.slice(0, 3).map((coin) => (
          <div key={coin.item.symbol} className="flex justify-between">
            <div className="flex gap-2">
              <Image
                className="rounded-full"
                width={20}
                height={20}
                src={coin.item.small}
                alt="coin"
              />
              <div>
                <span>{coin.item.name}</span>
                <span>({coin.item.symbol})</span>
              </div>
            </div>
            <div>
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
