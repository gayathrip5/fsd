function add(){
  var  a=parseInt(document.getElementById("number1").value);
   var b=parseInt(document.getElementById("number2").value);
    var c=a+b;
    document.getElementById("result").innerHTML=c;
    console.log(c);
}
function substract(){
    var  a=parseInt(document.getElementById("number1").value);
     var b=parseInt(document.getElementById("number2").value);
      var c=a-b;
      document.getElementById("result").innerHTML=c;
      console.log(c);
  }
  function multiply(){
    var  a=parseInt(document.getElementById("number1").value);
     var b=parseInt(document.getElementById("number2").value);
      var c=a*b;
      document.getElementById("result").innerHTML=c;
      console.log(c);
  }
  function divide(){
    var  a=parseInt(document.getElementById("number1").value);
     var b=parseInt(document.getElementById("number2").value);
      var c=a / b;
      document.getElementById("result").innerHTML=c;
      console.log(c);
  }
  function myFunction(){
    document.getElementById("result").innerHTML="";
    document.getElementById("reset").reset();
     
  }
  console.log("hello i am node js")