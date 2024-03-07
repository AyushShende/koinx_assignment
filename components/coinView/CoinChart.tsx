'use client';
import React, { useEffect, useRef, memo, RefObject } from 'react';

function CoinChart({ symbol }: { symbol?: string }) {
  const container: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const currentRef = container.current;
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "height": "400",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    if (currentRef && !currentRef.querySelector('iframe')) {
      currentRef.appendChild(script);
    }

    return () => {
      // Cleanup the script when the component is unmounted
      if (currentRef) {
        currentRef.innerHTML = '';
      }
    };
  }, []);

  return (
    <div>
      <h3 className="title text-lg">Bitcoin Price Chart (USD)</h3>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: '100%', width: '100%' }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: 'calc(100% - 32px)', width: '100%' }}
        ></div>
      </div>
    </div>
  );
}

export default memo(CoinChart);
