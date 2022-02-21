var name="james";
var numberone=1;
var verify=true;

var numbertwo=2;
//object
//const student={name:"james",age:30};

//document.getElementById("valobject").value= 
//student.name +" " + student.age;

function addition()
{
    var sum=numberone+numbertwo;
    var mul=numberone*numbertwo;
    document.getElementById("newone").innerHTML = "Aurther";
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("mul").innerHTML = mul;
    console.log(sum);
    console.log(mul);
    return sum;
}

var picknum=document.getElementById("picknum").value;


funcation oddeven()
{
    if(picknum%2==0)
    {
        console.log("even");
    }
    else{
        console.log("odd");
    }
}