// Scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section');

  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(reveal, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });

  // Theme toggle
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for contacting me! I’ll respond shortly.');
    this.reset();
  });
});
