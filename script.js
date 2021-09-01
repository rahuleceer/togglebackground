var outerdiv=document.getElementById("outerdiv");
var btn=document.getElementById("btn");
var ptag=document.getElementById("para");


var count=0;
    outerdiv.addEventListener('click',function(){
	     if(count==0)
	     {
	     	ptag.style.color = 'white';
	        document.querySelector("body").style.backgroundColor = "black";
	        btn.style.marginLeft="70px";
	        count=1;
	     }
	     else{
	     	ptag.style.color = 'green';
	        document.querySelector("body").style.backgroundColor = "white";
	        btn.style.marginLeft="3px";
	        count=0;
	     }
    });
