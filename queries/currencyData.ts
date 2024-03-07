import { TrendingCoinsResponse } from '@/types';

type CurrencyInfo = {
  symbol: string;
  image: {
    small: string;
  };
};

type PriceResponse = {
  [id: string]: {
    inr: number;
    inr_24h_change: number;
    usd: number;
    usd_24h_change: number;
  };
};

export const fetchCurrencyData = async (id: string) => {
  try {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=inr,usd&include_24hr_change=true`
    );

    const priceData: PriceResponse = await data.json();
    return priceData[id];
  } catch (error) {
    console.log(error);
    throw new Error('Could not fetch currency data');
  }
};

export const fetchInfoData = async (id: string) => {
  try {
    const infoData = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const info: CurrencyInfo = await infoData.json();
    return { symbol: info.symbol, imgUrl: info.image.small };
  } catch (error) {
    console.log(error);
    throw new Error('Could not fetch currency info');
  }
};

export const fetchTrendingCoins = async () => {
  try {
    const trendingCoinsData = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`
    );

    const trendingCoins: TrendingCoinsResponse = await trendingCoinsData.json();
    return trendingCoins.coins;
  } catch (error) {
    console.log(error);
    throw new Error('Could not fetch trending coins');
  }
};
