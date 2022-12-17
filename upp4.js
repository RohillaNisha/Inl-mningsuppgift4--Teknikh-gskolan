// let btn = document.getElementById("button");
// let sec = document.getElementById("redCircle");
let btnShow = document.getElementById("show");
let btnHide = document.getElementById("hide");
// const input = document.getElementById("text");

function toOff() {
  if (document.getElementById("button1").textContent == "OFF") {
    document.getElementById("button1").textContent = "ON";
  } else {
    document.getElementById("button1").textContent = "OFF";
  }
}

function deleteDiv() {
  document.getElementById("redCircle").remove();
}

function h1Contents() {
  document.addEventListener("click", (e) => {
    if (e.target.id === "show") {
      document.getElementById("title").style.display = "block";
    } else if (e.target.id === "hide") {
      document.getElementById("title").style.display = "none";
    }
  });
}

function stopFunc() {
  if (
    document.getElementById("text").value.length <= 0 ||
    document.getElementById("text").value == null
  ) {
    alert(" Welcome..");
  }
}

function getRndInteger(min, max) {
  let ranNum = Math.floor(Math.random() * (max - min) + min);
  console.log(ranNum);
  document.getElementById("h1").innerHTML = ranNum;
}
