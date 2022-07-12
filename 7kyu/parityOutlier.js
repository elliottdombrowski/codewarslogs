// You are given an array(which will have a length of at least 3, but could be very large) containing integers.The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(ints) {
  let outlier;
  let even = [];
  let odd = [];

  for (let i = 0; i < ints.length; i++) {
    if (ints[i] % 2 === 0) {
      even.push(ints[i]);
    } else odd.push(ints[i]);
  }

  if (even.length > odd.length) {
    outlier = parseInt(odd);
  } else outlier = parseInt(even);
  return outlier;
};