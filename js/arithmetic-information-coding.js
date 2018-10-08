export function getResult(value) {
	console.log(value);
	const occurrence = countOccurrence(value);
	console.log(occurrence);
	const frequency = countFrequency(occurrence, value.length);
	console.log(frequency);
	const arr = getSortedArray(frequency);
	console.log(arr);
	const intervals = buildIntervals(arr);
	console.log(intervals);
	const finalInterval = getWorkingInterval(intervals, value);
	console.log(finalInterval);
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

	return result;
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
	const keys = Object.keys(freqObj);

	keys.forEach((key) => {
		result.push({
			char: key,
			frequency: freqObj[key],
		});
	});

	result.sort((a, b) => a.frequency < b.frequency);

	return result;
}

function buildIntervals(arr) {
	const newArr = arr.reduce((acc, el) => {
		var a = Object.assign({}, el);
		acc.push(a);
		return acc;
	}, []);

	newArr[0].low = 0;
	newArr[0].high = newArr[0].frequency;

	for (let i = 1; i < newArr.length; i++) {
		const prevInd = i - 1;
		newArr[i].low = newArr[prevInd].high;
		newArr[i].high = newArr[i].frequency + newArr[prevInd].high;
	}

	newArr[newArr.length - 1].high = 1;

	return newArr;
}

function getWorkingInterval(intervals, str) {
	const interval = {};
	const char = intervals.find((el) => {
		return el.char === str[0];
	});

	interval.low = char.low
	interval.high = char.high;

	for (let i = 1; i < str.length; i++) {
		const char = intervals.find((el) => {
			return el.char === str[i];
		});

		interval.low = interval.low + ((interval.high - interval.low) * char.low);
		interval.high = interval.low + ((interval.high - interval.low) * char.high);
	}

	return interval;
}
