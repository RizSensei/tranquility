// getting the page name
const currentPage = window.location.pathname;

// window.addEventListener('scroll', function() {
//   const headerNav = document.getElementById('header-nav');
//   if (window.scrollY > 50) {
//     headerNav.classList.add('bg-white');
//     headerNav.classList.remove('bg-transparent');
//   } else {
//     headerNav.classList.add('bg-transparent');
//     headerNav.classList.remove('bg-white');
//   }
// });

// mobile responsive navbar
const openMobileNavButton = document.getElementById("open-mobile-nav");
if (openMobileNavButton) {
  openMobileNavButton.addEventListener("click", function () {
    document.getElementById("mobile-sidebar").classList.add("show");
  });
}

const closeMobileNavButton = document.getElementById("close-mobile-nav");
if (closeMobileNavButton) {
  closeMobileNavButton.addEventListener("click", function () {
    document.getElementById("mobile-sidebar").classList.remove("show");
  });
}

const closeMobileNavBlankRight = document.getElementById(
  "mobile-sidebar-right"
);
if (closeMobileNavBlankRight) {
  closeMobileNavBlankRight.addEventListener("click", function () {
    document.getElementById("mobile-sidebar").classList.remove("show");
  });
}

//   servicie button select effect
const serviceButtons = document.querySelectorAll(".service-button");

serviceButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    serviceButtons.forEach(function (btn) {
      btn.classList.remove("service-btn-active");
    });
    this.classList.add("service-btn-active");
  });
});

//   package button select effect
const packageButtons = document.querySelectorAll(".package-button");

packageButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    packageButtons.forEach(function (btn) {
      btn.classList.remove("package-btn-active");
    });
    this.classList.add("package-btn-active");
  });
});

// hide overflow when sidebar opens and vice-versa

document
  .getElementById("open-mobile-nav")
  .addEventListener("click", function () {
    document.body.classList.add("no-scroll");
  });

document
  .getElementById("close-mobile-nav")
  .addEventListener("click", function () {
    document.body.classList.remove("no-scroll");
  });

// underline under active navbar link
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-item");
  const currentPage = window.location.pathname;

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  // Get the height of the primary navbar
  const headerHeight = document.getElementById("header").offsetHeight;
  const membershipHeaderHeight =
    document.getElementById("membership-heading").offsetHeight;

  // Set the top value for the sticky navbar
  document.getElementById("membership-heading").style.position = "sticky";
  document.getElementById("membership-heading").style.top = `${headerHeight}px`;

  // Calculate the combined height
  const combinedHeight = headerHeight + membershipHeaderHeight;

  document.getElementById(
    "premium-membership"
  ).style.scrollMarginTop = `${combinedHeight}px`;
  document.getElementById(
    "loyalty-program"
  ).style.scrollMarginTop = `${combinedHeight}px`;
  document.getElementById(
    "wellness-card"
  ).style.scrollMarginTop = `${combinedHeight}px`;

  // calculating remaining height for video in home page
  const videoContainer = document.getElementById("video-container");
  const remainingHeight = window.innerHeight - 200;
  videoContainer.style.height = `${remainingHeight}px`;


  // document.getElementById("welcome").style.scrollMarginTop = `${combinedHeight}px`;
  // document.getElementById("history").style.scrollMarginTop = `${headerHeight}px`;
  // document.getElementById("story-and-vision").style.scrollMarginTop = `${headerHeight}px`;
});
