document.addEventListener('DOMContentLoaded', function() {
  // Dropdown toggling (existing code)
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    const dropdown = toggle.closest('.dropdown');
    dropdown.addEventListener('show.bs.dropdown', function () {
      toggle.classList.add('show');
    });
    dropdown.addEventListener('hide.bs.dropdown', function () {
      toggle.classList.remove('show');
    });
  });

  // Section switching logic for Work Term Reports
  const s25Link = document.getElementById('s25-link');
  const f25Link = document.getElementById('f25-link');
  const s25Content = document.getElementById('s25-content');
  const f25Content = document.getElementById('f25-content');

  // Main navbar links
  const sectionNames = ['intro', 'employer', 'goals', 'myexperience', 'conclusion', 'ack'];
  const navLinks = sectionNames.map(name => document.getElementById(`${name}-link`));

  function updateLinks(term) {
    navLinks.forEach((link, idx) => {
      if (term === 's25') {
        link.setAttribute('href', `#${sectionNames[idx]}`);
      } else {
        link.setAttribute('href', `#${sectionNames[idx]}-f25`);
      }
    });
  }

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

  // On page load, display the correct section and set navbar links
  if (window.location.hash === '#f25') {
    s25Content.style.display = 'none';
    f25Content.style.display = '';
    updateLinks('f25');
  } else {
    // Default to S25
    s25Content.style.display = '';
    f25Content.style.display = 'none';
    updateLinks('s25');
  }
});