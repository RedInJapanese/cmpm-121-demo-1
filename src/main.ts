import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "Bird Tier 1", cost: 10, rate: 0.1 },
  { name: "Bird Tier 2", cost: 100, rate: 2 },
  { name: "Bird Tier 3", cost: 1000, rate: 50 },
];

const gameName = "Bird Game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("Button");
button.innerHTML = "Catch Bird 🅱️";
app.append(button);

let x = 0;
let growth_rate = 0;

const count = document.createElement("h2");
count.innerHTML = "Bird count: ";
app.append(count);

const button2 = document.createElement("button");
button2.innerHTML = availableItems[0].name;
app.append(button2);

const cost = document.createElement("h2");
cost.innerHTML = "Cost: " + availableItems[0].cost + " Bird(s)";
app.append(cost);

const button3 = document.createElement("button");
button3.innerHTML = availableItems[1].name;
app.append(button3);

const cost2 = document.createElement("h2");
cost2.innerHTML = "Cost: " + availableItems[1].cost + " Bird(s)";
app.append(cost2);

const button4 = document.createElement("button");
button4.innerHTML = availableItems[2].name;
app.append(button4);

const cost3 = document.createElement("h2");
cost3.innerHTML = "Cost: " + availableItems[2].cost + " Bird(s)";
app.append(cost3);

let b2 = 0;
const button2_count = document.createElement("h2");
button2_count.innerHTML = availableItems[0].name + " Count: ";
app.append(button2_count);

let b3 = 0;
const button3_count = document.createElement("h2");
button3_count.innerHTML = availableItems[1].name + " Count: ";
app.append(button3_count);

let b4 = 0;
const button4_count = document.createElement("h2");
button4_count.innerHTML = availableItems[2].name + " Count: ";
app.append(button4_count);

const intervalID = setInterval(myCallback, 500);
console.log(intervalID);
function myCallback() {
  x += growth_rate;
  count.innerHTML = "Bird count: " + x;
}

button.addEventListener("click", function () {
  x += 1;
  count.innerHTML = "Bird count: " + x;
});

button2.addEventListener("click", function () {
  if (x >= 10) {
    x -= 10;
    growth_rate += availableItems[0].rate;
    b2 += 1;
    availableItems[0].cost *= 1.15;
    button2_count.innerHTML = availableItems[0].name + " Count: " + b2;
    cost.innerHTML = "Cost: " + availableItems[0].cost + " Birds";
  }
});

button3.addEventListener("click", function () {
  if (x >= 100) {
    x -= 100;
    growth_rate += availableItems[1].rate;
    b3 += 1;
    availableItems[1].cost *= 1.15;
    button3_count.innerHTML = availableItems[1].name + " Count: " + b3;
    cost2.innerHTML = "Cost: " + availableItems[1].cost + " Birds";
  }
});

button4.addEventListener("click", function () {
  if (x >= 1000) {
    x -= 1000;
    growth_rate += availableItems[2].rate;
    b4 += 1;
    availableItems[2].cost *= 1.15;
    button4_count.innerHTML = availableItems[2].name + " Count: " + b4;
    cost3.innerHTML = "Cost: " + availableItems[2].cost + " Birds";
  }
});
