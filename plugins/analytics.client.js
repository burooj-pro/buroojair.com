// Load analytics scripts after page is interactive (not blocking render)
// Optimized for social media campaign tracking - fires early enough for pixels to work
// but late enough to not block initial page render
export default function () {
  if (process.client) {
    // Initialize dataLayer early so events can be queued before scripts load
    if (!window.dataLayer) {
      window.dataLayer = []
    }
    
    // Initialize pixel queues early for proper event tracking
    // This ensures events fired before scripts load are still captured
    if (!window.fbq) {
      window.fbq = function() {
        (window.fbq.q = window.fbq.q || []).push(arguments)
      }
      window.fbq.l = +new Date()
    }
    
    if (!window.snaptr) {
      window.snaptr = function() {
        (window.snaptr.q = window.snaptr.q || []).push(arguments)
      }
    }
    
    if (!window.ttq) {
      window.ttq = []
    }
    
    // Use requestIdleCallback for non-critical analytics to avoid blocking main thread
    // Fallback to setTimeout if requestIdleCallback is not available
    const loadWhenIdle = (callback) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 2000 })
      } else {
        setTimeout(callback, 100)
      }
    }
    
    // Load critical analytics on DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initCriticalAnalytics()
        // Load non-critical pixels when browser is idle to avoid blocking
        loadWhenIdle(() => {
          initNonCriticalAnalytics()
        })
      }, { once: true })
    } else {
      // DOM already ready
      initCriticalAnalytics()
      loadWhenIdle(() => {
        initNonCriticalAnalytics()
      })
    }
  }
}

// Load critical analytics (GA4, GTM) immediately for accurate tracking
function initCriticalAnalytics() {
  // Ensure dataLayer exists (should already be initialized above)
  if (!window.dataLayer) {
    window.dataLayer = []
  }
  
  // Google Analytics gtag function
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', 'G-27G4RCWQCP')

  // Load GA4 script asynchronously
  const gaScript = document.createElement('script')
  gaScript.async = true
  gaScript.defer = true
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-27G4RCWQCP'
  document.head.appendChild(gaScript)

  // Google Tag Manager
  const gtmScript = document.createElement('script')
  gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-55SGMJF5');`
  document.head.appendChild(gtmScript)
}

// Load non-critical pixels (TikTok, Snap, Meta) when browser is idle
function initNonCriticalAnalytics() {
  // TikTok Pixel
  const tiktokScript = document.createElement('script')
  tiktokScript.innerHTML = `!function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
    ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
    ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
    for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
    ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
    ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
    var s=d.createElement("script");s.type="text/javascript";s.async=!0;s.defer=true;
    s.src=r+"?sdkid="+e+"&lib="+t;
    var f=d.getElementsByTagName("script")[0];
    if(f&&f.parentNode){f.parentNode.insertBefore(s,f);}else{(d.head||d.body||d.documentElement).appendChild(s);}};
    ttq.load("D0M466RC77U6GBUFK3M0");
    ttq.page();
  }(window, document, 'ttq');`
  document.head.appendChild(tiktokScript)

  // Snap Pixel
  const snapScript = document.createElement('script')
  snapScript.innerHTML = `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
    {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
    a.queue=[];var s='script';r=t.createElement(s);r.async=!0;r.defer=true;
    r.src=n;var u=t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r,u);})(window,document,
    'https://sc-static.net/scevent.min.js');

    snaptr('init', '74876930-c068-4ef8-abc7-f9c5f4cdc9f0');
    snaptr('track', 'PAGE_VIEW');`
  document.head.appendChild(snapScript)

  // Meta Pixel
  const metaScript = document.createElement('script')
  metaScript.innerHTML = `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;t.defer=true;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2545877985601143');
    fbq('track', 'PageView');`
  document.head.appendChild(metaScript)
}

