console.log("connected");

const navSlide = () => {
  const burger    = document.querySelector('.burger');
  const nav       = document.querySelector('.nav-links');
  const navLinks  = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
      // burger toggle: happen when click on toggle
      nav.classList.toggle('nav-active');
      //animation links: how to each link show up
      navLinks.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = ``;
        }
        else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        console.log(index / 7);
      });
      //burger animation: change burger to X mark
      burger.classList.toggle('toggle');
    });
}

navSlide();
