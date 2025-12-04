/**
 * GolfGang UI Utilities
 * Fun animations and micro-interactions
 */

// ============================================
// CONFETTI CELEBRATION
// ============================================
export function triggerConfetti(duration = 3000) {
  const colors = ['#2d6a4f', '#40916c', '#e9c46a', '#f4a261', '#e63946'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animation = `confetti-fall ${Math.random() * 2 + 2}s ease-out forwards`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), duration);
  }
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
let toastTimeout = null;

export function showToast(message, type = 'default', duration = 3000) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) {
    existingToast.remove();
    clearTimeout(toastTimeout);
  }
  
  // Create new toast
  const toast = document.createElement('div');
  toast.className = `toast-notification toast-notification--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  
  // Auto-hide
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
  
  return toast;
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
  
  return observer;
}

// ============================================
// NUMBER COUNTER ANIMATION
// ============================================
export function animateCounter(element, targetValue, duration = 1000) {
  const startValue = parseInt(element.textContent) || 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.round(startValue + (targetValue - startValue) * easeOut);
    
    element.textContent = currentValue;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.classList.add('bump');
      setTimeout(() => element.classList.remove('bump'), 300);
    }
  }
  
  requestAnimationFrame(update);
}

// ============================================
// HAPTIC FEEDBACK (for mobile)
// ============================================
export function hapticFeedback(type = 'light') {
  if ('vibrate' in navigator) {
    const patterns = {
      light: [10],
      medium: [20],
      heavy: [30],
      success: [10, 50, 10],
      error: [50, 30, 50],
    };
    navigator.vibrate(patterns[type] || patterns.light);
  }
}

// ============================================
// SKELETON LOADER UTILITY
// ============================================
export function createSkeleton(width = '100%', height = '20px', rounded = true) {
  const skeleton = document.createElement('div');
  skeleton.className = 'skeleton';
  skeleton.style.width = width;
  skeleton.style.height = height;
  if (rounded) skeleton.style.borderRadius = '8px';
  return skeleton;
}
