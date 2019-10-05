document.addEventListener('DOMContentLoaded', () => {
    const navbarBurgers = 
          Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    if (navbarBurgers.length > 0) {
      navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const targetedMenu = el.dataset.target;
          const menuContainer = document.getElementById(targetedMenu);
          
          el.classList.toggle('is-active');
          menuContainer.classList.toggle('is-active');
        });
      });
    }
  });
