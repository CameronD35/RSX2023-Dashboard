function sendData(num) {
	value = (typeof num == 'number' && !(isNaN(num)))? num : 100;
	let main = setInterval(() => {
		const multiDimArr 
		= {
			"number": [Math.round((Math.random())*value)],
			"maxNumber": num
		};
		io.emit('data', JSON.stringify(multiDimArr));
	}, 1000);
}