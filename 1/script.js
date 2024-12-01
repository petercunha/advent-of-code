const lineReader = require('readline').createInterface({
	input: require('fs').createReadStream('input.txt'),
})

let list1 = []
let list2 = []

lineReader.on('line', function (line) {
	const s = line.split('   ')
	list1.push(parseInt(s[0]))
	list2.push(parseInt(s[1]))
})

lineReader.on('close', function () {
	list1 = list1.sort()
	list2 = list2.sort()

	let sum = 0
	for (let i = 0; i < list1.length; i++) {
		sum += Math.abs(list1[i] - list2[i])
	}

	console.log(sum)
})
