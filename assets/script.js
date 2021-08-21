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
  oracleContent.style.display = "block"
}

sceneButton.onclick = function() { 
  closeTabs();
  sceneContent.style.display = "block"
}

listButton.onclick = function() { 
  closeTabs();
  listsContent.style.display = "block"
}


