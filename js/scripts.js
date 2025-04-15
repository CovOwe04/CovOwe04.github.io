/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

let lastScrollTop = 0;
    const navbar = document.getElementById("mainNav");
    const collapseMenu = document.getElementById("navbarResponsive");

    function isMenuOpen() {
        return collapseMenu.classList.contains("show");
    }

    function handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (!isMenuOpen()) {
            if (currentScroll > lastScrollTop) {
                navbar.classList.add("navbar-hide");
            } else {
                navbar.classList.remove("navbar-hide");
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    // Regular scroll event
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Fallback for mobile touch scroll
    let touchStartY = 0;
    window.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
        const currentY = e.touches[0].clientY;
        if (!isMenuOpen()) {
            if (currentY < touchStartY) {
                navbar.classList.add("navbar-hide"); // scroll down
            } else {
                navbar.classList.remove("navbar-hide"); // scroll up
            }
        }
        touchStartY = currentY;
    }, { passive: true });