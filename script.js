console.log("Welcome to my profile page!");
alert(
  "Hello! Welcome to my profile page. I hope you enjoy exploring my work and learning more about me.",
);

let favoriteColor = prompt("What is your favorite color?");
if (favoriteColor) {
  document.body.style.backgroundColor = favoriteColor;
} else {
  alert("No color selected. The background color will remain the default.");
}
