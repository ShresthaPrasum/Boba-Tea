const logo = document.querySelector(".logo");
  const navContainer = document.querySelector(".nav-container");
  const main = document.querySelector(".main");
  const navLinks = document.querySelectorAll(".nav ul li a");
  let active = false;

  logo.addEventListener("click", () => {
    if (!active) {
      active = true;
      navContainer.classList.add("active");
      main.classList.add("naved");
    } 
    else {
      active = false;
      navContainer.classList.remove("active");
      main.classList.remove("naved");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navContainer.classList.remove("active");
      main.classList.remove("naved");
      active = false;
    });
  });