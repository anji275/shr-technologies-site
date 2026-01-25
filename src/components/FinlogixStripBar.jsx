import { useEffect, useRef } from "react";

function FinlogixStripBar() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Prevent duplicate script loading
    if (!document.getElementById("finlogix-script")) {
      const script = document.createElement("script");
      script.id = "finlogix-script";
      script.src = "https://widget.finlogix.com/Widget.js";
      script.async = true;

      script.onload = () => {
        if (window.Widget) {
          window.Widget.init({
            widgetId: "d9bd562b-0ca9-4d1c-a3ab-3889204e1dd8",
            type: "StripBar",
            language: "en",
            symbolPairs: [
              { symbolId: "19", symbolName: "EURUSD" },
              { symbolId: "36", symbolName: "USDJPY" },
              { symbolId: "20", symbolName: "GBPAUD" },
              { symbolId: "44", symbolName: "XAUUSD" },
              { symbolId: "128", symbolName: "USWTI" },
              { symbolId: "157", symbolName: "SP500" }
            ],
            isAdaptive: true
          });
        }
      };

      document.body.appendChild(script);
    }

    // Cleanup: remove duplicate widget content
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
  <div className="finlogix-wrapper">
    <div className="finlogix-container" ref={containerRef}></div>
  </div>
);
}

export default FinlogixStripBar;