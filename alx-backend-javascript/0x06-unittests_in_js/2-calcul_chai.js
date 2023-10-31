/***
 * function which rounds two inputs and return theirr sum
 * @params {float} a  and b 
 * return sum
 */
function calculateNumber(type, a, b) {
	const c = Math.round(a);
	const d = Math.round(b);
	if (type === 'SUM') {
		return c + d;
	}
	else if (type === 'SUBTRACT') {
		return c - d;
	}
	else if (type === 'DIVIDE') {
		if (d === 0) {
			return 'Error'
		}
		return c / d;
	} else {
		return 0;
	}

};

module.exports = calculateNumber;
