document.addEventListener('click', (e:MouseEvent) => {
	const coords = [e.x, e.y];
	console.log(`Point is ${coords[0]}, ${coords[1]}`);
});