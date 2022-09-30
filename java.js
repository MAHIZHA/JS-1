//difference bw innertext and innerHtml
let lival=document.getElementById("one").innerHTML="<span> SampleText</span>"
let liva2=document.getElementById("two").innerHTML="Age:<p>30</p>"
let liva3=document.getElementById("three").innerText="Email:mail@email.com"

//creat Element

let imgTag=document.createElement("img");
imgTag.src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80"
imgTag.width=400;
imgTag.height=250;
document.body.append(imgTag);

function add(){
    let Fvalue=document.getElementById("e1").value;
    let Svalue=document.getElementById("e2").value;
    let tolval=parseInt(Fvalue)+ parseInt(Svalue);
    console.log(tolval);
    document.getElementById("result").innerText=tolval;

    document.getElementById("e1").value="";
    document.getElementById("e2").value="";


}
