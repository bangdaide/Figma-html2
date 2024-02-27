function coppy_url() {
  var e = window.location.href;
  navigator.clipboard.writeText(e);
}

const navPc = document.querySelector("#navbar__list--pc");
const navMobile = document.querySelector("#navbar__list--mobile");
navMobile.innerHTML = navPc.innerHTML;
