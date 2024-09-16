window.onload = () => {
  document.getElementById("filters").innerHTML = dataFilters.map(e => renderFilterDropdown(e)).join(" ");
  document.getElementById("experts-list").innerHTML = expertsData.map((e,i) => renderExpertsList(e,i)).join(" ");
  renderExpertPage(expertsData[0]);
};


const headNav = document.querySelector("#head-nav");
const tabNav = document.querySelector("#tab-nav");

Array.from(headNav.children).forEach((tab, index, tabsArray) => {
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
}
function rotateDropdown(e) {
  if (e.children[0].style.rotate==="180deg") 
    e.children[0].style.rotate = "0deg";
  else 
    e.children[0].style.rotate = "180deg";
}



