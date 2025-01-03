    window.addEventListener('scroll', function() {
      var backToTopButton = document.getElementById('back-to-top');
      var section3 = document.querySelector('.section3');
  
      if (window.scrollY >= section3.offsetTop) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });

    