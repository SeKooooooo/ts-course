const line = 'dsa   das'
const reverseLine:string = line.split(' ').map(word => word.split('').reverse().join('')).join(' ');
console.log(reverseLine)
