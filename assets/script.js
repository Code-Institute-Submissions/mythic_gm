// get how to section modal elements
let HowToModal = document.getElementById('how-to-modal');
let howToBtn = document.getElementById('how-to-btn');
let closeHowTo = document.getElementsByClassName('close')[0];

//open and close how to modal
howToBtn.onclick = function() {
  HowToModal.style.display = "initial";
}

closeHowTo.onclick = function() {
  HowToModal.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == HowToModal) {
    HowToModal.style.display = "none";
  }
}

// Open and close tab divs

// declare variables - tab buttons and content of the tabs
let activeTab;
let tablinks = document.getElementsByClassName('tabcontent');
let oracleButton = document.getElementById('oracle-button')
let oracleContent = document.getElementById('oracle');
let sceneButton = document.getElementById('scene-button')
let sceneContent = document.getElementById('scene');
let listButton = document.getElementById('list-button')
let listsContent = document.getElementById('list')
oracleButton.classList.add("active")

//set initial view - oracle tab open and the other tabs closed
listsContent.style.display = "none";
sceneContent.style.display = "none";

//close tabs
function closeTabs() {
  for(let i = 0; i < tablinks.length; i++){
    tablinks[i].style.display = "none";
  }
}

//open and close tabs
oracleButton.onclick = function() { 
  closeTabs();
  oracleContent.style.display = "flex";
  sceneButton.classList.remove("active");
  listButton.classList.remove("active");
  oracleButton.classList.add("active");
  displayBox.innerHTML = ""
}

sceneButton.onclick = function() { 
  closeTabs();
  sceneContent.style.display = "flex";
  listButton.classList.remove("active");
  oracleButton.classList.remove("active");
  sceneButton.classList.add("active");
  displayBox.innerHTML = ""
}

listButton.onclick = function() { 
  closeTabs();
  listsContent.style.display = "flex";
  oracleButton.classList.remove("active");
  sceneButton.classList.remove("active");
  listButton.classList.add("active");
  displayBox.innerHTML = ""
}

// question fate button
// variables
let displayBox = document.getElementById('text-display')
let questionButton = document.getElementById('question-btn');
let oddsBox = document.getElementById('odds-modal')
let oddsButton = document.getElementById('set-odds-button')

// display the odds selector modal
questionButton.onclick = function() {
  oddsBox.style.display = "flex";
}

//text slide for odds div

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("odds-slider");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// to display the output text in emulator window
oddsButton.onclick = function() {
  oddsBox.style.display = "none";
  displayBox.innerHTML = "<h3 class='word'>yes</h3><h3 class='word'>Exceptional</h3>"
} 




//fate chart arrays

const impossible = [-20, 0, 0, 5, 5, 10, 15, 25, 50];
const noWay = [0, 5, 5, 10, 15, 25, 35, 50, 75];
const veryUnlikely = [5, 5, 10, 15, 25, 45, 50, 65, 85];
const unlikely = [5, 10, 15, 20, 35, 50, 55, 75, 90];
const fiftyFifty = [10, 15, 25, 35, 50, 65, 75, 85, 95];
const somewhatLikely = [20, 25, 45, 50, 65, 80, 85, 90, 95];
const likely = [25, 35, 50, 55, 75, 85, 90, 95, 100];
const veryLikely = [45, 50, 65, 75, 85, 90, 95, 95, 105];
const nearSureThing = [50, 55, 75, 80, 90, 95, 95, 100, 115];
const aSureThing = [55, 65, 80, 85, 90, 95, 95, 110, 125];
const hasToBe = [80, 85, 90, 95, 95, 100, 100, 130, 145];

let chaosNumber = parseInt(document.getElementById("chaos-number").textContent) - 1;
console.log(chaosNumber)



