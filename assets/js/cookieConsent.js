const cookieConsentBanner = $('#cookie-consent');

//Check if we already have the cookies set, show the banner and register event handlers if the cookie is not set
if (getCookie('c_pref') === 'true') {
  googleAnalytics();
} else {

  console.log("show");
  //Show the banner
  cookieConsentBanner.show();

  //Set that the cookies were accepted
  $('#cookie-accept-button').click(() => {
    cookieConsentBanner.hide();
    setCookie('c_pref', 'true', 730);
    googleAnalytics();
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
  gtag('config', 'G-MZMD99CZ5B');
}

//Deny cookies (after accepting, only called from cookie policy page)
function denyCookie(){
  setCookie('_ga', '', 0);
  setCookie('_gid', '', 0);
  setCookie('_ga_MZMD99CZ5B', '', 0);
  setCookie('c_pref', '', 0);
  location.reload();
}

//These functions taken from w3schools (https://www.w3schools.com/js/js_cookies.asp)
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}