/***
 * function which rounds two inputs and return theirr sum
 * @params {float} a  and b 
 * return sum
 */
function calculateNumber(a, b) {
	const c = Math.round(a);
	const d = Math.round(b);
	return c + d;
}

module.exports = calculateNumber;
