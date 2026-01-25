import { useEffect, useRef } from "react";

function TradingViewTicker() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Capture ref in a variable to use in cleanup
    const container = containerRef.current;

    if (!container) return;

    try {
      // Clear previous widget
      container.innerHTML = "";

      // Create widget div
      const widgetDiv = document.createElement("div");
      widgetDiv.className = "tradingview-widget-container__widget";
      container.appendChild(widgetDiv);

      // Create and configure script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
      script.async = true;

      // Set the configuration as text content instead of script.text
      script.innerHTML = `
        {
          "symbols": [
            { "proName": "TSX:BNS", "title": "Scotiabank" },
            { "proName": "TSX:CM", "title": "CIBC" },
            { "proName": "TSX:RY", "title": "Royal Bank of Canada" },
            { "proName": "TSX:TD", "title": "Toronto-Dominion Bank" },
            { "proName": "TSX:BMO", "title": "Bank of Montreal" }
          ],
          "colorTheme": "dark",
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true
        }
      `;

      container.appendChild(script);

      // Call TradingView script if available
      if (window.TradingView) {
        window.TradingView.widget(script);
      }
    } catch (error) {
      console.error("Error loading TradingView ticker:", error);
    }

    // Cleanup function using captured container variable
    return () => {
      try {
        if (container && container.parentNode) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
      } catch (error) {
        console.error("Error cleaning up TradingView widget:", error);
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "120px",
        padding: "20px",
      }}
    >
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/"
          rel="noopener noreferrer"
          target="_blank"
          title="View markets on TradingView"
        >
          <span className="blue-text">Markets today</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
}

export default TradingViewTicker;