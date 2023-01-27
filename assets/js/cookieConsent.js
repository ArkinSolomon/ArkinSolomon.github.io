const cookieConsentBanner = $('#cookie-consent');
let hasAcceptedCookies = false;

//Check if we already have the cookies set, show the banner and register event handlers if the cookie is not set
if (getCookie('c_pref') === 'true') {
  googleAnalytics();
} else {
  //Show the banner
  cookieConsentBanner.show();

  //Set that the cookies were accepted
  $('#cookie-accept-button').click(() => {
    cookieConsentBanner.hide();
    setCookie('c_pref', 'true', 730);
    googleAnalytics();
    hasAcceptedCookies = true;
  });

  //Set that the cookies were not accepted
  $('#cookie-deny-button').click(() => {
    cookieConsentBanner.hide();
  });
}

//Set google analytics
function googleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-MZMD99CZ5B', {
    cookie_domain: 'arkinsolomon.net',
    cookie_prefix: 'as'
  });
}

//Deny cookies (after accepting, only called from cookie policy page)
function denyCookie() {
  setCookie('as_ga', '', 0);
  setCookie('as_gid', '', 0);
  setCookie('as_ga_MZMD99CZ5B', '', 0);
  setCookie('c_pref', '', 0);
  setCookie('theme', '', 0);
  location.reload();
}
