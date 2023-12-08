document.addEventListener("DOMContentLoaded", () => {
  // your code here
  <script src=".scr/index.js"></script>
  const checkbox = document.querySelector("#id-checkbox");
  checkbox.addEventListener("click", checkboxClick, false);
  function checkboxClick(event) {
    let warn ="preventDefault() won't let you check this!<br>";
    document.getElementById("output-box").innerHTML += warn;
    event.preventDefault();
  }
});
