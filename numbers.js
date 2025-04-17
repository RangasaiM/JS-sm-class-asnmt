function formatCurrency(amt, code) {
  let ans = "";
  let cnt = 0;
  let flag = false;
  let stIndex = amt.length - 1;
  if (amt.includes(".")) {
    for (let i = amt.length - 1; i >= 0; i--) {
      ans = amt[i] + ans;
      if (amt[i] === ".") {
        stIndex = i - 1;
        break;
      }
    }
  }
  for (let i = stIndex; i >= 0; i--) {
    ans = amt[i] + ans;
    cnt++;
    if (cnt === 3 && flag === false) {
      if (code === 'INR') flag = true;
      ans = "," + ans;
      cnt = 0;
    }
    if (flag && cnt === 2) {
      ans = ',' + ans;
      cnt = 0;
    }
  }
  if (code === 'INR') ans = '₹' + ans;
  if (code === 'USD') ans = '$' + ans;
  if (code === 'EUR') ans = '€' + ans;
  return ans;
}
console.log(formatCurrency("50203457.334", 'USD'));
console.log(formatCurrency("50203457.334", 'INR'));
console.log(formatCurrency("50203457.334", 'EUR'));
