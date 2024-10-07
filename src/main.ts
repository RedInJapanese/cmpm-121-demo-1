import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

interface Item {
  name: string;
  cost: number;
  rate: number;
  description: string;
}

const availableItems: Item[] = [
  { name: "Bird Tier 1", cost: 10, rate: 0.1, description: "Tier 1 bird you can purchase that increases bird count passively by 0.1, cost increases by 1.15 every purchase." },
  { name: "Bird Tier 2", cost: 100, rate: 2, description: "Tier 2 bird you can purchase that increases bird count passively by 2, cost increases by 1.15 every purchase."  },
  { name: "Bird Tier 3", cost: 1000, rate: 50, description: "Tier 3 bird you can purchase that increases bird count passively by 50, cost increases by 1.15 every purchase."  },
  { name: "Bird Tier 4", cost: 2000, rate: 60, description: "Tier 4 bird you can purchase that increases bird count passively by 50, cost increases by 1.15 every purchase."  },
  { name: "Bird Tier 5", cost: 3000, rate: 70, description: "Tier 5 bird you can purchase that increases bird count passively by 60, cost increases by 1.15 every purchase."  },
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

const description = document.createElement("h2");
description.innerHTML = "";
app.append(description);

const button2 = document.createElement("button");
button2.innerHTML = availableItems[0].name;
app.append(button2);

button2.addEventListener('mouseenter', () => {
    description.innerHTML = availableItems[0].description;
});

const cost = document.createElement("h2");
cost.innerHTML = "Cost: " + availableItems[0].cost + " Bird(s)";
app.append(cost);

const button3 = document.createElement("button");
button3.innerHTML = availableItems[1].name;
app.append(button3);

button3.addEventListener('mouseenter', () => {
    description.innerHTML = availableItems[1].description;
});

const cost2 = document.createElement("h2");
cost2.innerHTML = "Cost: " + availableItems[1].cost + " Bird(s)";
app.append(cost2);

const button4 = document.createElement("button");
button4.innerHTML = availableItems[2].name;
app.append(button4);


button4.addEventListener('mouseenter', () => {
    description.innerHTML = availableItems[2].description;
});

const cost3 = document.createElement("h2");
cost3.innerHTML = "Cost: " + availableItems[2].cost + " Bird(s)";
app.append(cost3);





const button5 = document.createElement("button");
button5.innerHTML = availableItems[3].name;
app.append(button5);


button5.addEventListener('mouseenter', () => {
    description.innerHTML = availableItems[3].description;
});

const cost4 = document.createElement("h2");
cost4.innerHTML = "Cost: " + availableItems[3].cost + " Bird(s)";
app.append(cost4);




const button6 = document.createElement("button");
button6.innerHTML = availableItems[4].name;
app.append(button6);


button6.addEventListener('mouseenter', () => {
    description.innerHTML = availableItems[4].description;
});

const cost5 = document.createElement("h2");
cost5.innerHTML = "Cost: " + availableItems[4].cost + " Bird(s)";
app.append(cost5);



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


let b5 = 0;
const button5_count = document.createElement("h2");
button5_count.innerHTML = availableItems[3].name + " Count: ";
app.append(button5_count);


let b6 = 0;
const button6_count = document.createElement("h2");
button6_count.innerHTML = availableItems[4].name + " Count: ";
app.append(button6_count);

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


button5.addEventListener("click", function () {
    if (x >= 2000) {
      x -= 2000;
      growth_rate += availableItems[3].rate;
      b5 += 1;
      availableItems[3].cost *= 1.15;
      button5_count.innerHTML = availableItems[3].name + " Count: " + b5;
      cost4.innerHTML = "Cost: " + availableItems[3].cost + " Birds";
    }
  });



  button6.addEventListener("click", function () {
    if (x >= 3000) {
      x -= 3000;
      growth_rate += availableItems[4].rate;
      b6 += 1;
      availableItems[4].cost *= 1.15;
      button6_count.innerHTML = availableItems[4].name + " Count: " + b6;
      cost5.innerHTML = "Cost: " + availableItems[4].cost + " Birds";
    }
  });