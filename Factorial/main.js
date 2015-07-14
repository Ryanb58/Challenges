//Recursive factorial function.

var factorial = function(num)
{
    if(num == 0)
    {
        return 1;
    }
    return num * factorial(num - 1);
};

console.log("Factorial of 4: " + factorial(4));