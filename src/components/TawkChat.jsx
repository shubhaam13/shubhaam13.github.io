import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    if (document.querySelector("[data-portfolio-tawk]") || window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/5eced6e48ee2956d73a53c5d/default";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    script.dataset.portfolioTawk = "true";
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) firstScript.parentNode.insertBefore(script, firstScript);
    else document.body.appendChild(script);
  }, []);

  return null;
}
