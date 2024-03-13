const canvas = document.querySelector("[id='#canvas']");

canvas.toBlob((blob) => {
	const url = URL.createObjectURL(blob);
	console.log(url);
})

