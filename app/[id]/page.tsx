import About from '@/components/about';
import CoinView from '@/components/coinView';
import CurrentCurrencyIndicator from '@/components/currentCurrencyIndicator';
import Navigator from '@/components/navigator';
import Overview from '@/components/overview';
import PromoWidget from '@/components/promoWidget';
import Sentiment from '@/components/sentiment';
import Suggestions from '@/components/suggestions';
import Team from '@/components/team';
import Tokenomics from '@/components/tokenomics';
import TrendingWidget from '@/components/trendingWidget';
import {
  fetchCurrencyData,
  fetchInfoData,
  fetchTrendingCoins,
} from '@/queries/currencyData';

type CurrencyPageParams = {
  params: {
    id: string;
  };
};

export default async function CurrencyPage({
  params: { id },
}: CurrencyPageParams) {
  const priceData = await fetchCurrencyData(id);
  const infoData = await fetchInfoData(id);
  const trendingCoins = await fetchTrendingCoins();

  return (
    <section className="padding-x overflow-hidden">
      <CurrentCurrencyIndicator
        name={id}
        imgUrl={infoData.imgUrl}
        symbol={infoData.symbol}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="order-1 md:col-span-3 space-y-6">
          <CoinView
            inr={priceData.inr}
            usd={priceData.usd}
            usdChange={priceData.usd_24h_change}
            name={id}
            imgUrl={infoData.imgUrl}
            symbol={infoData.symbol}
          />
          <Navigator />
          <Overview />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>

        <div className="order-3 md:order-2 space-y-4">
          <PromoWidget />
          <TrendingWidget coins={trendingCoins} />
        </div>

        <div className="md:col-span-4 order-2 md:order-3">
          <Suggestions coins={trendingCoins} />
        </div>
      </div>
    </section>
  );
}
