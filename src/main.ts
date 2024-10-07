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
let growth_rate = 0;

const count = document.createElement("h2");
count.innerHTML = "Cookie count: ";
app.append(count);

const button2 = document.createElement("button");
button2.innerHTML = "Buy";
app.append(button2);

const cost = document.createElement("h2");
cost.innerHTML = "Cost: 10 units";
app.append(cost);


const intervalID = setInterval(myCallback, 500);
console.log(intervalID);
function myCallback() {
  x += growth_rate;
  count.innerHTML = "Cookie count: " + x;
}

button.addEventListener("click", function () {
  x += 1;
  count.innerHTML = "Cookie count: " + x;
});

button2.addEventListener("click", function () {
    if (x >=10){
        x -= 10;
        growth_rate += 1;
    }
});


