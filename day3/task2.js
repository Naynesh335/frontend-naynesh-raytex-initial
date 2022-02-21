function countword()
{
    var a=document.getElementById("word").value;
    var c;
    var l=a.length;

    if(a[0]!=" ")
    {
        c=1;
    }
    else{
        c=0;
    }

    for(var i=0;i<l;i++)
    {
        if(a[i]==" ")
        {
            c++;
        }
    }

    document.getElementById("print").innerHTML=c;

}