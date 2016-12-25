/**
 * Created by Elizabeth on 25.12.2016.
 */
var toggle = document.getElementById("toggle-button");
var mainMenu = document.getElementById("page-header-menu");
var pageHeaderMenuTitle = document.getElementById("page-header-menu__title");

if (document.documentElement.clientWidth >= 960) {
  mainMenu.style.display = "block";
}
else
  mainMenu.style.display = "none";

function showMenu(id) {
  var element = document.getElementById(id);
  if (element.style.display === 'none') {
    element.style.display = 'block';
    toggle.className += " page-header-menu__toggle--opened";
    pageHeaderMenuTitle.className += " page-header-menu__title--opened-menu";
  }
  else {
    element.style.display = 'none';
    toggle.className = "page-header-menu__toggle";
    pageHeaderMenuTitle.className = "page-header-menu__title";
  }
}

