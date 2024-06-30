document.addEventListener('DOMContentLoaded', () => {
  const introMusic = document.getElementById('introMusic');
  const wrapper = document.querySelector('.wrapper');

  setTimeout(() => {
      wrapper.classList.add('fade-out-zoom');
      setTimeout(() => {
          introMusic.pause();
          window.location.href = 'main.html';
      }, 1000); // Transition duration
  }, 3000); // Display duration of the intro page
});
