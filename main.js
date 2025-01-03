
 
let heading = document.querySelector("#tiro")
let button1 = document.querySelector("#btnIncrement")
let button2 = document.querySelector("#btnReset")


 let value =0



 button1.addEventListener("click", function(){
    value ++
    heading.innerHTML = value

    if(value == 1 ){
        document.body.style.backgroundColor = "red"
     }
 

     else if(value == 2 ){
        document.body.style.backgroundColor = "blue"
     }


     else if(value == 3 ){
        document.body.style.backgroundColor = "yellow"
     }


     else if(value == 4 ){
        document.body.style.backgroundColor = "green"
     }


     
     else if(value == 5 ){
        document.body.style.backgroundColor = "orange"
     }

   else{
    document.body.style.backgroundColor = "white"
   }
 })


// value = 0
 
 button2.addEventListener("click", function(){
    value = 0
    heading.innerHTML = value
 })









