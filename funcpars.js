function functionname(lyear){
    //var a=parselnt(prompt("Enter your year"))
    console.log(typeof(lyear));
    if(lyear%4==0){
        alert("This is a Leap Year")
    }
    else{
        alert("This is not a Leap Year")
    }
}
functionname(2022);