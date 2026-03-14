var image = document.querySelector(".half-image img");
var content = document.querySelector(".half-content");
var mobileMenuButton = document.querySelector(".mobile-menu");
var mobileNavPanel = document.querySelector(".mobile-nav-panel");
var mobileNavClose = document.querySelector(".mobile-nav-close");
var mobileNavLinks = document.querySelectorAll(".mobile-nav-links a, .mobile-nav-cta a");
var playBtn = document.querySelector(".mstg-play");
var popup = document.getElementById("videoPopup");
var closeBtn = document.querySelector(".video-popup-close");
var video = document.getElementById("popupVideo");

function handleScroll() {
  var screenHeight = window.innerHeight;
  if (image) {
    var imagePosition = image.getBoundingClientRect().top;
    if (imagePosition < screenHeight * 0.75) {
      image.classList.add("scale-in");
    } else {
      image.classList.remove("scale-in");
    }
  }
  if (content) {
    var contentPosition = content.getBoundingClientRect().top;
    if (contentPosition < screenHeight * 0.75) {
      content.classList.add("show");
    } else {
      content.classList.remove("show");
    }
  }
}

function openMobileMenu() {
  if (!mobileNavPanel) return;
  mobileNavPanel.classList.add("is-open");
  document.body.classList.add("menu-open");
}

function closeMobileMenu() {
  if (!mobileNavPanel) return;
  mobileNavPanel.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function openVideo() {
  if (!popup || !video) return;
  popup.classList.add("active");
  document.body.style.overflow = "hidden";
  video.currentTime = 0;
  video.play();
}

function closeVideo() {
  if (!popup || !video) return;
  popup.classList.remove("active");
  document.body.style.overflow = "";
  video.pause();
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", openMobileMenu);
}
if (mobileNavClose) {
  mobileNavClose.addEventListener("click", closeMobileMenu);
}
if (mobileNavLinks.length) {
  mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });
}
window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    closeMobileMenu();
  }
});
if (playBtn) {
  playBtn.addEventListener("click", openVideo);
}
if (closeBtn) {
  closeBtn.addEventListener("click", closeVideo);
}
if (popup) {
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closeVideo();
    }
  });
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMobileMenu();
    closeVideo();
  }
});