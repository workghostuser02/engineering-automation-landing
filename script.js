const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent =
    "Учебная проверка пройдена. Форма пока не подключена и данные не отправлены.";
});

