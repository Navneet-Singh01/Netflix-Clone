// Selecting all accordion items in the FAQ section
const accordions = document.querySelectorAll(".faq li");

// Adding a click event listener to each accordion item
accordions.forEach((accordion) => {
  // Selecting the answer and icon element within each accordion
  const answer = accordion.querySelector(".answers");
  const icon = accordion.querySelector(".questions-icon");
  // Adding a click event listener to toggle the active class and rotate class for the clicked answer
  accordion.addEventListener("click", () => {
    // Close all other answers and rotated icons when one of the answer is clicked
    accordions.forEach((otherAccordion) => {
      const otherAnswer = otherAccordion.querySelector(".answers");
      const otherIcon = otherAccordion.querySelector(".questions-icon");

      if (otherAnswer !== answer) {
        otherAnswer.classList.remove("active");
        otherIcon.classList.remove("rotate");
      }
    });

    // Toggle the active class and rotate class for the clicked answer 
    answer.classList.toggle("active");
    icon.classList.toggle("rotate");
  });
});
