const categoryContainer = document.querySelector(".category-container");

categoryContainer.addEventListener("click", (e) => {
  if (e.target.href) {
    e.preventDefault();
    const link = e.target.getAttribute("href").replace("#", "");
    const elToScroll = document.getElementById(link);
    elToScroll.scrollIntoView({ behavior: "smooth" });
  }
});
