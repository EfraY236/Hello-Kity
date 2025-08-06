function cevapVer(secenek) {
  const cevap = document.getElementById("cevap");

  if (secenek === "iyi") {
    cevap.textContent = "Bu güzel, içindeki ışık hiç sönmesin!";
    kalpUcur();
  } else if (secenek === "idare") {
    cevap.textContent = "Bazen öyle günler olur, geçecek...";
  } else {
    cevap.textContent = "Üzülme, yalnız değilsin 🌧️";
  }
}

function kalpUcur() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
  }
}
