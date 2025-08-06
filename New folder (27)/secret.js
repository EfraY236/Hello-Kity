const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("Sen", message);
  respond(message.toLowerCase());

  userInput.value = "";
}

function appendMessage(sender, text) {
  const messageEl = document.createElement("div");
  messageEl.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(messageEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respond(input) {
  let response = "Hmm... Tam anlayamadım, tekrar dener misin?";

  if (input.includes("Merhaba")) {
    response = "Merhaba! Bugün nasılsın? 😊";
  } else if (input.includes("Hello kitty")) {
    response = "Ben Hello Kitty! Sana nasıl yardımcı olabilirim?";
  } else if (input.includes("Sıkıldım")) {
    response = "Sıkıldıysan birlikte bir resim galerisini gezebiliriz! ve ya bana yaz";
  } else if (input.includes("Nasılsın")) {
    response = "Ben hep neşeliyim! Senin günün nasıl geçiyor?";
  } else if (input.includes("Ne yapıyorsun")) {
    response = "Seninle sohbet ediyorum! Çok eğlenceli 🎀";
  }
  appendMessage("Hello Kitty", response);
}
