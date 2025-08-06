const toggleBtn = document.getElementById("toggleBtn");
const message = document.getElementById("message");
const body = document.body;

const mesajlar = [
  "Harika bir insansın.",
  "Her zaman değerliydin.",
  "Karanlık sadece insanın içinde.",
  "Her şeyi yapa bilecek güçte birisin.",
  "Zor bile olsa imkansız değil hiç bir şey.",
  "Dış sesleri sustur, iç sesini duy."
];

let index = 0;
let karanlik = false;

toggleBtn.addEventListener("click", () => {
  karanlik = !karanlik;
  body.classList.toggle("dark", karanlik);

  toggleBtn.textContent = karanlik ? "Işığı Aç" : "Işığı Kapat";

  // Her bastığında rastgele mesaj göster
  index = (index + 1) % mesajlar.length;
  message.textContent = mesajlar[index];
});
