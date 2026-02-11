// Floating Love Icons
const loveBg = document.getElementById("love-bg");
const icons = ["❤️", "🌹", "🥰"];

for (let i = 0; i < 25; i++) {
  const span = document.createElement("span");
  span.innerText = icons[Math.floor(Math.random() * icons.length)];
  span.style.position = "absolute";
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = Math.random() * 100 + "vh";
  span.style.fontSize = "16px";
  span.style.opacity = "0.15";
  span.style.animation = `float ${10 + Math.random()*10}s linear infinite`;
  loveBg.appendChild(span);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from { transform: translateY(0px); }
  to { transform: translateY(-100vh); }
}
`;
document.head.appendChild(style);

// Letter Interaction
const letterCard = document.querySelector(".gift-card");
const letterModal = document.getElementById("letterModal");
const typedLetter = document.getElementById("typedLetter");

letterCard.addEventListener("click", () => {
  letterModal.classList.remove("hidden");
  letterModal.classList.add("flex");
  burstHearts();
  typeLetter();
});

function closeLetter() {
  letterModal.classList.add("hidden");
  typedLetter.innerHTML = "";
}

function typeLetter() {
  const text = "Shiku, loving you has been one of the most real journeys of my life. We started unexpectedly, but what we built was intentional. Through fire, distance, growth, and maturity, you stayed and chose love. I admire your strength, your loyalty, and your evolving mind. You are not just my woman — you are my partner in elevation. I see you. I respect you. And I am grateful you are mine.";
  let i = 0;
  const interval = setInterval(() => {
    typedLetter.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 30);
}

// Music
const musicCard = document.querySelector(".music-card");
const musicModal = document.getElementById("musicModal");

musicCard.addEventListener("click", () => {
  musicModal.classList.remove("hidden");
  musicModal.classList.add("flex");
  burstHearts();
});

function closeMusic() {
  musicModal.classList.add("hidden");
}

// Surprise
const surpriseCard = document.querySelector(".surprise-card");
const surpriseText = document.getElementById("surpriseText");

surpriseCard.addEventListener("click", () => {
  surpriseText.classList.remove("opacity-0");
  surpriseText.classList.add("opacity-100");
  burstHearts();
});

// Heart Burst Animation
function burstHearts() {
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");
    heart.innerText = "❤️";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "20px";
    heart.style.transition = "all 1s ease-out";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translate(${(Math.random()-0.5)*300}px, ${(Math.random()-0.5)*300}px)`;
      heart.style.opacity = "0";
    }, 50);

    setTimeout(() => heart.remove(), 1000);
  }
}
