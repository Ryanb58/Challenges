//Recursive palindrome functions.

//Check if the string is a palindrome.
var isPalindrome = function(str)
{
    //Have to put this check in there because "y".split("") returns undefined.
    if(str.length == 1)
    {
        return true;
    }

    var strLower = str.toLowerCase();
    var strArray = strLower.split("");
    var firstChar = strArray[0];
    var lastChar = strArray[strArray.length - 1];

    if(firstChar == lastChar)
    {
        if(str.length <= 2)
        {
            return true;
        }
        return isPalindrome(str.slice(1,-1));
    }
    else
    {
        return false;
    }
}

console.log("Is the word 'hannah' a palindrome? " + isPalindrome("hannah"));
console.log("Is the word 'racecar' a palindrome? " + isPalindrome("racecar"));
console.log("Is the word 'taylor' a palindrome? " + isPalindrome("taylor"));