let color = "#FFFF00"

chrome.runtime.onInstalled.addListener(() => {
chrome.storage.sync.set({color})
})