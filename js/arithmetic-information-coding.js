export function getResult(value) {
}

function countOccurrence(val) {
	const result = {};

	for (let i = 0; i < val.length; i += 1) {
		if (!result[val[i]]) {
			result[val[i]] = 1
		} else {
			result[val[i]] += 1
		}
	}
}

function countFrequency(obj, count) {
	const newObj = Object.assign({}, obj);
	const keys = Object.keys(newObj);

	keys.forEach((key) => {
		newObj[key] /= count;
	});

	return newObj;
}

function getSortedArray(freqObj) {  
	const result = [];
	const keys = Object.keys(newObj);

	keys.forEach((key) => {
		result.push({
			char: key,
			frequency: freqObj[key],
		});
	});

	result.sort((a, b) => a.frequency > b.frequency);
}
