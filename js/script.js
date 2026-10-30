/**
 * Kevin Rodríguez Personal Portfolio - Main JavaScript
 * Handles mobile navigation toggle and contact form validation.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     Mobile Navigation Toggle
     ========================================================================== */
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('is-open');
    });

    // Close mobile menu when clicking a nav link
    const navLinks = siteNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================================================
     Contact Form Validation & Feedback
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formStatus = document.getElementById('formStatus');

    // Simple email regex pattern check
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset previous error messages & status
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please write a message before sending.';
        isValid = false;
      }

      // If valid, simulate successful submission
      if (isValid) {
        // Since GitHub Pages is static and cannot process server-side mail by default,
        // we provide a clear success notification to the user.
        formStatus.textContent = 'Thank you! Your message has been prepared. (Note: For direct contact, please reach out via LinkedIn or GitHub)';
        formStatus.classList.add('success');
        
        // Reset form fields
        contactForm.reset();
      } else {
        formStatus.textContent = 'Please fix the errors above before submitting.';
        formStatus.classList.add('error');
      }
    });
  }

});
