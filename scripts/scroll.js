const scrollTop = document.getElementById("scrollTop");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      document.getElementById("header-logo").setAttribute("src", "./assets/logo-footer.png");
      document.getElementById("header").classList.add("sticky-header");
  } else {
    document.getElementById("header-logo").setAttribute("src", "./assets/logo-light.png");
    document.getElementById("header").classList.remove("sticky-header");
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}