function functionName(){
    var a=0; 
    var b=1;
    var z;
    for(let i=0; i<=10; i++){
        console.log(a);
        z=a+b;
        a=b;
        b=z;
    }
}
functionName()

