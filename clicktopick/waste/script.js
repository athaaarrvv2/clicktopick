const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
function toggleDropdown(button) {
      const dropdownContent = button.nextElementSibling;
      const isVisible = dropdownContent.style.display === 'block';
  
      // Close other open dropdowns
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
        content.previousElementSibling.classList.remove('active');
      });
  
      // Toggle current dropdown
      dropdownContent.style.display = isVisible ? 'none' : 'block';
      button.classList.toggle('active', !isVisible);
    }
  
    function selectOption(value) {
      alert("Selected option: " + value);
    }
  
    // Close dropdowns if clicked outside
    window.onclick = function(event) {
      if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-btn *')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
          content.style.display = 'none';
          content.previousElementSibling.classList.remove('active');
        });
      }
    };
    // document.addEventListener('DOMContentLoaded', function() {
    //   document.querySelector('.dropdown-btn').addEventListener('click', function() {
    //     const container = document.querySelector('#product1 .pro');
    //     const dropdownContent = document.querySelector('.dropdown-content');
    
    //     container.classList.toggle('active');
    //     dropdownContent.classList.toggle('show');
    //   });
    // });
    // function toggleDropdown() {
    //   const dropdownContent = document.querySelector('.dropdown-content');
    //   dropdownContent.classList.toggle('move-up');
    //   dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    // }
    
