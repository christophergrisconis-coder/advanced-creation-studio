/* Advanced Creation Studio — shared site behavior */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveLink();
  initScrollReveal();
  initFooterYear();
  initContactForm();
});

function initMobileNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  if (!header || !toggle) return;

  toggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => header.classList.remove('nav-open'));
  });
}

function initActiveLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.classList.remove('is-active');
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('is-active');
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

function initFooterYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const defaultButtonText = button ? button.textContent.trim() : 'Submit';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#c0392b';
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      if (status) {
        status.textContent = 'Please complete all required fields before submitting.';
        status.className = 'form-status error';
      }
      return;
    }

    if (button) {
      button.disabled = true;
      button.textContent = 'Sending…';
    }
    if (status) {
      status.textContent = '';
      status.className = 'form-status';
    }

    const data = new FormData(form);
    const fullName = `${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim();
    const interest = data.get('interest') || '';
    const agency = data.get('agency') || '';
    const messageBody = [
      data.get('message'),
      agency ? `\n\nAgency / Organization: ${agency}` : '',
      interest ? `\nInterest: ${interest}` : '',
    ].join('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '72239a69-b442-4dbf-a123-ce28ba9b5d95',
          subject: 'New partnership inquiry — Advanced Creation Studio',
          from_name: fullName || 'Website visitor',
          email: data.get('email'),
          message: messageBody,
        }),
      });
      const result = await response.json();
      if (result.success) {
        if (status) {
          status.textContent = 'Message received. We will follow up shortly.';
          status.className = 'form-status success';
        }
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      if (status) {
        status.textContent = 'Something went wrong. Please try again or reach out directly by email.';
        status.className = 'form-status error';
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = defaultButtonText;
      }
    }
  });
}
