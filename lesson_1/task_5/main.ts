const ToUpSquare = (number: number) : number=>{
	return (number < 0) ? number :
	Number(number.toString().split('').map(number => (Number(number)**2).toString()).join(''))
}

console.log(ToUpSquare(4587))

