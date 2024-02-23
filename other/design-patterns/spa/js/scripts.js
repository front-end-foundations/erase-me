// declare variables
var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

for (let i = 0; i < tabs.length; i++) {
  console.log(i);
  console.log(tabs[i]);
  console.log(tabs[i].href);
}

// add the class active to one tab
function makeActive(currentHash) {
  makeInactive();
  var tabToActivate = document.querySelector(`a[href="#${currentHash}"]`);
  tabToActivate.classList.add("active");
}

// remove the class active from all tabs
function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  for (var i = 0; i < data.length; i++) {
    if (data[i].section === currentHash) {
      contentPara.innerHTML = `<h2>${data[i].section}</h2> <p>${data[i].story}</p>`;
      makeActive(currentHash);
    }
  }
}

// only runs once on page load
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector('[href="#cuisines"]').classList.add("active");
  }
  setContentAccordingToHash();
}

window.addEventListener("hashchange", setContentAccordingToHash);
document.addEventListener("DOMContentLoaded", initializePage);
