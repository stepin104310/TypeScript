var alpha = new Array('a', 'b', 'c', 'd', 'e', 'f');
alpha[10] = 'm';
console.log(alpha[7]);
console.log(alpha.length);
//destructuring
// var nums:number[] = [10,20];
// var [a,b] = nums;
// var [a,b,c] = nums;
// var[m] =nums;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(m);
// console.log(typeof(nums))
// var alpha = new Array('a','b','c','d','e');
// alpha[10]='m';
// console.log(alpha[7]);
// console.log(alpha.length);
var nums = [10, 20];
var a = nums[0], b = nums[1];
var a = nums[0], b = nums[1], c = nums[2];
var m = nums[0];
console.log(a);
console.log(b);
console.log(c);
console.log(m);
console.log(typeof (nums));
