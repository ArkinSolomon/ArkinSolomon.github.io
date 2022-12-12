let isDark = false;

//Check if the theme cookie has been set
const themeCookie = getCookie('theme');
if (themeCookie.length) {
  if (themeCookie === 'dark') {
    isDark = true;
    toggleDarkMode();
  }
}

//Change to dark mode if the user is in dark
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  isDark = true;
  toggleDarkMode();
}

$(function () {

  //Enable transitions
  $('body').removeClass('notransition');

  updateThemeImage();
  $('#theme-button').click(() => {
    toggleDarkMode();
    updateThemeImage();

    //Set the theme cookie
    if (getCookie('c_pref').length) {
      setCookie('theme', isDark ? 'dark' : 'light', 365);
    }
  });
});

//Toggle dark mode on or off
function toggleDarkMode() {
  const body = $('body');

  //Change the root class
  body.toggleClass('theme--default');
  body.toggleClass('theme--dark');
  isDark = body.hasClass('theme--dark');
}

//Update the image
function updateThemeImage() {
  $('#theme-image').attr('src', `/images/${isDark ? 'sun' : 'moon'}.png`);
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
    while (c.charAt(0) == ' ')
      c = c.substring(1);
    if (c.indexOf(name) == 0)
      return c.substring(name.length, c.length);
  }
  return "";
}