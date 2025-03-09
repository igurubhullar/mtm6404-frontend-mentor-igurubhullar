document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = mobileMenuButton?.querySelector("img");
  
    // Mobile dropdown buttons
    const mobileDropdownButtons = document.querySelectorAll(
      "#mobile-menu button:not(#mobile-menu-close)"
    );
  
    // Toggle mobile menu function
    const toggleMobileMenu = () => {
      const isMenuHidden = mobileMenu.classList.toggle("hidden");
  
      // Update icon based on menu state
      if (menuIcon) {
        menuIcon.src = isMenuHidden
          ? "./images/icon-hamburger.svg"
          : "./images/icon-close.svg";
      }
    };
  
    // Close mobile menu function
    const closeMobileMenu = () => {
      mobileMenu.classList.add("hidden");
      if (menuIcon) {
        menuIcon.src = "./images/icon-hamburger.svg";
      }
    };
  
    // Add event listeners for mobile menu
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", toggleMobileMenu);
    }
  
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu);
    }
  
    // Style and behavior for dropdown arrows
    const arrowDefaultStyle =
      "invert(50%) sepia(50%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(85%)";
    const arrowActiveStyle =
      "invert(50%) sepia(100%) saturate(1000%) hue-rotate(330deg) brightness(100%) contrast(90%)";
  
    // Setup mobile dropdown toggles
    mobileDropdownButtons.forEach((button) => {
      const arrow = button.querySelector("img");
  
      // Apply initial styling if it's an arrow
      if (arrow && arrow.src.includes("icon-arrow-light.svg")) {
        arrow.style.filter = arrowDefaultStyle;
      }
  
      button.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        const arrow = this.querySelector("img");
  
        if (!arrow) return;
  
        // Toggle dropdown visibility
        const isDropdownHidden = dropdown.classList.toggle("hidden");
  
        // Update arrow styling based on dropdown state
        arrow.style.transform = isDropdownHidden
          ? "rotate(0deg)"
          : "rotate(180deg)";
        arrow.style.filter = isDropdownHidden
          ? arrowDefaultStyle
          : arrowActiveStyle;
      });
    });
  });
  