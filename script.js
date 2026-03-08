function sendMessage() {

   let input = document.getElementById("messageInput")

   let message = input.value

   let box = document.getElementById("messages")

   box.innerHTML += "<p>" + message + "</p>"

   input.value = ""

}

function joinGame(button) {

   button.innerText = "Sudah Join"

   button.style.background = "green"

   button.disabled = true

}

function sendMessage() {

   let input = document.getElementById("messageInput")

   let message = input.value

   let messages = document.getElementById("messages")

   messages.innerHTML += "<p>" + message + "</p>"

   input.value = ""

}