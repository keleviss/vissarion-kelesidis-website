// Prevent FOUC (Flash of Unstyled Content) with theme
(function() {
  // Add this script as early as possible, ideally in the <head> of your HTML
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  // Immediately set the theme class and data attribute
  document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('data-loading-theme', 'true');
})();