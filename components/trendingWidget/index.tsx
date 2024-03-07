const coins = ['BTC', 'ETH', 'SOL'];
export default function TrendingWidget() {
  return (
    <div>
      <h3>Trending Coins (24h)</h3>
      <ul>
        {coins.map((coin) => (
          <li key=""></li>
        ))}
      </ul>
    </div>
  );
}
