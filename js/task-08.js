document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const { elements } = event.currentTarget;

    const isEmpty = Array.from(elements).some((element) => {
      return element.type !== "submit" && element.value.trim() === "";
    });

    if (isEmpty) {
      alert("Please fill in all fields.");
    } else {
      const formData = {};

      Array.from(elements).forEach((element) => {
        if (element.type !== "submit") {
          formData[element.name] = element.value;
        }
      });

      console.log(formData);

      event.currentTarget.reset();
    }
  });
});
