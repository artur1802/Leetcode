var isPalindrome = function(s) {
    let str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let reverseStr = str.split('').reverse().join('');
//return
return str==reverseStr;
};
