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
let b2_price = 10; 
let b3_price = 100;
let b4_price = 1000;

const count = document.createElement("h2");
count.innerHTML = "Cookie count: ";
app.append(count);

const button2 = document.createElement("button");
button2.innerHTML = "Buy 0.1";
app.append(button2);

const cost = document.createElement("h2");
cost.innerHTML = "Cost: 10 units";
app.append(cost);

const button3 = document.createElement("button");
button3.innerHTML = "Buy 2.0";
app.append(button3);

const cost2 = document.createElement("h2");
cost2.innerHTML = "Cost: 100 units";
app.append(cost2);

const button4 = document.createElement("button");
button4.innerHTML = "Buy 50";
app.append(button4);

const cost3 = document.createElement("h2");
cost3.innerHTML = "Cost: 1000 units";
app.append(cost3);

let b2 = 0;
const button2_count = document.createElement("h2");
button2_count.innerHTML = "0.1 count: ";
app.append(button2_count);

let b3 = 0;
const button3_count = document.createElement("h2");
button3_count.innerHTML = "2.0 count: ";
app.append(button3_count);

let b4 = 0;
const button4_count = document.createElement("h2");
button4_count.innerHTML = "50 count: ";
app.append(button4_count);

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
  if (x >= 10) {
    x -= 10;
    growth_rate += 0.1;
    b2 += 1;
    b2_price *= 1.15;
    button2_count.innerHTML = "0.1 count: " + b2;
    cost.innerHTML = "Cost: "+ b2_price +" units";
  }
});

button3.addEventListener("click", function () {
  if (x >= 100) {
    x -= 100;
    growth_rate += 2.0;
    b3 += 1;
    b3_price *= 1.15;
    button3_count.innerHTML = "2.0 count: " + b3;
    cost2.innerHTML = "Cost: "+ b3_price +" units";
}
});

button4.addEventListener("click", function () {
  if (x >= 1000) {
    x -= 1000;
    growth_rate += 50;
    b4 += 1;
    b4_price *= 1.15;
    button4_count.innerHTML = "50 count: " + b4;
    cost3.innerHTML = "Cost: "+ b4_price +" units";
  }
});
