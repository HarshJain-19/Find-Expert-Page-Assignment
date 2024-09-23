window.onload = () => {
  //~ filters for big screen
  document.getElementById("filters").innerHTML = dataFilters.map(e => renderFilterDropdown(e)).join(" ");
  //~ filters for small screen
  document.getElementById("mobile-filters").innerHTML = dataFilters.map((e,i) => renderMobileFilterDropdown(e,i)).join("<li><hr class=\"dropdown-divider\"></li>");
  //~ experts list
  document.getElementById("experts-list").innerHTML = expertsData.map((e,i) => renderExpertsList(e,i)).join(" ");
  //~ expert detail page
  renderExpertPage(expertsData[0]);
};


const headNav = document.querySelector("#head-nav");
const headNav2 = document.querySelector("#head-nav2");
const tabNav = document.querySelector("#tab-nav");

Array.from(headNav.children).forEach((tab, index, tabsArray) => {
  tab.addEventListener("click", () => makeActive(tabsArray, tab));
});
Array.from(headNav2.children).forEach((tab, index, tabsArray) => {
  tab.addEventListener("click", () => makeActive(tabsArray, tab));
});
Array.from(tabNav.children).forEach((tab, index, tabsArray) => {
  tab.addEventListener("click", () => makeActive(tabsArray, tab));
});

function makeActive(elementArray, element) {
  if (!element.classList.contains("active")) 
    elementArray.forEach(e => {
      if (e===element) 
        e.classList.add("active");
      else 
        e.classList.remove("active");
  })
};

const footerAccordion = document.querySelectorAll(".footer-accordion");
Array.from(footerAccordion).forEach(e => {
  e.onclick = function () {
    this.classList.toggle("show");
  }
});

const closeBodyScroll = () => {
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";
}
const openBodyScroll = () => {
  document.body.style.overflow = "auto";
}


