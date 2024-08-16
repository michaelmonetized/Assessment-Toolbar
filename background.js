// background.js - i've never known what to do with this file??

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
  }
});

chrome.tabs.onActivated.addListener(async function (activeInfo) {
  await chrome.scripting.executeScript({
    target: { tabId: activeInfo.tabId },
    files: ['content.js']
  });
});

chrome.tabs.onRemoved.addListener(async function (tabId) {
  await chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['content.js']
  });
});

chrome.tabs.onReplaced.addListener(async function (addedTabId, removedTabId) {
  await chrome.scripting.executeScript({
    target: { tabId: addedTabId },
    files: ['content.js']
  });
});

chrome.tabs.onAttached.addListener(async function (tabId) {
  await chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['content.js']
  });
});

chrome.tabs.onDetached.addListener(async function (tabId) {
  await chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['content.js']
  });
});

chrome.tabs.onMoved.addListener(async function (tabId) {
  await chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['content.js']
  });
});
