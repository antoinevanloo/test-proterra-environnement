/**
 * Main JavaScript
 * Proterra Environnement
 *
 * Gestion des interactions et fonctionnalités du site
 */

// ========================================
// CONFIGURATION & UTILS
// ========================================

const CONFIG = {
  scrollThreshold: 100,
  animationOffset: 100,
  backToTopThreshold: 300,
  headerScrollClass: 'scrolled',
};

// Utility: Throttle function
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility: Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// MOBILE NAVIGATION
// ========================================

class MobileNav {
  constructor() {
    this.nav = document.querySelector('.nav');
    this.navToggle = document.querySelector('.nav-toggle');
    this.navOverlay = document.querySelector('.nav-overlay');
    this.navLinks = document.querySelectorAll('.nav-link');

    if (!this.nav || !this.navToggle) return;

    this.init();
  }

  init() {
    this.navToggle.addEventListener('click', () => this.toggle());

    if (this.navOverlay) {
      this.navOverlay.addEventListener('click', () => this.close());
    }

    // Close menu when clicking on nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          this.close();
        }
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  toggle() {
    this.isOpen() ? this.close() : this.open();
  }

  open() {
    this.nav.classList.add('active');
    this.navToggle.classList.add('active');
    if (this.navOverlay) {
      this.navOverlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.nav.classList.remove('active');
    this.navToggle.classList.remove('active');
    if (this.navOverlay) {
      this.navOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.nav.classList.contains('active');
  }
}

// ========================================
// DROPDOWN MENU
// ========================================

class DropdownMenu {
  constructor() {
    this.dropdowns = document.querySelectorAll('.nav-dropdown');
    if (this.dropdowns.length === 0) return;
    this.init();
  }

  init() {
    this.dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');

      if (!toggle) return;

      // Desktop: hover
      if (window.innerWidth > 1024) {
        dropdown.addEventListener('mouseenter', () => {
          dropdown.classList.add('open');
        });

        dropdown.addEventListener('mouseleave', () => {
          dropdown.classList.remove('open');
        });
      }

      // Mobile: click
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          dropdown.classList.toggle('open');
        }
      });
    });
  }
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

class HeaderScroll {
  constructor() {
    this.header = document.querySelector('.header');
    if (!this.header) return;

    this.lastScroll = 0;
    this.init();
  }

  init() {
    window.addEventListener('scroll', throttle(() => {
      const currentScroll = window.pageYOffset;

      // Add/remove scrolled class
      if (currentScroll > CONFIG.scrollThreshold) {
        this.header.classList.add(CONFIG.headerScrollClass);
      } else {
        this.header.classList.remove(CONFIG.headerScrollClass);
      }

      // Update active nav link based on current section
      this.updateActiveNavLink();

      this.lastScroll = currentScroll;
    }, 100));
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('[data-animate], .reveal');
    if (this.elements.length === 0) return;

    this.init();
  }

  init() {
    // Initial check
    this.checkElements();

    // Check on scroll
    window.addEventListener('scroll', throttle(() => {
      this.checkElements();
    }, 100));
  }

  checkElements() {
    this.elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Element is in viewport
      if (elementTop < windowHeight - CONFIG.animationOffset && elementBottom > 0) {
        if (element.hasAttribute('data-animate')) {
          element.classList.add('animated');
        }
        if (element.classList.contains('reveal')) {
          element.classList.add('active');
        }
      }
    });
  }
}

// ========================================
// BACK TO TOP BUTTON
// ========================================

class BackToTop {
  constructor() {
    this.button = document.querySelector('.back-to-top');
    if (!this.button) {
      this.createButton();
    } else {
      this.init();
    }
  }

