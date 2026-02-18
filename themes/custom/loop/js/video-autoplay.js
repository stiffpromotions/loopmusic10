document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('.video-wrapper video');
  if (video) {
    video.muted = true; // Ensure muted
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log('Autoplay blocked, will play on first interaction');
        // Optional: try again on first click
        document.addEventListener('click', () => video.play());
      });
    }
  }
});