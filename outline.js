const BASE_URL = 'https://outline.com/';

// Create context menu item
let title = 'Send Page to Outline.com';
let menuId = chrome.contextMenus.create({
  title: 'Send Page to Outline.com',
  contexts: ['link', 'page'],
  onclick: sendToOutline
});

// Send current location to Outline.com
function sendToOutline(info, tab) {
  chrome.tabs.update(tab.id, { url: BASE_URL + tab.url });
}
