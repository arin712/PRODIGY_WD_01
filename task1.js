const nav = document.getElementById('main-nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});