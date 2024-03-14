const searchDigitalRoot = (number: number): number => {
	let currentNumber:string = number.toString()
	while (currentNumber.length>1){
		const sumNumber:string = currentNumber.split('').reduce((sum,number) => sum + Number(number),0).toString()
		currentNumber = sumNumber
	}
	return Number( currentNumber)
}

console.log(searchDigitalRoot(942))