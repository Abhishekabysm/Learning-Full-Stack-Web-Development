function toggleAnswer(element) {
  let answer = element.nextElementSibling;
  let icon = element.querySelector(".toggle-icon");
  let faqAnswer = document.querySelector(".faq-answer");

  if (faqAnswer.classList.contains("open")) {
    faqAnswer.classList.remove("open");
  }
  answer.classList.toggle("open");
  if (answer.classList.contains("open")) {
    icon.textContent = "×";
  } else {
    icon.textContent = "+";
  }
}
