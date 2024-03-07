import { RxDoubleArrowRight } from 'react-icons/rx';
import CoinName from '../coinView/CoinName';
import { CurrencyInfo } from '@/types';

export default function CurrentCurrencyIndicator({
  name,
  imgUrl,
  symbol,
}: CurrencyInfo) {
  return (
    <div className="space-y-2 py-3">
      <div className="text-sm flex items-center gap-1">
        <span className="font-light">Cryptocurrencies</span>
        <RxDoubleArrowRight />
        <span className="text-slate-800 capitalize">{name}</span>
      </div>
      <div className="md:hidden">
        <CoinName name={name} imgUrl={imgUrl} symbol={symbol} />
      </div>
    </div>
  );
}
