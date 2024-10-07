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
let lastTime: number = 0;
let frames: number = 0;

const count = document.createElement("h2");
count.innerHTML = "Cookie count: ";
app.append(count);

button.addEventListener("click", function () {
  x += 1;
  count.innerHTML = "Cookie count: " + x;
});

function fps(timestamp: number) {
    if (lastTime) {
      // Calculate the time difference between frames in milliseconds
      const deltaTime = timestamp - lastTime;
  
      // Calculate FPS
      frames = 1000 / deltaTime;
    }
    
    lastTime = timestamp;  // Update the last time with the current timestamp
    
    if(frames > 0){
        x += 1 / frames;
        count.innerHTML = "Cookie count: " + x;
    }
    // Request the next animation frame
    requestAnimationFrame(fps);
  }

  requestAnimationFrame(fps);