// Existing code here...

document.addEventListener('DOMContentLoaded', function() {
  // Dropdown styling code already present

  // Section switching logic
  const s25Link = document.getElementById('s25-link');
  const f25Link = document.getElementById('f25-link');
  const s25Content = document.getElementById('s25-content');
  const f25Content = document.getElementById('f25-content');

  s25Link.addEventListener('click', function(e) {
  e.preventDefault();
  s25Content.style.display = '';
  f25Content.style.display = 'none';
  updateLinks('s25');
  window.location.hash = '#s25';
});

f25Link.addEventListener('click', function(e) {
  e.preventDefault();
  s25Content.style.display = 'none';
  f25Content.style.display = '';
  updateLinks('f25');
  window.location.hash = '#f25';
});

  // Adjust navbar to scroll to right sections (S25 or F25)
  function resetNavLinks(term) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      if (term === 's25') {
        // remove trailing -f25 in href if present
        link.href = link.href.replace('-f25', '');
      } else {
        if (!link.href.endsWith('-f25')) {
          link.href = link.href.replace(/#([a-z]+)/i, '#$1-f25');
        }
      }
    });
  }
});