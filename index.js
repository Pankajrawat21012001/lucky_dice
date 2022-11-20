//RANDOMLY CHANGING THE FIRST VALUE
document.querySelector(".result h3").textContent="";

var randomNumber1 =Math.ceil(Math.random()*6);
var source1="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",source1);
// console.log("randomNumber1:- "+randomNumber1);

//RANDOMLY CHANGING THE SECOND VALUE
var randomNumber2=Math.ceil(Math.random()*6);
var source2='dice'+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",source2);
// console.log("randomNumber2:- "+randomNumber2);

if (randomNumber1>randomNumber2) {
  document.querySelector(".result h3").textContent="🚩Player 1 Won";
} else if (randomNumber2>randomNumber1){
  document.querySelector(".result h3").textContent="Player 2 Won🚩";
} else if (randomNumber2===randomNumber1){
  document.querySelector(".result h3").textContent="🚩Draw🚩";
}else{
  document.querySelector(".result h3").textContent="";
}
