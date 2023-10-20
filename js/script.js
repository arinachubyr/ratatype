let buttonClicked = false;

const formValidation = (e, fields) => {
  e.preventDefault();

  fields.forEach((field) => {
    const inputField = document.getElementById(field);
    const errorField = document.getElementById(`${field}-error`);
    const value = inputField.value;

    if (value === "" || (field === "email" && !isValidEmail(value))) {
      inputField.style.border = "2px solid #ff3b30";
      showError(errorField);
    } else {
      inputField.style.border = "";
      hideError(errorField);
    }
  });
};

const isValidEmail = (email) =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const showError = (errorField) => errorField.classList.remove("hidden");
const hideError = (errorField) => errorField.classList.add("hidden");
