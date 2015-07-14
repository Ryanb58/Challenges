//Recursive functions
//Help from http://en.wikipedia.org/wiki/Recursion_(computer_science)

var gcd = function(num, remainder)
{
    if(remainder == 0)
    {
        return num;
    }
    else
    {
        return gcd(remainder, num % remainder);
    }
}

console.log(gcd(111, 259));
//Answer should be 37