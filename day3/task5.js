
function findage()
{
    const d=new Date();
    const presentdate=d.getDate();
    const presentyear=d.getFullYear();
    const presentmonth=d.getMonth();

    const b=document.getElementById("bdate").value;
    const birth=new Date(b);
    const dd=birth.getDate();
    const yy=birth.getFullYear();
    const mm=birth.getMonth();

    const agedate=presentdate-dd;
    const agemonth=Math.abs(presentmonth-mm);
    const ageyear=presentyear-yy;
     
    console.log("you are old");
    console.log("year : " + ageyear);
    console.log("month : " + agemonth);
    console.log("day : " + agedate);
}