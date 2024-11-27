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
    
// Toggle the search input visibility
function toggleSearch() {
  const container = document.querySelector('.search-container');
  const input = document.getElementById('searchInput');

  container.classList.toggle('active');
  if (container.classList.contains('active')) {
      input.focus();
  } else {
      input.value = '';  // Clear input when hiding
  }
}










let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const submitButton = document.getElementById('submitButton');

function updateButtons() {
  if (currentQuestion === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentQuestion === questions.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    questions[currentQuestion].style.display = 'none';
    currentQuestion++;
    questions[currentQuestion].style.display = 'block';
    updateButtons();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    questions[currentQuestion].style.display = 'none';
    currentQuestion--;
    questions[currentQuestion].style.display = 'block';
    updateButtons();
  }
}

function showSuggestion() {
  // Show the suggestion based on the selected answers
}