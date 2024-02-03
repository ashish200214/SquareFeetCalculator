const result = document.getElementById("ans")



const btn = document.getElementById("calculate-btn");
btn.addEventListener("click",function(){
    
    //most important part is to select the radioBtn selected by users and this is done by below line
    const selection = document.querySelector('input[name="unit"]:checked');

    //converting the entered value into float.
    const len = parseFloat(document.getElementById("length").value)
    const wid = parseFloat(document.getElementById("width").value)
    const rate = parseFloat(document.getElementById("rate").value)
    console.log(selection)


    //here checking condition if it is true then we are moving to the calculation part.
    if(selection!==null && (!isNaN(len)) && (!isNaN(wid)) && (!isNaN(rate)) ){
        
        //here we are checking which element is selected by the user from radioBtn

        if(selection.id==="inch"){
            inchToFeet(len,wid,rate);
        }
        if(selection.id==="mm"){
            mmToFeet(len,wid,rate);
        }
     }
     else{
        const error = document.getElementById("error")
        error.textContent="Please Enter All the Fields"

        setTimeout(function(){
            error.textContent=""
        },3000)
     }
})

function inchToFeet(len,wid,rate){

    let totalSqfeet = parseFloat((len*wid)/144).toFixed(2);
    let price = parseFloat(totalSqfeet*rate).toFixed(2)
    result.innerHTML = "The total square feet is "+totalSqfeet+" and the total price is "+price;

}

function mmToFeet(len,wid,rate){
    let totalSqfeet = parseFloat((len*wid)/92900).toFixed(2);
    
    let price = parseFloat(totalSqfeet*rate).toFixed(2)
    result.innerHTML = "The total square feet is "+totalSqfeet+" and the total price is "+price;

}

// const mode_btn= document.getElementById("btn-mode")


// const hiddenDiv = document.getElementById("hovering")

// console.log(mode_btn)
// console.log(hiddenDiv)
// mode_btn.addEventListener("mouseover",function(){
   
//     hiddenDiv.style.display="block";
// })

// mode_btn.addEventListener("mouseout",function(){
//     hiddenDiv.style.display="none";
// })