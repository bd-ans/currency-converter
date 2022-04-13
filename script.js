let usdTitle = document.querySelector("#usd-title");
let uzsTitle = document.querySelector("#uzs-title");
let usdInput = document.querySelector("#usd-input");
let uzsInput = document.querySelector("#uzs-input");
let repeatBtn = document.querySelector("#repeat_exchange_btn");
let exchangeBtn = document.querySelector("#exchange-btn");
let mainAsnver_Box = document.querySelector("#mainAnsverBox");

exchangeBtn.addEventListener("click", function(exchange) {
  exchange.preventDefault();

  let usdNumber = Number(usdInput.value);
  let uzsNumber = Number(uzsInput.value)
  
  let mainAnsverBox = document.createElement("li");
  let mainAnsver = document.createElement("p");
  mainAnsver.textContent = `UZS`;

  mainAnsverBox.append(mainAnsver);

  mainAsnver_Box.appendChild(mainAnsverBox);
  var element = document.getElementById("mainAnsverBox");
  element.scrollTop = element.scrollHeight;
});