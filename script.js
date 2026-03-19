/* =============================================
   RETRO GAMING ARCHIVE — script.js
   All JavaScript for the site
   ============================================= */


/* =============================================
   MOBILE MENU TOGGLE
   Opens and closes the hamburger navigation menu
   on mobile viewports.
   ============================================= */
(function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  // Nothing to do if elements aren't on this page
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when any mobile nav link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', function (e) {
    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}());


/* =============================================
   SCROLL ANIMATIONS
   Uses IntersectionObserver to add the
   'animate-visible' class to elements as they
   enter the viewport, triggering CSS transitions.
   ============================================= */
(function initScrollAnimations() {
  // Exit gracefully in browsers that don't support IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    // Make all targets visible immediately as a fallback
    document.querySelectorAll('.animate-target').forEach(function (el) {
      el.classList.add('animate-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          // Stop observing once the element has animated in
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,  // Trigger when 12% of the element is visible
      rootMargin: '0px 0px -40px 0px'  // Slight offset from the bottom edge
    }
  );

  // Observe every element with the animate-target class
  document.querySelectorAll('.animate-target').forEach(function (el) {
    observer.observe(el);
  });
}());


/* =============================================
   CONTACT FORM VALIDATION & SUBMISSION
   Validates required fields and email format,
   shows inline error messages, and replaces the
   form with a thank-you message on success.
   No page reload occurs.
   ============================================= */
(function initContactForm() {
  var form     = document.getElementById('application-form');
  var thankYou = document.getElementById('thank-you');

  // Only run on the contact page
  if (!form || !thankYou) return;

  /* Helper: validate an email address string */
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  /* Helper: show an error message for a field */
  function showError(inputEl, errorId) {
    inputEl.classList.add('error');
    var errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.classList.add('visible');
  }

  /* Helper: clear the error state for a field */
  function clearError(inputEl, errorId) {
    inputEl.classList.remove('error');
    var errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.classList.remove('visible');
  }

  /* Clear errors as the user types / changes a field */
  function attachClearOnInput(inputEl, errorId) {
    var eventName = inputEl.tagName === 'SELECT' ? 'change' : 'input';
    inputEl.addEventListener(eventName, function () {
      if (inputEl.value.trim() !== '') {
        clearError(inputEl, errorId);
      }
    });
  }

  /* Set up live-clearing for each required field */
  var fields = [
    { id: 'full-name',        errorId: 'full-name-error' },
    { id: 'email',            errorId: 'email-error' },
    { id: 'location',         errorId: 'location-error' },
    { id: 'collecting-time',  errorId: 'collecting-time-error' },
    { id: 'collection-desc',  errorId: 'collection-desc-error' }
  ];

  fields.forEach(function (field) {
    var inputEl = document.getElementById(field.id);
    if (inputEl) attachClearOnInput(inputEl, field.errorId);
  });

  /* Form submit handler */
  form.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent any page reload

    var isValid = true;

    /* --- Validate Full Name --- */
    var nameEl = document.getElementById('full-name');
    if (!nameEl.value.trim()) {
      showError(nameEl, 'full-name-error');
      isValid = false;
    } else {
      clearError(nameEl, 'full-name-error');
    }

    /* --- Validate Email --- */
    var emailEl = document.getElementById('email');
    if (!isValidEmail(emailEl.value)) {
      showError(emailEl, 'email-error');
      isValid = false;
    } else {
      clearError(emailEl, 'email-error');
    }

    /* --- Validate Location --- */
    var locationEl = document.getElementById('location');
    if (!locationEl.value.trim()) {
      showError(locationEl, 'location-error');
      isValid = false;
    } else {
      clearError(locationEl, 'location-error');
    }

    /* --- Validate Collecting Time --- */
    var collectingEl = document.getElementById('collecting-time');
    if (!collectingEl.value.trim()) {
      showError(collectingEl, 'collecting-time-error');
      isValid = false;
    } else {
      clearError(collectingEl, 'collecting-time-error');
    }

    /* --- Validate Collection Description --- */
    var descEl = document.getElementById('collection-desc');
    if (!descEl.value.trim()) {
      showError(descEl, 'collection-desc-error');
      isValid = false;
    } else {
      clearError(descEl, 'collection-desc-error');
    }

    /* --- If validation failed, focus the first error field --- */
    if (!isValid) {
      var firstError = form.querySelector('.form-input.error, .form-textarea.error');
      if (firstError) firstError.focus();
      return;
    }

    /* --- Validation passed: hide form, show thank-you message --- */
    form.style.display     = 'none';
    thankYou.classList.add('visible');

    // Scroll the thank-you message into view smoothly
    thankYou.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}());
