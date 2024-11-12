document.addEventListener('DOMContentLoaded', () => {
  // Set the target date (e.g., December 31, 2024, at 00:00:00)
  var targetDate = new Date('2025-01-01T00:00:00').getTime() / 1000;

  // Initialize FlipDown with the target date
  var flipdown = new FlipDown(targetDate)
    .start()
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Display the version of FlipDown (optional)
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
