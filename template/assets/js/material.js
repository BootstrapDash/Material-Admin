(function ($) {
  'use strict';

  mdc.autoInit();

  // Ripple for buttons
  var buttons = document.querySelectorAll('.mdc-button');
  for (var i = 0, button; button = buttons[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(button);
  }

  // Focus for textfields
  var textFields = document.querySelectorAll('.mdc-text-field');
  for (var i = 0, textField; textField = textFields[i]; i++) {
    mdc.textField.MDCTextField.attachTo(textField);
  }


  const menuEls = Array.from(document.querySelectorAll('.mdc-menu'));
  menuEls.forEach((menuEl, index) => {
    
    const menu = new mdc.menu.MDCMenu(menuEl);
    const buttonEl = menuEl.parentElement.querySelector('.mdc-menu-button');
    buttonEl.addEventListener('click', () => {
      menu.open = !menu.open;
    })
    menu.setAnchorCorner(mdc.menu.Corner.BOTTOM_LEFT);
    menu.setAnchorElement(buttonEl)
  });

  // Tabs
  var tabBars = document.querySelectorAll('.mdc-tab-bar');
  for (var i = 0, tabBar; tabBar = tabBars[i]; i++) {
    var currentTabBar = new mdc.tabBar.MDCTabBar(tabBar);
    currentTabBar.listen('MDCTabBar:activated', function(event) {
      var $this = $(this);
      var contentEls = $this.siblings('.content');
      contentEls.map((index, contentEl) => {
        contentEl.classList.remove('content--active');
      })
      contentEls[event.detail.index].classList.add('content--active');
    });
  }

})(jQuery);