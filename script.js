// script.js
let slideIndex = 1;
let slideInterval;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function () {
  showSlide(slideIndex);
  startAutoSlide();

  // Toggle return date visibility
  const returnToggle = document.getElementById('returnToggle');
  const returnDateGroup = document.getElementById('returnDateGroup');

  returnToggle.addEventListener('change', function () {
    if (this.checked) {
      returnDateGroup.style.display = 'block';
      // Update grid to 3 columns when return date is shown
      const formRows = document.querySelectorAll('.form-row');
      formRows[0].classList.add('three-cols');
    } else {
      returnDateGroup.style.display = 'none';
      // Revert to 2 columns
      const formRows = document.querySelectorAll('.form-row');
      formRows[0].classList.remove('three-cols');
    }
  });
});

// Slider functions
function currentSlide(n) {
  showSlide((slideIndex = n));
  resetAutoSlide();
}

function nextSlide() {
  showSlide((slideIndex += 1));
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Remove active class from all indicators
  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });

  // Show current slide and activate indicator
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].classList.add('active');
  }
  if (indicators[slideIndex - 1]) {
    indicators[slideIndex - 1].classList.add('active');
  }
}

function startAutoSlide() {
  slideInterval = setInterval(function () {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Pause auto-slide when user hovers over slider
document.querySelector('.ads-slider').addEventListener('mouseenter', function () {
  clearInterval(slideInterval);
});

document.querySelector('.ads-slider').addEventListener('mouseleave', function () {
  startAutoSlide();
});

// Form validation (optional)
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fromInput = document.querySelector('input[placeholder="Dari mana?"]');
  const toInput = document.querySelector('input[placeholder="Ke mana?"]');
  const dateInput = document.querySelector('input[type="date"]');

  if (!fromInput.value || !toInput.value || !dateInput.value) {
    alert('Mohon lengkapi semua field yang diperlukan');
    return;
  }

  // Here you would typically send the data to your backend
  alert('Pencarian penerbangan akan dimulai...');
});

// Add smooth transitions and interactions
document.querySelectorAll('.input-group').forEach((group) => {
  const input = group.querySelector('.form-input');

  input.addEventListener('focus', function () {
    group.style.transform = 'translateY(-2px)';
  });

  input.addEventListener('blur', function () {
    group.style.transform = 'translateY(0)';
  });
});

document.getElementById('searchBtn').addEventListener('click', function () {
  window.location.href = 'penerbangan.html';
});

document.getElementById('searchBtn').addEventListener('click', function () {
  window.location.href = 'payment.html';
});
