import React, { useState, useEffect } from "react";

const News = () => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "market",
      market: "crypto",
      colorTheme: "light",
      isTransparent: false,
      displayMode: "regular",
      width: "100%",
      height: "800px",
      fontSize: 10,
      locale: "en",
    });

    if (container) {
      container.appendChild(script);
    }
  }, [container]);

  return (
    <div ref={setContainer}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default News;
