//Recusive functions to get the fibonacci sequence.

//variables to define where you want to start and end.
var start = 3;
var end = 10;

var fibonacci = function(num)
{
    if(num < 2)
    {
        return num;
    }
    else
    {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

var fibonacci2 = function(num)
{
    if(num == 0) return 0;
    if(num == 1) return 1;
    return fibonacci2(num - 1) + fibonacci2(num - 2);
}


console.log("First Function:")
//Main task to work through.
for(var i = start; i <= end; i++)
{
    console.log("Fibonacci: " + i);
    console.log("--> " + fibonacci(i));
}

console.log("Second Function");
console.log("10) " + fibonacci2(10));