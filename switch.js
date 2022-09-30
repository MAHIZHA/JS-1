var a=1000;

console.log("Welcome");
switch(true){
    case(a<=350):
    console.log("Rs.4.50 per unit");
    console.log("your total amount is=", a*4.50);
    break;

case(a<=800):
console.log("Rs.6.60 per unit");
console.log("your total amount is=", a*6.60);
break;

case(a<=1000):
console.log("Rs.10 per unit");
console.log("your total amount is=", a*10);
break;

default:
    console.log("Thank you");


}
