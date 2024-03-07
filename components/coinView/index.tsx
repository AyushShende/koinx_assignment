import { CoinPriceData, CurrencyInfo } from '@/types';
import CoinChart from './CoinChart';
import CoinName from './CoinName';
import CoinPrice from './CoinPrice';

type CoinViewProps = CurrencyInfo & CoinPriceData;

export default function CoinView({
  inr,
  usd,
  usdChange,
  imgUrl,
  symbol,
  name,
}: CoinViewProps) {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-300 px-6 py-8">
        <div className="hidden md:mb-6 md:block">
          <CoinName imgUrl={imgUrl} name={name} symbol={symbol} />
        </div>
        <CoinPrice inr={inr} usd={usd} usdChange={usdChange} />
        <hr className="my-8" />
        <CoinChart />
      </div>
    </>
  );
}
