export type CurrencyInfo = {
  name: string;
  imgUrl?: string;
  symbol?: string;
};

export type CoinPriceData = {
  inr: number;
  usd: number;
  usdChange: number;
};

export type TrendingCoinsResponse = {
  coins: [
    {
      item: {
        name: string;
        symbol: string;
        small: string;
        data: {
          price: string;
          price_change_percentage_24h: {
            usd: number;
          };
          sparkline: string;
        };
      };
    }
  ];
};