  createButton() {
    this.button = document.createElement('button');
    this.button.className = 'back-to-top';
    this.button.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    `;
    this.button.setAttribute('aria-label', 'Retour en haut de page');
    document.body.appendChild(this.button);
    this.init();
  }

  init() {
    // Show/hide on scroll
    window.addEventListener('scroll', throttle(() => {
      if (window.pageYOffset > CONFIG.backToTopThreshold) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    }, 100));

    // Scroll to top on click
    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Ignore empty anchors
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// ========================================
// FORM VALIDATION
// ========================================

class FormValidator {
  constructor(form) {
    this.form = form;
    if (!this.form) return;
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.validate()) {
        this.submit();
      }
    });

    // Real-time validation
    const inputs = this.form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        // Remove error on input
        const errorElement = input.parentElement.querySelector('.form-error');
        if (errorElement) {
          errorElement.remove();
        }
        input.classList.remove('error');
      });
    });
  }

  validate() {
    let isValid = true;
    const inputs = this.form.querySelectorAll('[required]');

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(input) {
    const value = input.value.trim();
    const type = input.type;
    let isValid = true;
    let errorMessage = '';

    // Remove existing errors
    const existingError = input.parentElement.querySelector('.form-error');
    if (existingError) {
      existingError.remove();
    }
    input.classList.remove('error');

    // Required check
    if (input.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'Ce champ est requis';
    }

    // Email validation
    else if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Email invalide';
      }
    }

    // Phone validation
    else if (type === 'tel' && value) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = 'Numéro de téléphone invalide';
      }
    }

    // Checkbox validation
    else if (type === 'checkbox' && input.hasAttribute('required') && !input.checked) {
      isValid = false;
      errorMessage = 'Vous devez accepter pour continuer';
    }

    if (!isValid) {
      this.showError(input, errorMessage);
    }

    return isValid;
  }

  showError(input, message) {
    input.classList.add('error');
    const errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    errorElement.textContent = message;
    input.parentElement.appendChild(errorElement);
  }

  async submit() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    // Show loading state
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner spinner-sm"></span> Envoi en cours...';

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form data:', data);

      // Show success message
      this.showSuccess('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
      this.form.reset();

    } catch (error) {
      this.showError(this.form, 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }

  showSuccess(message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success animate-fade-in-down';
    alert.textContent = message;
    this.form.insertBefore(alert, this.form.firstChild);

    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
}

// ========================================
// COOKIE CONSENT
// ========================================

class CookieConsent {
  constructor() {
    this.banner = document.querySelector('.cookie-consent');
    this.cookieName = 'proterra_cookie_consent';

    if (!this.banner) {
      this.createBanner();
    } else {
      this.init();
    }
  }

  createBanner() {
    // Create banner if not exists
    const banner = document.createElement('div');
    banner.className = 'cookie-consent';
    banner.innerHTML = `
      <div class="container">
        <div class="cookie-consent-content">
          <div class="cookie-consent-text">
            <p><strong>Ce site utilise des cookies</strong></p>
            <p>Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser le trafic de notre site.</p>
          </div>
          <div class="cookie-consent-actions">
            <button class="btn btn-ghost" data-action="decline">Refuser</button>
            <button class="btn btn-primary" data-action="accept">Accepter</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
    this.banner = banner;
    this.init();
  }

  init() {
    // Check if user already consented
    if (this.hasConsented()) {
      return;
    }

    // Show banner after delay
    setTimeout(() => {
      this.banner.classList.add('visible');
    }, 1000);

    // Handle actions
    this.banner.querySelectorAll('[data-action]').forEach(button => {
      button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        this.handleAction(action);
      });
    });
  }

  handleAction(action) {
    if (action === 'accept') {
      this.setConsent(true);
      // Initialize analytics here if needed
      console.log('Cookies accepted');
    } else {
      this.setConsent(false);
      console.log('Cookies declined');
    }

    this.banner.classList.remove('visible');

    setTimeout(() => {
      this.banner.remove();
    }, 300);
  }

  setConsent(accepted) {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `${this.cookieName}=${accepted}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
  }

  hasConsented() {
    return document.cookie.split('; ').find(row => row.startsWith(`${this.cookieName}=`));
  }
}

// ========================================
// LAZY LOADING IMAGES
// ========================================

function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }

          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }

          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
    });
  }
}

// ========================================
// DARK MODE TOGGLE
// ========================================

class DarkMode {
  constructor() {
    this.storageKey = 'proterra_theme';
    this.init();
  }

  init() {
    // Check saved preference or system preference
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.enable();
    }

    // Create toggle button
    this.createToggle();
  }

  createToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Changer le thème');
    toggle.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24">
        <path class="sun" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        <path class="moon" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    `;

    // Add to header
    const nav = document.querySelector('.nav-list');
    if (nav) {
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.appendChild(toggle);
      nav.appendChild(li);
    }

    toggle.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      this.disable();
    } else {
      this.enable();
    }
  }

  enable() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem(this.storageKey, 'dark');
  }

  disable() {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem(this.storageKey, 'light');
  }
}

// ========================================
// INITIALIZATION
// ========================================

function init() {
  // Initialize components
  new MobileNav();
  new DropdownMenu();
  new HeaderScroll();
  new ScrollReveal();
  new BackToTop();
  new CookieConsent();
  new DarkMode();

  // Initialize functions
  initSmoothScroll();
  initLazyLoading();

  // Initialize all forms
  document.querySelectorAll('form').forEach(form => {
    new FormValidator(form);
  });

  // Log initialization
  console.log('✅ Proterra Environnement - Site initialized');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MobileNav,
    DropdownMenu,
    HeaderScroll,
    ScrollReveal,
    BackToTop,
    FormValidator,
    CookieConsent,
    DarkMode,
  };
}
