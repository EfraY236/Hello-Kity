const kittyBtn = document.getElementById("kittyBtn");
const messageBox = document.getElementById("messageBox");

const messages = [
  "Bugün çok tatlısın!",
  "Hello Kitty seni seviyor!",
  "Sürpriz! Miaow 🐾",
  "Kedilerle dolu bir dünya!",
  "Kalpler ve pofuduklar 💖"
];

const images = [
  "OIP-removebg-preview (1).png",
  "OIP-removebg-preview (2).png",
  "OIP-removebg-preview (4).png",
  "OIP-removebg-preview (5).png",
  "OIP-removebg-preview (7).png"
];

kittyBtn.addEventListener("click", () => {
  // Rastgele mesaj
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  messageBox.innerText = randomMsg;

  // Rastgele görsel değişimi
  const randomImg = images[Math.floor(Math.random() * images.length)];
  kittyBtn.src = randomImg;
});

// Sayfa yönlendirmeleri
function goToGallery() {
  window.location.href = "gallery.html";
}

function openSecret() {
  const pass = prompt("Gizli sayfaya girmek için şifre:");
  if (pass === "Kübra") {
    window.location.href = "secret.html";
  } else {
    alert("Yanlış şifre!");
  }
}


