const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

try {
    // Code that may throw an error
  } catch (error) {
    // Handle the error
    console.error('An error occurred:', error);
    // Display fallback content or show an error message
  }
  