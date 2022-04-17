// function multi(){
//     var x=document.getElementById("number").value*1000;
//     document.getElementById("total").value=x;
//     console.log(document.getElementById("total").value);
// }

function sum(){
    console.log(document.getElementById("fromDate").value)
    console.log(document.getElementById("toDate").value);//gets the todate in console
    console.log(document.getElementById("total").value);
    if(document.getElementById("toDate").value<document.getElementById("fromDate").value)
    alert("toDate should be greater than fromDate")
    document.getElementById("total").value =1000+ document.getElementById("number").value*1000*((document.getElementById("toDate").valueAsNumber-document.getElementById("fromDate").valueAsNumber)/(24*60*60*1000));
}

