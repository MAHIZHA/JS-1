function clickevent(){
    let adcount=document.getElementById("inputcountry").value;
    console.log(adcount);
    let country=document.getElementById("option");
    country.text=adcount;

    document.getElementById("Selcont").appendChild(country);
    document.getElementById("inputcountry").value="";
}