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
