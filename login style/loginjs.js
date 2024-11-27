const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

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