// Tech & All Slider

let All = document.getElementById("AllCourse");
let Tech = document.getElementById("changeSlide");
let sports = document.getElementById("sportSlide");
let Cooking = document.getElementById("cookingSlide");
let Acting = document.getElementById("actingSlide");

// button
let Alldeactive = document.getElementById("course-active");
let Allactive = document.getElementById("course-active");
let Techdeactive = document.getElementById("tech-active");
let Techactive = document.getElementById("tech-active");
let Sportdeactive = document.getElementById("sport-active");
let Sportactive = document.getElementById("sport-active");
let Cookingdeactive = document.getElementById("cooking-active");
let Cookingctive = document.getElementById("cooking-active");
let Actingdeactive = document.getElementById("acting-active");
let Actingactive = document.getElementById("acting-active");

function moreBtn() {
  const showMore = document.getElementById("CourserList");
  const moreBtn = document.getElementById("more");
  const lessBtn = document.getElementById("less");

  showMore.style.height = "2000px";
  // destroy first btn
  moreBtn.style.display = "none";
  // show btn
  lessBtn.style.display = "block";
}

// less btn function

function lessBtn() {
  const showLess = document.getElementById("CourserList");
  const lessBtn = document.getElementById("less");
  const moreBtn = document.getElementById("more");

  showLess.style.height = "500px";
  // destroy first btn
  lessBtn.style.display = "none";
  // show btn
  moreBtn.style.display = "block";
}

// Destroy btn Function

function destroyBtn() {
  const destroyBtn = document.getElementById("more");
  destroyBtn.style.display = "none";
}
// Spawn Btn Function
function spawnBtn() {
  const spawnBtn = document.getElementById("more");
  spawnBtn.style.display = "block";
}

// active && deactive function
function deactiveAll() {
  Alldeactive.style.color = "rgb(120, 110, 110)";
}

function activeAll() {
  Allactive.style.color = "#000";
}

function activeTech() {
  Techactive.style.color = "#000";
}
function deactiveTech() {
  Techdeactive.style.color = "rgb(120, 110, 110)";
}

function activeSport() {
  Sportactive.style.color = "#000";
}
function deactiveSport() {
  Sportdeactive.style.color = "rgb(120, 110, 110)";
}
function activeCooking() {
  Cookingctive.style.color = "#000";
}
function deactiveCooking() {
  Cookingdeactive.style.color = "rgb(120, 110, 110)";
}
function activeActing() {
  Actingactive.style.color = "#000";
}
function deactiveActing() {
  Actingdeactive.style.color = "rgb(120, 110, 110)";
}

// Logic 💀

Allactive.onclick = function () {
  activeAll();
  spawnBtn();
  deactiveTech();
  deactiveSport();
  deactiveCooking();
  deactiveActing();
  All.style.display = "block";
  Tech.style.display = "none";
  sports.style.display = "none";
  Cooking.style.display = "none";
  Acting.style.display = "none";
};

Techactive.onclick = function () {
  deactiveAll();
  activeTech();
  destroyBtn();
  deactiveActing();
  deactiveCooking();
  deactiveSport();
  All.style.display = "none";
  Tech.style.display = "block";
  sports.style.display = "none";
  Cooking.style.display = "none";
  Acting.style.display = "none";
};

Sportactive.onclick = function () {
  deactiveAll();
  deactiveTech();
  destroyBtn();
  deactiveActing();
  deactiveCooking();
  activeSport();
  All.style.display = "none";
  Tech.style.display = "none";
  sports.style.display = "block";
  Cooking.style.display = "none";
  Acting.style.display = "none";
};

Cookingctive.onclick = function () {
  deactiveAll();
  deactiveTech();
  destroyBtn();
  deactiveActing();
  activeCooking();
  deactiveSport();
  All.style.display = "none";
  Tech.style.display = "none";
  sports.style.display = "none";
  Cooking.style.display = "block";
  Acting.style.display = "none";
};

Actingdeactive.onclick = function () {
  deactiveAll();
  deactiveTech();
  destroyBtn();
  activeActing();
  deactiveCooking();
  deactiveSport();
  All.style.display = "none";
  Tech.style.display = "none";
  sports.style.display = "none";
  Cooking.style.display = "none";
  Acting.style.display = "block";
};
