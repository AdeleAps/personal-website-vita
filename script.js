const img1 = "./assets/home/bg-imgs/monet-1.jpg";
const img2 = "./assets/home/bg-imgs/monet-2.jpg";
const img3 = "./assets/home/bg-imgs/monet-3.jpg";
const img4 = "./assets/home/bg-imgs/monet-5.jpg";
const img5 = "./assets/home/bg-imgs/monet-5.jpg";

window.onload = function () {
  const bgArray = [img1, img2, img3, img4, img5];
  const bgArt = bgArray[Math.floor(Math.random() * bgArray.length)];
  document.getElementById(
    "intro-tab"
  ).style.background = `rgba(0, 0, 0, 0.5) url(${bgArt})`;
};

const navButton = document.querySelector(".nav-button");
const modal = document.querySelector(".modal-bg");
const mobileNav = document.querySelector("#mobile-nav");
const subsections = document.querySelectorAll(".subsection");

navButton.addEventListener("click", () => {
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
    modal.style.display = "none";
  } else {
    mobileNav.style.display = "block";
    modal.style.display = "block";
  }
});

modal.addEventListener("click", () => {
  if (window.innerWidth < 600) {
    mobileNav.style.display = "none";
  } else {
    for (let i = 0; i < subsections.length; i++) {
      subsections[i].style.display = "none";
    }
    document.querySelector(".active").classList.remove("active");
  }
  modal.style.display = "none";
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 600) {
    mobileNav.style.display = "block";
    modal.style.display = "none";
  } else {
    mobileNav.style.display = "none";
    for (let i = 0; i < subsections.length; i++) {
      subsections[i].style.display = "none";
    }
  }
});

function toggleSubsection(topLevel, subsection) {
  if (document.querySelector(subsection).style.display === "block") {
    document.querySelector(subsection).style.display = "none";
    if (window.innerWidth >= 600) {
      modal.style.display = "none";
      topLevel.classList.remove("active");
    }
  } else {
    for (let i = 0; i < subsections.length; i++) {
      subsections[i].style.display = "none";
    }
    document.querySelector(subsection).style.display = "block";
    if (window.innerWidth >= 600) {
      modal.style.display = "block";
      const activeElement = document.querySelectorAll(".active");
      for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.remove("active");
      }
      topLevel.classList.add("active");
    }
  }
}

const izglitibaTop = document.querySelector(".izglitiba-top");
izglitibaTop.addEventListener("click", function () {
  toggleSubsection(izglitibaTop, ".izglitiba-sub");
});

const pakalpojumiTop = document.querySelector(".pakalpojumi-top");
pakalpojumiTop.addEventListener("click", function () {
  toggleSubsection(pakalpojumiTop, ".pakalpojumi-sub");
});

const blogsTop = document.querySelector(".blogs-top");
blogsTop.addEventListener("click", function () {
  toggleSubsection(blogsTop, ".blogs-sub");
});
