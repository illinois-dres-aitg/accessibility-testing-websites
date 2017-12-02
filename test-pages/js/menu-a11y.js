/**
 * Global variables
 */
"use strict";

function focusPopupMenu(event) {
  var node = event.currentTarget.parentNode;
  node.classList.add('focus');
};

function blurPopupMenu(event) {
  var node = event.currentTarget.parentNode;
  node.classList.remove('focus');
};

function focusDropDownMenu(event) {
  var node = event.currentTarget.parentNode.parentNode.parentNode;
  node.classList.add('focus');
};

function blurDropDownMenu(event) {
  var node = event.currentTarget.parentNode.parentNode.parentNode;
  node.classList.remove('focus');
};

console.log('MENUITEMS:');


window.addEventListener('load', function () {

  console.log('MENUITEMS:');
  var i, menuItems, menuItem, dropDownItems, dropDownItem;

  menuItems = document.querySelectorAll('.rd-navbar-nav .rd-navbar-submenu > a');

  for (i = 0; i < menuItems.length; i++) {
    menuItem = menuItems[i];
    console.log('MenuItem: ' + menuItem.textContent);
    menuItem.addEventListener('focus', focusPopupMenu);
    menuItem.addEventListener('blur',  blurPopupMenu);
  }

  dropDownItems = document.querySelectorAll('.rd-navbar-nav .rd-navbar-dropdown a');

  for (i = 0; i < dropDownItems.length; i++) {
    dropDownItem = dropDownItems[i];
    console.log('DropDownItem: ' + dropDownItem.textContent);
    dropDownItem.addEventListener('focus', focusDropDownMenu);
    dropDownItem.addEventListener('blur',  blurDropDownMenu);
  }

});
