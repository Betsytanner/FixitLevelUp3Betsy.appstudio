/*
0. have the user choose car or home
0.5. if choose car then computes the monthly car payments - by calling car function - IF 
0.75 - if choose house then select 15 or 30 years - and call home fxn - ELSE 
use an if else statement
1. user enters princple amt, interest, and months
2. click the enter button
3. calculate the monthly payment using user data
     use the equation - use a function
     call the function with the user data
     func returns answer
4. output answer to user - label 

*/
//calculate the monthly payment using user data - creating a standard fxn
//the monthly payment was given
function carLoanPayment(P, r, n) {
  return  monthlyPayment = (P * (r*((1+r)**n))/(((1+r)**n)-1))
}
//when you click on enter - this is what will happen
//created a variable so we could put it as a message
//do all if else in button enter 

if (btnCar.onclick=function()) {
let carLoanVar = carLoanPayment(inptPrince.value, inptInterest.value, inptMonths.value)
  lblMsg.value = "your monthly payment is" + carLoanVar 
}
//elseif the user 30 house 
elseif (btn30.onclick=function() {
let house30 = carLoanPayment(inptPrince.value, inptInterest.value, btn30.value)
  lblMsg.value = "your monthly payment is" + house30 
}
//if user clicks house 
/
elseif btnHouse.onclick=function() {
let houseLoanVar = carLoanPayment(inptPrince.value, inptInterest.value, inptMonths.value)
  lblMsg.value = "please click 30 or 15" + houseLoanVar 
}


//if the user clicks 15 years 

elseif (btn15.onclick=function() {
let house15 = carLoanPayment(inptPrince.value, inptInterest.value, btn15.value)
  lblMsg.value = "your monthly payment is" + house15

}

else {
  lbl.Msg.value = "please try again"
}


