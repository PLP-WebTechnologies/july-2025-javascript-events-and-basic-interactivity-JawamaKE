// Click Event: Show message when clicked
document.getElementById("clickMeBtn").addEventListener("click", () => {
  document.getElementById("clickMessage").classList.remove("hidden");
});

//focus event
inputField.addEventListener("focus", function() {
    inputField.style.backgroundColor = "pink";
});

//blur event
inputField.addEventListener("blur", function() {
    inputField.style.backgroundColor = "yellow";
});

//input event
inputField.addEventListener("input", function() {
    console.log("Current input value: " + inputField.value);
});

//keydown event
inputField.addEventListener("keydown", function(event) {
    console.log("Key down: " + event.key);
});
// Mouseover Event: Reveal hidden text
const hoverBox = document.getElementById("hoverBox");
const hoverInfo = document.getElementById("hoverInfo");

hoverBox.addEventListener("mouseover", () => {
  hoverInfo.classList.remove("hidden");
});

hoverBox.addEventListener("mouseout", () => {
  hoverInfo.classList.add("hidden");
});

// Click Counter Feature
let count = 0;
document.getElementById("countBtn").addEventListener("click", () => {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// Toggle Dark/Light Theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ: Toggle answers on question click
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});


const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const selectedOption = document.getElementById('selectedOption');

// Toggle dropdown visibility on button click
dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Handle selecting an option
dropdownMenu.addEventListener('click', (e) => {
  if (e.target && e.target.matches('li.dropdown-item')) {
    selectedOption.textContent = `You selected: ${e.target.textContent}`;
    dropdownMenu.classList.add('hidden'); // Close menu
  }
});

// Optional: close dropdown if clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
  }
});



// Form Validation
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  let errors = [];

  if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Invalid email format.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (errors.length > 0) {
    message.style.color = "red";
    message.textContent = errors.join(" ");
  } else {
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
    
  }
});
