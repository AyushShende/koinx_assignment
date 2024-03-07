import { TrendingCoinsResponse } from '@/types';

import CoinCard from './CoinCard';

type SuggestionProps = TrendingCoinsResponse;

export default function Suggestions({ coins }: SuggestionProps) {
  return (
    <section className="py-4 md:py-8 padding-x space-y-6 bg-white">
      <h3 className="title text-2xl">You May Also Like</h3>
      <div className="flex overflow-x-auto gap-3">
        {coins.slice(0, 5).map((coin) => {
          const {
            item: {
              data: {
                price,
                price_change_percentage_24h: { usd },
                sparkline,
              },
              small,
              symbol,
            },
          } = coin;
          return (
            <CoinCard
              key={coin.item.symbol}
              imgUrl={small}
              price={price}
              price_change={usd}
              sparkline={sparkline}
              symbol={symbol}
            />
          );
        })}
      </div>
      <h3 className="title text-2xl">Trending Coins</h3>
      <div className="flex overflow-x-auto gap-3">
        {coins.slice(0, 5).map((coin) => {
          const {
            item: {
              data: {
                price,
                price_change_percentage_24h: { usd },
                sparkline,
              },
              small,
              symbol,
            },
          } = coin;
          return (
            <CoinCard
              key={coin.item.symbol}
              imgUrl={small}
              price={price}
              price_change={usd}
              sparkline={sparkline}
              symbol={symbol}
            />
          );
        })}
      </div>
    </section>
  );
}
