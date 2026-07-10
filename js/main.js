(function () {

  function setYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  function setupNavAutoClose() {
    const navContent = document.getElementById('navContent');
    if (!navContent) return;

    navContent.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (!navContent.classList.contains('show')) return;
        const collapse = bootstrap.Collapse.getOrCreateInstance(navContent);
        collapse.hide();
      });
    });
  }

  function setupBeforeAfter() {
    document.querySelectorAll('.pm-ba').forEach(container => {
      const before = container.getAttribute('data-before');
      const after = container.getAttribute('data-after');
      const labelBefore = container.getAttribute('data-label-before') || 'Before';
      const labelAfter = container.getAttribute('data-label-after') || 'After';

      const beforeOk = before && imageExistsHint(before);
      const afterOk = after && imageExistsHint(after);

      if (!beforeOk && !afterOk) {
        container.innerHTML =
          '<div class="pm-ba-empty">' +
          '<div><i class="fa-regular fa-image fa-2x mb-2"></i>' +
          '<div>Drop your before/after screenshots in <code>assets/projects/</code></div></div>' +
          '</div>';
        return;
      }

      const beforeImg = document.createElement('img');
      beforeImg.src = before;
      beforeImg.alt = labelBefore;
      beforeImg.className = 'pm-ba-img';
      beforeImg.onerror = () => beforeImg.replaceWith(makePlaceholder(labelBefore));

      const afterWrap = document.createElement('div');
      afterWrap.className = 'pm-ba-after-wrap';
      const afterImg = document.createElement('img');
      afterImg.src = after;
      afterImg.alt = labelAfter;
      afterImg.className = 'pm-ba-img';
      afterImg.onerror = () => afterImg.replaceWith(makePlaceholder(labelAfter));
      afterWrap.appendChild(afterImg);

      const labelB = document.createElement('span');
      labelB.className = 'pm-ba-label before';
      labelB.textContent = labelBefore;

      const labelA = document.createElement('span');
      labelA.className = 'pm-ba-label after';
      labelA.textContent = labelAfter;

      const handle = document.createElement('div');
      handle.className = 'pm-ba-handle';

      container.innerHTML = '';
      container.appendChild(beforeImg);
      container.appendChild(afterWrap);
      container.appendChild(labelB);
      container.appendChild(labelA);
      container.appendChild(handle);

      let dragging = false;

      function setPosition(clientX) {
        const rect = container.getBoundingClientRect();
        const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
        afterWrap.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
        handle.style.left = pct + '%';
      }

      container.addEventListener('mousedown', e => { dragging = true; setPosition(e.clientX); });
      window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
      window.addEventListener('mouseup', () => { dragging = false; });

      container.addEventListener('touchstart', e => {
        dragging = true;
        if (e.touches[0]) setPosition(e.touches[0].clientX);
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (dragging && e.touches[0]) setPosition(e.touches[0].clientX);
      }, { passive: true });
      window.addEventListener('touchend', () => { dragging = false; });
    });
  }

  function imageExistsHint(path) {
    return typeof path === 'string' && path.length > 0;
  }

  function setupCaseMedia() {
    document.querySelectorAll('.pm-case-media[data-src]').forEach(container => {
      const src = container.getAttribute('data-src');
      const label = container.getAttribute('data-label') || 'Demo';

      const img = document.createElement('img');
      img.src = src;
      img.alt = label;
      img.className = 'pm-case-media-img';
      img.onerror = () => img.replaceWith(makePlaceholder(label));

      container.innerHTML = '';
      container.appendChild(img);
    });
  }

  function setupCarouselHeight() {
    const carousel = document.getElementById('testCarousel');
    if (!carousel) return;
    const inner = carousel.querySelector('.carousel-inner');
    const items = Array.from(carousel.querySelectorAll('.carousel-item'));

    function updateHeight() {
      inner.style.minHeight = '';
      let max = 0;
      items.forEach(item => {
        const clone = item.cloneNode(true);
        clone.classList.add('active');
        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.display = 'flex';
        clone.style.width = inner.clientWidth + 'px';
        inner.appendChild(clone);
        max = Math.max(max, clone.offsetHeight);
        inner.removeChild(clone);
      });
      inner.style.minHeight = max + 'px';
    }

    updateHeight();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeight, 150);
    });

    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.addEventListener('click', () => setTimeout(updateHeight, 50));
  }

  function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function setupScrollReveal() {
    const slideTargets = Array.from(document.querySelectorAll(
      '.pm-section .pm-eyebrow, .pm-section .pm-h2, .pm-section .pm-sub, .pm-journey-step, .pm-timeline-item, .pm-case, .pm-stat'
    ));
    const fadeTargets = Array.from(document.querySelectorAll('.pm-card, .pm-course, .pm-case-card'));

    if (!slideTargets.length && !fadeTargets.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    slideTargets.forEach((el, i) => {
      el.classList.add('pm-reveal');
      el.style.transitionDelay = (i % 4) * 0.07 + 's';
    });
    fadeTargets.forEach((el, i) => {
      el.classList.add('pm-reveal-fade');
      el.style.transitionDelay = (i % 3) * 0.08 + 's';
    });

    const allTargets = slideTargets.concat(fadeTargets);

    function reveal(el) {
      el.classList.add('is-visible');
    }

    if (reduceMotion || !('IntersectionObserver' in window)) {
      allTargets.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    allTargets.forEach(el => observer.observe(el));
  }

  function formatCount(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function setupStatCounters() {
    const stats = document.querySelectorAll('.pm-stat-num[data-count-to]');
    if (!stats.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateCount(el) {
      const target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
      const suffix = el.getAttribute('data-suffix') || '';

      if (reduceMotion) {
        el.textContent = formatCount(target) + suffix;
        return;
      }

      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatCount(Math.round(target * eased)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (!('IntersectionObserver' in window)) {
      stats.forEach(animateCount);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    stats.forEach(el => observer.observe(el));
  }

  function setupContactForm() {
    const form = document.querySelector('.pm-form');
    if (!form) return;

    const status = document.createElement('p');
    status.className = 'pm-form-status mt-3 mb-0';
    status.setAttribute('role', 'status');
    form.appendChild(status);

    const messages = {
      en: {
        success: "Thanks! Your message was sent — I'll get back to you soon.",
        error: 'Something went wrong. Please try again or email me directly at paulamariapirles@gmail.com.'
      },
      es: {
        success: 'Gracias, tu mensaje fue enviado — te voy a responder pronto.',
        error: 'Algo salió mal. Probá de nuevo o escribime directo a paulamariapirles@gmail.com.'
      }
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
      const submitBtn = form.querySelector('button[type="submit"]');

      status.textContent = '';
      status.classList.remove('is-error', 'is-success');
      submitBtn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          form.reset();
          status.textContent = messages[lang].success;
          status.classList.add('is-success');
        } else {
          status.textContent = messages[lang].error;
          status.classList.add('is-error');
        }
      } catch (err) {
        status.textContent = messages[lang].error;
        status.classList.add('is-error');
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  function makePlaceholder(label) {
    const div = document.createElement('div');
    div.className = 'pm-ba-empty';
    div.innerHTML =
      '<div><i class="fa-regular fa-image fa-2x mb-2"></i>' +
      '<div>Missing: ' + label + '</div></div>';
    return div;
  }

  document.addEventListener('DOMContentLoaded', () => {
    setYear();
    setupNavAutoClose();
    setupBeforeAfter();
    setupCaseMedia();
    setupCarouselHeight();
    setupBackToTop();
    setupScrollReveal();
    setupStatCounters();
    setupContactForm();
  });
})();
