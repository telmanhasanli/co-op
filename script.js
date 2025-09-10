document.addEventListener('DOMContentLoaded', function() {
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
});