import { CurrencyInfo } from '@/types';
import Image from 'next/image';

export default function CoinName({ name, imgUrl, symbol }: CurrencyInfo) {
  return (
    <div className="flex gap-8">
      <div className="flex gap-2 items-center">
        <Image src={imgUrl || ''} alt="coin logo" width={30} height={30} />
        <h3 className="title text-lg capitalize">{name}</h3>
        <span className="uppercase font-medium text-sm">{symbol}</span>
      </div>

      <div className="bg-slate-500 text-white rounded md:rounded-lg p-2">
        Rank #1
      </div>
    </div>
  );
}
