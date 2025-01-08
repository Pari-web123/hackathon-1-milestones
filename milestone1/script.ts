const toggleButton = document.getElementById("toggle-interests") as HTMLButtonElement;
const interests = document.getElementById("interests") as HTMLElement;

toggleButton.addEventListener("click", () => {
  console.log("Button clicked");
  interests.classList.toggle("hidden");
  console.log(interests.classList);
});