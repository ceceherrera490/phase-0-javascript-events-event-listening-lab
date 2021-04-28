// const input = document.querySelector("#input");
// // const div = document.querySelectorAll("div")[5];

// function addingEventListener() {
//   input.addEventListener("click", function () {
//     alert("I was clicked!");
//   });
// }

// input.addEventListener("click", addingEventListener);
// // div.addEventListener("click", addingEventListener);

// const input = document.querySelector("#input");
// input.addEventListener("click", () => {
//   alert("clicked");
// });

const input = document.getElementById("input");
const div = document.querySelectorAll("div")[5];

// input.addEventListener("click", clickAlert);
// div.addEventListener("click", clickAlert);

function addingEventListener() {
  input.addEventListener("click", () => {
    alert("I was clicked!");
  });
}
input.addEventListener("click", addingEventListener);
div.addEventListener("click", addingEventListener);
