let usdTitle = document.querySelector("#usd-title");
let uzsTitle = document.querySelector("#uzs-title");
let usdInput = document.querySelector("#usd-input");
let uzsInput = document.querySelector("#uzs-input");
let repeatBtn = document.querySelector("#repeat_exchange_btn");
let exchangeBtn = document.querySelector("#exchange-btn");
let mainAsnver_Box = document.querySelector("#mainAnsverBox");
let warningTxt = document.querySelector("#warning-txt");
let bbodny = document.querySelector("body");
let rexchange = true;


bbodny.addEventListener('keyup', function(event) {
  if (event.keyCode === 9) {
event.preventDefault();
document.getElementById("repeat_exchange_btn").click();
}
});

usdInput.placeholder.style = "quanity";
usdInput.style.border = "1px solid #fff";
usdInput.style.boxShadow = "2px 2px 5px #b2b2b2";

// START FUNCTION FOR EXCHANGE KEYUP
usdInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("exchange-btn").click();
} if (event.keyCode === 9) {
  event.preventDefault();
  document.getElementById("repeat_exchange_btn").click();
}
});
// END FUNCTION FOR EXCHANGE KEYUP

// START FUNCTION FOR REPEAT EXCHANGE CLICK
repeatBtn.onclick = function() {
  if (rexchange == true) {
    rexchange = false;
  } else {
    rexchange = true;
  }
  if (rexchange == true) {
    uzsTitle.innerHTML = "UZS";
    usdTitle.innerHTML = "USD";
    uzsTitle.classList.add("convert-box-inner-right-main-title");
    usdTitle.classList.add("convert-box-inner-left-main-title");
    uzsTitle.classList.remove("convert-box-inner-left-main-title");
    usdTitle.classList.remove("convert-box-inner-right-main-title");
    usdInput.value = "";
    uzsInput.value = "";
  } else {
    uzsTitle.innerHTML = "USD";
    usdTitle.innerHTML = "UZS";
    uzsTitle.classList.remove("convert-box-inner-right-main-title");
    usdTitle.classList.remove("convert-box-inner-left-main-title");
    uzsTitle.classList.add("convert-box-inner-left-main-title");
    usdTitle.classList.add("convert-box-inner-right-main-title");
    usdInput.value = "";
    uzsInput.value = "";
  }
}
// EDN FUNCTION FOR REPEAT EXCHANGE CLICK

// START FUNCTION FOR EXCHANGE CLICK
exchangeBtn.addEventListener("click", function(exchange) {
  exchange.preventDefault();
  if (rexchange == true) {
  let usdValue = Number(usdInput.value);

  let usdNumber = Number(usdInput.value);
  console.log(usdNumber);

  if (usdValue == "" || usdInput.value.length > 10) {
    usdInput.style.border = "1px solid #ff9966";
    usdInput.style.boxShadow = "2px 2px 5px #ff9966";
    usdInput.placeholder = "Enter correct quanity";
    return;
  } else {
    usdInput.style.border = "1px solid #fff";
    usdInput.style.boxShadow = "2px 2px 5px #b2b2b2";
    usdInput.placeholder = "quanity";
  }

  if (isNaN(usdValue)) {
    usdInput.style.border = "1px solid #ff9966";
    usdInput.style.boxShadow = "2px 2px 5px #ff9966";
    usdInput.placeholder = "Enter correct quanity";
    warningTxt.innerHTML = "please just enter a number";
    return;
  } else {
    usdInput.style.border = "1px solid #fff";
    usdInput.style.boxShadow = "2px 2px 5px #b2b2b2";
    usdInput.placeholder = "quanity";
    warningTxt.innerHTML = "";
  }


  usdNumber = usdNumber*11325,00;
  uzsInput.value = usdNumber + " SUM";
  
  let mainAnsverBox = document.createElement("li");
  let mainAnsver = document.createElement("p");
  mainAnsver.textContent = usdValue + " USD = " + usdNumber + " UZS";

  mainAnsverBox.append(mainAnsver);

  mainAsnver_Box.appendChild(mainAnsverBox);

  var element = document.getElementById("mainAnsverBox");
  element.scrollTop = element.scrollHeight;
  } else {
  let usdValue = Number(usdInput.value);
  let usdNumber = Number(usdInput.value);

  if (usdValue == "" || usdInput.value.length > 10) {
    usdInput.style.border = "1px solid red";
    usdInput.style.boxShadow = "2px 2px 5px red";
    usdInput.placeholder = "Enter correct quanity";
    return;
  } else {
    usdInput.style.border = "1px solid #fff";
    usdInput.style.boxShadow = "2px 2px 5px #b2b2b2";
    usdInput.placeholder = "quanity";
  }

  usdNumber = usdNumber* 0.000098;
  uzsInput.value = usdNumber + " USD";
  
  let mainAnsverBox = document.createElement("li");
  let mainAnsver = document.createElement("p");
  mainAnsver.textContent = usdValue + " USZ = " + usdNumber + " USD";

  mainAnsverBox.append(mainAnsver);

  mainAsnver_Box.appendChild(mainAnsverBox);


  var element = document.getElementById("mainAnsverBox");
  element.scrollTop = element.scrollHeight;
}
});
// EDN FUNCTION FOR EXCHANGE CLICK