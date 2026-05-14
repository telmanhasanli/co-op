document.addEventListener('DOMContentLoaded', function () {
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

  const s25Link = document.getElementById('s25-link');
  const f25Link = document.getElementById('f25-link');
  const w26Link = document.getElementById('w26-link');

  const s25Content = document.getElementById('s25-content');
  const f25Content = document.getElementById('f25-content');
  const w26Content = document.getElementById('w26-content');

  const sectionNames = ['intro', 'employer', 'goals', 'myexperience', 'conclusion', 'ack'];
  const navLinks = sectionNames.map(name => document.getElementById(`${name}-link`));

  function updateLinks(term) {
    navLinks.forEach((link, idx) => {
      if (term === 's25') {
        link.href = `#${sectionNames[idx]}`;
      } else {
        link.href = `#${sectionNames[idx]}-${term}`;
      }
    });
  }

  function showTerm(term) {
    s25Content.style.display = term === 's25' ? 'block' : 'none';
    f25Content.style.display = term === 'f25' ? 'block' : 'none';
    w26Content.style.display = term === 'w26' ? 'block' : 'none';
    updateLinks(term);
  }

  s25Link.addEventListener('click', function (e) {
    e.preventDefault();
    showTerm('s25');
  });

  f25Link.addEventListener('click', function (e) {
    e.preventDefault();
    showTerm('f25');
  });

  w26Link.addEventListener('click', function (e) {
    e.preventDefault();
    showTerm('w26');
  });

  showTerm('s25');
});