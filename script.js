async function getTabId() {
	const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	return tab.id;
}

chrome.scripting
	.executeScript({
		target: {tabId: await getTabId()},
		files: ["ocr.js"],
	})
	.then(console.log("script injected"));


