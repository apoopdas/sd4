if(localStorage.getItem("subscribed") == "![true]!-[382905437985734899]") {
 document.querySelector("button").innerText = "thanks!";
 if(localStorage.getItem("extrareward") != null) {
     document.querySelector(localStorage.getItem("extrareward")).style.display = "block";
 }
} else if(localStorage.getItem("subscribed") == null) {
 document.querySelector("button").innerText = "SUBSCRIBE TO OUR SITE";
} else {
 document.querySelector("button").innerText = "Invalid Subscription.";
}
function subscribe() {
 document.querySelector("button").innerText = "thanks!";
 localStorage.setItem("subscribed","![true]!-[382905437985734899]")
 const code = document.querySelector("#extra").value;
 if(code == "jha0") {
     localStorage.setItem("extrareward",".jha0-0x001");
 }
}