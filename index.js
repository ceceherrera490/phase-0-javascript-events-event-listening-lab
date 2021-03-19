const input = document.querySelector("#input");
// const div = document.querySelectorAll("div")[5];

function addingEventListener() {
  input.addEventListener("click", function () {
    alert("I was clicked!");
  });
}

input.addEventListener("click", addingEventListener);
// div.addEventListener("click", addingEventListener);
