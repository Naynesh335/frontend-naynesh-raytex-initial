
function fib(){
    var n=document.getElementById("n").value;

    var a=0;
    var b=1;

    for(var i=2;i<n;i++)
    {
        var c= a+b;
        document.getElementById("print").innerHTML=c;
        a=b;
        b=c;
    }
}
