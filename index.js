const handleNavLinkClick = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  window.location.href = href;
}

const handleScroll = () => {
  const scrollArrow = document.querySelector(".scroll-arrow");
  if (window.scrollY > 300) {
    scrollArrow.classList.add("show");
  } else {
    scrollArrow.classList.remove("show");
  }
};


const handleScrollArrowClick = (e) => {
  e.preventDefault();
  const targetElement = document.documentElement;
  const scrollOptions = {
    top: targetElement.offsetTop,
    behavior: "smooth",
  };
  targetElement.scrollTo(scrollOptions);
};

document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", handleNavLinkClick);
});

window.addEventListener("scroll", handleScroll);

document
  .querySelector(".scroll-arrow")
  .addEventListener("click", handleScrollArrowClick);
