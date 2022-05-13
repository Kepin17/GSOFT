const layer = document.getElementById("layer");
const layer2 = document.getElementById("layer2");
const layer3 = document.getElementById("layer3");

function layerAnimationIn() {
  layer.style.top = "60%";
  layer.style.opacity = ".7";
}
function layerAnimationIn2() {
  layer2.style.top = "60%";
  layer2.style.opacity = ".7";
}
function layerAnimationIn3() {
  layer3.style.top = "60%";
  layer3.style.opacity = ".7";
}

function layerAnimationOut() {
  layer.style.top = "100%";
  layer.style.opacity = "1";
}

function layerAnimationOut2() {
  layer2.style.top = "100%";
  layer2.style.opacity = "1";
}

function layerAnimationOut3() {
  layer3.style.top = "100%";
  layer3.style.opacity = "1";
}

// Profile User

function profileUser() {
  const profile = document.getElementById("profile");
  if (profile.style.display === "block") {
    profile.style.display = "none";
  } else {
    profile.style.display = "block";
  }
}

// more Function

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


// active && deactive function

function activeTech() {
  
}

// function techSection() {
//   const All = document.getElementById("AllCourse");
//   const Tect = document.getElementById("tech");



//   All.style.left = "-100%";
//   Tect.style.left = "5.3%";
// }
