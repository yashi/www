document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quick-jump-button').forEach(button => {
    button.addEventListener('click', () => {
      const y = parseInt(button.dataset.scrollY, 10);
      if (!isNaN(y)) {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
});
