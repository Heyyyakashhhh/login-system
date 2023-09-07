const passwordField = document.getElementById("passwordField");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", () => {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; // You may need to change the icon
    } else {
        passwordField.type = "password";
        showPassword.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});
