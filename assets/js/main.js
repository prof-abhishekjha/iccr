/**
 * Template Name: Append
 * Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /**
   * Mobile nav toggle
   */
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mobileSettingsToggle = document.getElementById("settingsToggle");
  const navMenu = document.getElementById("navmenu");
  const navSettings = document.getElementById("navsettings");

  // Toggle Main Menu
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", function () {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavToggle.classList.toggle("bi-list");
      mobileNavToggle.classList.toggle("bi-x");

      // Close settings if open
      if (document.body.classList.contains("mobile-settings-active")) {
        document.body.classList.remove("mobile-settings-active");
        navSettings.classList.remove("open");
      }
    });
  }

  // Toggle Settings Panel
  if (mobileSettingsToggle) {
    mobileSettingsToggle.addEventListener("click", function () {
      document.body.classList.toggle("mobile-settings-active");
      navSettings.classList.toggle("open");
      mobileSettingsToggle.classList.toggle("bi-gear");
      mobileSettingsToggle.classList.toggle("bi-x");

      // Close nav menu if open
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
        navMenu.classList.remove("open");
      }
    });
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
        mobileNavToggle.classList.toggle("bi-list");
        mobileNavToggle.classList.toggle("bi-x");
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
  window.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Load Navbar using fetch and add scroll-to-hide
   */
  fetch('navbar.html')
    .then((response) => {
      if (!response.ok) throw new Error('Navbar not found');
      return response.text();
    })
    .then((html) => {
      document
        .getElementById('navbar1-placeholder')
        .insertAdjacentHTML('beforebegin', html);

      const subHeader = document.querySelector('.sub-header');
      if (!subHeader) return;

      // Scroll-to-hide functionality
      window.addEventListener('scroll', () => {
        subHeader.classList.toggle('hide', window.scrollY > 20);
      });
    })
    .catch((error) => {
      console.error('Error loading navbar:', error);
    });

  /**
   * Initialize Swiper
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );
      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  /**
   * Correct scrolling position for hash links
   */
  function correctScrollingPosition() {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }

  /**
   * Initialize functions on page load
   */
  window.addEventListener("load", () => {
    initSwiper();
    correctScrollingPosition();
    toggleScrollTop();
  });
});
