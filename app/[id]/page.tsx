import CoinView from '@/components/coinView';
import CurrentCurrencyIndicator from '@/components/currentCurrencyIndicator';
import Navigator from '@/components/navigator';
import Overview from '@/components/overview';
import PromoWidget from '@/components/promoWidget';
import TrendingWidget from '@/components/trendingWidget';
import { fetchCurrencyData, fetchInfoData } from '@/queries/currencyData';

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

  return (
    <section className="padding-x overflow-hidden">
      <CurrentCurrencyIndicator
        name={id}
        imgUrl={infoData.imgUrl}
        symbol={infoData.symbol}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 space-y-6">
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
        </div>

        <div>
          <PromoWidget />
          <TrendingWidget />
        </div>
      </div>
    </section>
  );
}
