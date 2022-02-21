

function auth(){
    const uname="naynesh";
    const pass="chaudhary";
    const a=document.getElementById("uname").value;
    const b=document.getElementById("pass").value;

    if(a==uname && b==pass)
    {
        console.log("login successfully");
    }
    else{
        console.log("password is wrong");
    }
}