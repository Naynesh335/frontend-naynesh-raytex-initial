function auth()
{
    const uname="naynesh";
    const pass="chaudhary";
    const a=document.getElementById("uname").value;
    const b=document.getElementById("pass").value;

    if(a==uname && b==pass)
    {
        console.log("login successfully");
        window.location.href = "file:///D:/frontend/week1/frontend-naynesh-raytex-initial/SamplePeoject/html/home.html";
    }
    else{
        console.log("password is wrong");
        alert("wrong password");
    }
}