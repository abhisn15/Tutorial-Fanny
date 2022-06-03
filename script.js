// Animation List
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// Animation Scroll
const btnScrollToTop = document.querySelector(".btnScrollToTop");

  btnScrollToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      btnScrollToTop.classList.add("active");
    } else {
      btnScrollToTop.classList.remove("active");
    }
})