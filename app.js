let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
  button.addEventListener("click", function (ele) {
    const style = ele.currentTarget.classList;
    if (style.contains("decrease")) {
      count++;
      value.innerHTML = count;
    } else if (style.contains("reset")) {
      count = 0;
      value.innerHTML = count;
    } else if (style.contains("increase")) {
      count--;
      value.innerHTML = count;
    }
  });
});
