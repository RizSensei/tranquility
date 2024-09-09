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

  const closeMobileNavBlankRight = document.getElementById("mobile-sidebar-right");
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

  document.getElementById('open-mobile-nav').addEventListener('click', function() {
    document.body.classList.add('no-scroll');
  });

  document.getElementById('close-mobile-nav').addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
  });