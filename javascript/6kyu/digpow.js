/*
 * [200~Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
 *
 * we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
 * In other words:
 *
 * Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
 *
 * If it is the case we will return k, if not return -1.
 */

function digPow(n, p){
	let digits = n.toString().split('').map(Number);
	let total = 0;
	let k = 0;

	for(let d = 0, len = digits.length; d < len; ++d)
		total += digits[d]**(p++);

	return (total%n) ? -1 : total/n;
}
