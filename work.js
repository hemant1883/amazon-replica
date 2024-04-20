console.log("hello");
var slidebtnleft=document.getElementById("chng-left");
var slidebtnright=document.getElementById("chng-right");
var herosec=document.getElementById("hero-sec");

var count=0;

slidebtnright.addEventListener("click",()=>{
    count=count+1;
   
     if(count===0){
        herosec.style.backgroundImage="url('heroback.jpg')";
        }
   if(count===1){
    herosec.style.transform="translateX('100%')";
   herosec.style.backgroundImage="url('images/heroback1.jpg')";
   }
   else if(count===2){
    herosec.style.backgroundImage="url('images/heroback2.jpg')";
    }
   else if(count===3){
        herosec.style.backgroundImage="url('images/heroback3.jpg')";
        }
       else if(count===4){
            herosec.style.backgroundImage="url('images/heroback4.jpg')";
            }
            if(count===5){
                herosec.style.backgroundImage="url('images/heroback5.jpg')";
                }
                if(count>=5){
                    count=5;
                }
                console.log("count =",count);
})


slidebtnleft.addEventListener("click",()=>{
    count=count-1;
    
    if(count===0){
        herosec.style.backgroundImage="url('images/heroback.jpg')";
        }
   if(count===1){
   herosec.style.backgroundImage="url('images/heroback1.jpg')";
   }
   else if(count===2){
    herosec.style.backgroundImage="url('images/heroback2.jpg')";
    }
   else if(count===3){
        herosec.style.backgroundImage="url('images/heroback3.jpg')";
        }
       else if(count===4){
            herosec.style.backgroundImage="url('images/heroback4.jpg')";
            }
            if(count===5){
                herosec.style.backgroundImage="url('images/heroback5.jpg')";
                }
                if(count<=0){
                    count=0;
                }
                console.log("count =",count);
})


