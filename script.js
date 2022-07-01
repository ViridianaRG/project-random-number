document.querySelector(".btn").addEventListener("click", function () {
  let aleatorio = Math.floor(Math.random() * 16777215).toString(16);
  console.log(aleatorio);
  document.querySelector("body").style.background = "#" + aleatorio; //Assign the color previously created to the background
  let aleat = document.getElementById("numHex");
  aleat.value = "#" + aleatorio; //Assigning the value of the random number into the input type text
});

document.querySelector(".copy").addEventListener("click", function () {
  let content = document.getElementById("numHex");
  content.select();
  document.execCommand("copy");
  alert("The Number has been Copied");
});
