(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initPocForm();
    initHeaderShadowOnScroll();
  });

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.getElementById('primary-nav');
    if (!toggle || !links) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      links.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    }

    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
    });

    links.addEventListener('click', function (e) {
      var target = e.target;
      if (target && target.tagName === 'A') setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    var mq = window.matchMedia('(min-width: 769px)');
    var handleMq = function (event) { if (event.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener('change', handleMq);
    else if (mq.addListener) mq.addListener(handleMq);
  }

  function initPocForm() {
    var form = document.getElementById('poc-form');
    if (!form) return;
    var status = form.querySelector('.form-status');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) {
        status.textContent = 'Thank you — we review all POC applications within 2 business days.';
      }
      form.reset();
    });
  }

  function initHeaderShadowOnScroll() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var ticking = false;
    function update() {
      ticking = false;
      if (window.scrollY > 8) nav.style.boxShadow = '0 1px 12px rgba(11,31,58,0.06)';
      else nav.style.boxShadow = 'none';
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }
})();
