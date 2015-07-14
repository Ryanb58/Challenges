//Array of 100 closed doors. 
var doors = new Array(100);

//Set all to closed.
for(var i = 0; i<doors.length;i++)
{
    doors[i] = "closed";
}

//Amount to skip each pass.
var skipCount = 0;

//Make 100 passes.
for(var i = 0; i<100;i++)
{
    //Check the doors based on the skipCount.
    for(var j = 0; j < 100; j += skipCount + 1)
    {
        //console.log(j);
        //toggle door.
        if(doors[j] == "closed")
        {
            doors[j] = "opened";
        }
        else
        {
            doors[j] = "closed";
        }
    }
    skipCount++;
}

for(var i = 0; i<doors.length;i++)
{
    console.log(i + ") " + doors[i]);
}