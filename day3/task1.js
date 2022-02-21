
function prime()
{
    var a=document.getElementById("a").value;
    var flag=true;
    
    for(var i=2;i<=a/2;i++)
    {
        if(a%i==0)
        {
            flag=false;
            break;
        }
    }
    
    if(flag==true)
    {
        document.getElementById("print").innerHTML="number is prime";
    }
    else{
        document.getElementById("print").innerHTML="number is not prime";
    }

}