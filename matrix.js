const canvasMatrix = document.getElementById('matrix-canvas');
const ctxMatrix = canvasMatrix.getContext('2d');

// Resize the canvas to fill the screen
function resizeCanvas() {
  canvasMatrix.width = window.innerWidth;
  canvasMatrix.height = window.innerHeight;
}
resizeCanvas();

// Pool of characters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アカサタナハマヤラワンガザダバパキャシャチャニミリギジビピウクスツヌフムユルグズブプキシチヒミリギジビピエケセテネヘメレゲゼデベペオコソトノホモヨロゴゾドボポヴッン';

const fontSize = 16;
const columns = Math.floor(canvasMatrix.width / fontSize); // Calculate number of columns based on font size
const drops = Array(columns).fill(1); // Initialize drops array for each column

let matrixEffectInterval;

function draw() {
  // Create a translucent black background to fade out the previous frames
  ctxMatrix.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctxMatrix.fillRect(0, 0, canvasMatrix.width, canvasMatrix.height);

  ctxMatrix.font = `${fontSize}px monospace`;

  // Draw random characters
  for (let i = 0; i < drops.length; i++) {
    // Choose a random letter from the letters string
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctxMatrix.fillStyle = '#0F0'; // Set color to green for letters

    // Draw the text at the current drop position
    ctxMatrix.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop position to the top if it goes off the screen
    if (drops[i] * fontSize > canvasMatrix.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

function togglePageScrolling(enable) {
  document.body.style.overflow = enable ? 'auto' : 'hidden';
}

function startMatrixEffect() {
  console.log("Matrix effect started");
  matrixEffectInterval = setInterval(draw, 33);
}

function stopMatrixEffect() {
  if (matrixEffectInterval) {
    clearInterval(matrixEffectInterval);
    matrixEffectInterval = null;
  }
  ctxMatrix.clearRect(0, 0, canvasMatrix.width, canvasMatrix.height);
  canvasMatrix.style.display = 'none';
  togglePageScrolling(true);
  console.log("Matrix effect ended");
}

function openMatrixEffect() {
  window.scrollTo(0, 0);
  canvasMatrix.style.display = 'block';
  startMatrixEffect();
  togglePageScrolling(false);
}

// Click event to stop the matrix effect
canvasMatrix.addEventListener('click', () => {
  console.log("canvasMatrix clicked");
  stopMatrixEffect();
});

// Start/stop matrix with Shift + Ctrl + M
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && (event.key === 'm' || event.key === 'M')) {
    event.preventDefault();
    console.log("Shift + Ctrl + M pressed");

    if (canvasMatrix.style.display === 'block') {
      stopMatrixEffect();
    } else {
      openMatrixEffect();
    }
  }
});

// Resize event to adjust the canvas
window.addEventListener('resize', () => {
  console.log("Window resized");
  resizeCanvas();
});
