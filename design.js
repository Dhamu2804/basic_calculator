function add(){
    a=parseInt(document.getElementById("first_integer").value);
    b=parseInt(document.getElementById("second_integer").value);
    sum=a+b;
    document.getElementById("result").innerHTML=sum;
}
function sub(){
    a=parseInt(document.getElementById("first_integer").value);
    b=parseInt(document.getElementById("second_integer").value);
    sum=a-b;
    document.getElementById("result").innerHTML=sum;
}
function mul(){
    a=parseInt(document.getElementById("first_integer").value);
    b=parseInt(document.getElementById("second_integer").value);
    sum=a*b;
    document.getElementById("result").innerHTML=sum;
}
function div(){
    a=parseInt(document.getElementById("first_integer").value);
    b=parseInt(document.getElementById("second_integer").value);
    sum=a/b;
    document.getElementById("result").innerHTML=sum;
}