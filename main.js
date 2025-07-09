document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    heroTitle.classList.add('animate-in');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    setTimeout(() => {
      if (heroSubtitle) heroSubtitle.classList.add('animate-in');
    }, 300);
  }
  const reviewsEls = document.querySelectorAll('.why-title, .reviews-window__underline');
  if (reviewsEls.length > 0) {
    const reviewsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          reviewsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    reviewsEls.forEach(el => reviewsObserver.observe(el));
  }
  const whatWeDoEls = document.querySelectorAll('.what-we-do-title, .what-we-do-underline, .what-we-do-col');
  if (whatWeDoEls.length > 0) {
    const whatWeDoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('animated');
          whatWeDoObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    whatWeDoEls.forEach(el => whatWeDoObserver.observe(el));
  }
  const howItWorksEls = document.querySelectorAll(
    '.how-it-works-title, .how-it-works-underline, .how-it-works-step-text, .how-it-works-images img, .how-it-works-bottom'
  );
  if (howItWorksEls.length > 0) {
    const howItWorksObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('animated');
          howItWorksObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    howItWorksEls.forEach(el => howItWorksObserver.observe(el));
  }
  const header = document.getElementById('mainHeader');
  if (header) {
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }
      lastScrollY = window.scrollY;
    });
  }
  const modal = document.getElementById('photo-modal');
  if (modal) {
    document.querySelectorAll('.photo-frame img').forEach(img => {
      img.addEventListener('click', function() {
        const modalImg = modal.querySelector('.photo-modal-img');
        modalImg.src = this.getAttribute('data-full') || this.src;
        modal.classList.add('active');
      });
    });
    const closeBtn = modal.querySelector('.photo-modal-close');
    if (closeBtn) {
      closeBtn.onclick = function() { modal.classList.remove('active'); };
    }
    modal.onclick = function(e) {
      if(e.target === this) this.classList.remove('active');
    };
    document.addEventListener('keydown', function(e){
      if(e.key === "Escape") modal.classList.remove('active');
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('mainNav');
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      e.target !== burger &&
      !burger.contains(e.target)
    ) {
      burger.classList.remove('active');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  });
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
});