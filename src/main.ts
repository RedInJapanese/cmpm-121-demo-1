import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My even more amazing game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerHTML = "test 🅱️";
app.append(button);

let x = 0;
let frame_count = 0;

const count = document.createElement("h2");
count.innerHTML = "Cookie count: ";
app.append(count);

button.addEventListener("click", function () {
  x += 1;
  count.innerHTML = "Cookie count: " + x;
});

function myCallback() {
  frame_count += 1;

  x += 1/frame_count;
  count.innerHTML = "Cookie count: " + x;

  requestAnimationFrame(myCallback);
}
requestAnimationFrame(myCallback);
