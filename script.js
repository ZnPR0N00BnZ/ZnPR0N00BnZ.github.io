document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  // Loop through each section
  sections.forEach((section) => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Apply the random color as the background
    section.style.backgroundColor = randomColor;
  });
});
