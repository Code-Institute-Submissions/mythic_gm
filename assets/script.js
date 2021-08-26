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

// Tabs
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
let oddsValue = document.getElementsByClassName("odds-value");
let chaosNumber = parseInt(document.getElementById("chaos-number").textContent) - 1;

// display the odds selector modal
questionButton.onclick = function() {
  oddsBox.style.display = "flex";
}

//text slider for odds div

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n)
}

//display odds text
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

//fate chart functions

let oddIs;

//this funciton gets the inner html string of the text slider on the odds modal window
function getOddsValue(n) {
  var i;
  var slides = document.getElementsByClassName("odds-slider");
  let oddsValues = document.getElementsByClassName("odds-value");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (slideIndex === 1) {
    return(oddsValues[n-1].innerHTML)
  } else
  return(oddsValues[n-1].innerHTML)
}

//this funciton links an array of numbers that represent the odds of the outcome coming out as a yes
function generatOddsAnswer() {
  if (getOddsValue(slideIndex) === "50/50"){
    oddIs = [10, 15, 25, 35, 50, 65, 75, 85, 95];
  } else if (getOddsValue(slideIndex) === "Somewhat likely"){
    oddIs = [20, 25, 45, 50, 65, 80, 85, 90, 95];
  }else if (getOddsValue(slideIndex) === "likely"){
    oddIs = [25, 35, 50, 55, 75, 85, 90, 95, 100];
  }else if (getOddsValue(slideIndex) === "Very likely"){
    oddIs = [45, 50, 65, 75, 85, 90, 95, 95, 105];
  }else if (getOddsValue(slideIndex) === "Near sure thing"){
    oddIs = [50, 55, 75, 80, 90, 95, 95, 100, 115];
  }else if (getOddsValue(slideIndex) === "A sure thing"){
    oddIs = [55, 65, 80, 85, 90, 95, 95, 110, 125];
  }else if (getOddsValue(slideIndex) === "Has to be"){
    oddIs = [80, 85, 90, 95, 95, 100, 100, 130, 145];
  }else if (getOddsValue(slideIndex) === "Unlikely"){
    oddIs = [5, 10, 15, 20, 35, 50, 55, 75, 90];
  }else if (getOddsValue(slideIndex) === "Very unlikely"){
    oddIs = [5, 5, 10, 15, 25, 45, 50, 65, 85];
  }else if (getOddsValue(slideIndex) === "Impossible"){
    oddIs = [-20, 0, 0, 5, 5, 10, 15, 25, 50];
  }

}

// this function imitates the dice roll and generates the answer to the question. 
// yes is below and up to the number and no is after the number. 
//the lower 1/5 of the number is exceptional yes, the upper 1/5 of the number is exceptional no
//you can get the lower 1/5 by dividing by 5. the upper 1/5th by adding dividing by 5 and 81 to the answer.
// The higher the chaos number the higher the likelyhood of a yes answer
function generateAnswer(){
  
  let randomInt = (Math.floor(Math.random() * 100 +1 ));
  console.log(randomInt)
    if (randomInt <= (oddIs[chaosNumber]) && randomInt < (oddIs[chaosNumber] / 5)){
      displayBox.innerHTML = "<h3 class='word'>yes</h3><h3 class='word'>Exceptional</h3>";
    } else if (randomInt <= (oddIs[chaosNumber])) {
      displayBox.innerHTML = "<h3 class='word'>Yes</h3>"
    } else if (randomInt > (oddIs[chaosNumber]) && randomInt >= (oddIs[chaosNumber] / 5 + 81)){
      displayBox.innerHTML = "<h3 class='word'>No</h3><h3 class='word'>Exceptional</h3>"
    } else {
      displayBox.innerHTML = "<h3 class='word'>No</h3>"
    }
  }

// to display the output text in emulator window
oddsButton.onclick = function() {
  generatOddsAnswer()
  generateAnswer()
  oddsBox.style.display = "none";
} 


//event button 

let eventButton = document.getElementById('event-btn');

//event meaning: 

const eventAction = ["Attainment","Starting","Neglect","Fight","Recruit","Triumph","Violate","Oppose","Malice","Communicate",
  "Persecute","Increase","Decrease","Abandon","Gratify","Inquire","Antagonise","Move","Waste","Truce","Release","Befriend",
  "Judge","Desert","Dominate","Procrastinate","Praise","Separate","Take","Break","Heal",
  "Delay","Stop","Lie","Return","Immitate","Struggle","Inform","Bestow","Postpone","Expose","Haggle","Imprison","Release","Celebrate","Develop",
  "Travel","Block","Harm","Debase","Overindulge","Adjourn","Adversity","Kill","Disrupt","Usurp","Create","Betray","Agree","Abuse",
  "Oppress","Inspect","Ambush","Spy","Attach","Carry","Open","Carelessness","Ruin","Extravagance","Trick","Arrive","Propose","Divide",
  "Refuse","Mistrust","Deceive","Cruelty","Intolerance","Trust","Excitement","Activity","Assist","Care","Negligence","Passion",
  "Work hard","Control","Attract","Failure","Pursue","Vengeance","Proceedings","Dispute","Punish","Guide","Transform",
  "Overthrow","Oppress","Change"]

const eventSubject = ["Goals", "Dreams", "Environment", "Outside", "Inside","Reality",
  "Allies","Enemies","Evil","Good","Emotions","Opposition","War","Peace","The innocent","Love","The spiritual",
  "The intellectual","New ideas","Joy","Messages","Energy","Balance","Tension","Friendship","The physical","A project","Pleasures",
  "Pain","Possessions","Benefits","Plans","Lies","Expectations","Legal matters","Bureaucracy","Business",
  "A path","News","Exterior factors","Advice","A plot","Competition","Prison","Illness","Food","Attention","Success","Failure","Travel",
  "Jealousy","Dispute","Home","Investment","Suffering","Wishes","Tactics","Stalemate","Randomness","Misfortune","Death",
  "Disruption","Power","A burden","Intrigues","Fears","Ambush","Rumor","Wounds","Extravagance","A representative","Adversities",
  "Opulence","Liberty","Military","The mundane","Trials","Masses","Vehicle","Art","Victory","Dispute","Riches","Status quo",
  "Technology","Hope","Magic","Illusions","Portals","Danger","Weapons","Animals","Weather","Elements","Nature","The public","Leadership","Fame",
  "Anger","Information"]

eventButton.onclick = function(){
  var randomIntAction = (Math.floor(Math.random() * 100 +1 ));
  var action = eventAction[randomIntAction];
  var randomIntSubject = (Math.floor(Math.random() * 100 +1 ));
  var subject = eventSubject[randomIntSubject];
  displayBox.innerHTML = `<h3 class = 'word'>${action}</h3><h3 class = 'word'>${subject}</h3>`;
}









