// background.js - i've never known what to do with this file??
async function executeScriptOnTab(tabId) {
  const tab = await chrome.tabs.get(tabId);
  if (tab.url !== undefined && !tab.url.startsWith('chrome://')) {
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
  }
}

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    await executeScriptOnTab(tabId);
    console.log(tab);
  }
});

chrome.tabs.onActivated.addListener(async function (activeInfo) {
  console.log(activeInfo);
  await executeScriptOnTab(activeInfo.tabId); // tabid is undefined??
});

chrome.tabs.onRemoved.addListener(async function (tabId) {
  // await executeScriptOnTab(tabId);
});

chrome.tabs.onReplaced.addListener(async function (addedTabId, removedTabId) {
  await executeScriptOnTab(addedTabId);
  console.log(removedTabId);
});

chrome.tabs.onAttached.addListener(async function (tabId) {
  await executeScriptOnTab(tabId);
});

chrome.tabs.onDetached.addListener(async function (tabId) {
  await executeScriptOnTab(tabId);
});

chrome.tabs.onMoved.addListener(async function (tabId) {
  await executeScriptOnTab(tabId);
});
