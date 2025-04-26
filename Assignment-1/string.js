
function findLongestPalindrome(str) {
    let n = str.length;
    let ans = "";
    let maxi = 0;
    for (let i = 1; i < n; i++) {
        let j = i;
        let k = i - 1;
        while (k >= 0 && j < n && str[j] === str[k]) {
            maxi = Math.max(maxi, j - k + 1);
            if (maxi > ans.length) {
                ans = str.substring(k, j + 1);
            }
            k--;
            j++;
        }
        j = i + 1;
        k = i - 1;
        while (k >= 0 && j < n && str[j] === str[k]) {
            maxi = Math.max(maxi, j - k + 1);
            if (maxi > ans.length) {
                ans = str.substring(k, j + 1);
            }
            k--;
            j++;
        }
    }
    return ans;
}

console.log(findLongestPalindrome('123321'));
console.log(findLongestPalindrome('forgeeksskeegfor'));
console.log(findLongestPalindrome('noonmadamracecar'));