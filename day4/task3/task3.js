function myfunction()
{
    let current_address=document.getElementById("cadd").value;
    let current_city=document.getElementById("cCity").value;
    let current_state=document.getElementById("cstate").value;
    let current_zip=document.getElementById("czip").value;


    let parmanent_address=document.getElementById("padd").value;
    let parmanent_city=document.getElementById("pCity").value;
    let parmanent_state=document.getElementById("pstate").value;
    let parmanent_zip=document.getElementById("pZip").value;


    if((current_address == current_address) && (current_city == parmanent_city) && (current_state == parmanent_state) && (current_zip == parmanent_zip))
    {
        alert("your current address and parmanent address are same");
    }
    else{
        alert("your current address and parmanent address are Not same");
    }
}