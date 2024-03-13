import { createWorker } from 'tesseract.js';

async function getTabId() {
	const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	return tab.id;
}

chrome.scripting
	.executeScript({
		target: {tabId: await getTabId()},
		func: () => {
			const canvas = document.querySelector("[id='#canvas']");
			console.log("in the function");

			canvas.toBlob((blob) => {
				(
					async () => {
						const worker = await createWorker('eng');
						const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
						console.log(ret.data.text);
						await worker.terminate();
					}
				)();
			})
		}
	})
	.then(console.log("script injected"));


