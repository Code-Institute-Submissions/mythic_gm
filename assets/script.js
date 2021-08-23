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

//open tabs
oracleButton.onclick = function() { 
  closeTabs();
  oracleContent.style.display = "flex";
  sceneButton.classList.remove("active");
  listButton.classList.remove("active");
  oracleButton.classList.add("active");
}

sceneButton.onclick = function() { 
  closeTabs();
  sceneContent.style.display = "flex";
  listButton.classList.remove("active");
  oracleButton.classList.remove("active");
  sceneButton.classList.add("active");
}

listButton.onclick = function() { 
  closeTabs();
  listsContent.style.display = "flex";
  oracleButton.classList.remove("active");
  sceneButton.classList.remove("active");
  listButton.classList.add("active");
}

let displayBox = document.getElementById('text-display')
let questionButton = document.getElementById('question-btn');


questionButton.onclick = function () {
  displayBox.innerHTML = "<p class='word'>Hello<br></p><p class='word'>CC</p>";
}


