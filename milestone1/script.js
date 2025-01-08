var toggleButton = document.getElementById("toggle-interests");
var interests = document.getElementById("interests");
toggleButton.addEventListener("click", function () {
    interests.classList.toggle("hidden");
});
