let usdTitle = document.querySelector("#usd-title");
let uzsTitle = document.querySelector("#uzs-title");
let usdInput = document.querySelector("#usd-input");
let uzsInput = document.querySelector("#uzs-input");
let repeatBtn = document.querySelector("#repeat_exchange_btn");
let exchangeBtn = document.querySelector("#exchange-btn");
let mainAsnver_Box = document.querySelector("#mainAnsverBox");
let usdTxt = " USD = ";
let uzsTxt = " UZS";





usdInput.placeholder.style = "quanity";
usdInput.style.border = "1px solid #fff";
usdInput.style.boxShadow = "2px 2px 5px #b2b2b2";

exchangeBtn.addEventListener("click", function(exchange) {
  exchange.preventDefault();

  let usdValue = Number(usdInput.value);
  // let uzsValue = Number(uzsInput.value);

  let usdNumber = Number(usdInput.value);
  let uzsNumber = Number(uzsInput.value);

  if (usdValue == "" || usdInput.value.length > 8) {
    usdInput.style.border = "1px solid red";
    usdInput.style.boxShadow = "2px 2px 5px red";
    usdInput.placeholder = "Enter correct quanity";
    return;
  } else {
    usdInput.style.border = "1px solid #fff";
    usdInput.style.boxShadow = "2px 2px 5px #b2b2b2";
    usdInput.placeholder = "quanity";
  }

  usdNumber = usdNumber*11367;
  uzsNumber = uzsNumber*0.0098;
  uzsInput.value = usdNumber + " SUM";
  
  let mainAnsverBox = document.createElement("li");
  let mainAnsver = document.createElement("p");
  mainAnsver.textContent = usdValue + usdTxt + usdNumber + uzsTxt;

  mainAnsverBox.append(mainAnsver);

  mainAsnver_Box.appendChild(mainAnsverBox);


  var element = document.getElementById("mainAnsverBox");
  element.scrollTop = element.scrollHeight;
});