// loadAnalytics.js

function loadScript(src, async = true, defer = false) {
  const script = document.createElement('script');
  script.src = src;
  script.async = async;
  script.defer = defer;
  document.head.appendChild(script);
}

// Cargar Google Tag Manager
function loadGTM() {
  loadScript("https://www.googletagmanager.com/gtag/js?id=G-49R4YX2PCR", true, false);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-49R4YX2PCR');
}

// Cargar Clarity
function loadClarity() {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);
    t.async=1;
    t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "s5ml9cord0");
}

// Esperar a que cargue la página y luego cargar scripts
window.addEventListener('load', () => {
  loadGTM();
  loadClarity();
});
