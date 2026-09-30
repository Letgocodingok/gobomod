// Gobo Mod - Scratch-like interface with TurboWarp engine

const runButton = document.querySelector("#run-button");
const stopButton = document.querySelector("#stop-button");
const stage = document.querySelector("#stage");
const ctx = stage.getContext("2d");

let vm = null;
let isRunning = false;

// Initialize TurboWarp VM
function initializeVM() {
  if (typeof VirtualMachine !== 'undefined') {
    vm = new VirtualMachine();
    console.log("Gobo Mod engine loaded with TurboWarp VM");
    drawStage();
  } else {
    console.error("TurboWarp VM not loaded. Check CDN connection.");
  }
}

// Draw stage
function drawStage() {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, stage.width, stage.height);
  ctx.fillStyle = "#333";
  ctx.font = "16px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Gobo Mod Stage", stage.width / 2, stage.height / 2);
}

// Run button event
runButton.addEventListener("click", () => {
  if (vm) {
    isRunning = true;
    runButton.disabled = true;
    stopButton.disabled = false;
    console.log("Gobo Mod is running!");
    ctx.fillStyle = "#e8f5e9";
    ctx.fillRect(0, 0, stage.width, stage.height);
    ctx.fillStyle = "#4caf50";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Running...", stage.width / 2, stage.height / 2);
  }
});

// Stop button event
stopButton.addEventListener("click", () => {
  if (vm) {
    isRunning = false;
    runButton.disabled = false;
    stopButton.disabled = true;
    console.log("Gobo Mod stopped!");
    drawStage();
  }
});

// Initialize on page load
window.addEventListener("load", () => {
  initializeVM();
  stopButton.disabled = true;
});

// Log when page is ready
console.log("Gobo Mod initialized. Ready to load TurboWarp projects!");