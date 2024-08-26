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