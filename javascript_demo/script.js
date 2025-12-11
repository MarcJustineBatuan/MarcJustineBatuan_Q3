console.log("Hello, welcome to JavaScript!");

//change text content
document.getElementById("btnText").addEventListener("click", function() {
    document.getElementById("demo").textContent = "gege";
});

//change image source
document.getElementById("btnColor").addEventListener("click", function() {

   const div = document.getElementById("myDiv");
   div.style.color= "lightblue";

});

//hide div
document.getElementById("btnHide").addEventListener("click", function() {
    document.getElementById("myDiv").style.display = "none";

});
//show div
document.getElementById("btnShow").addEventListener("click", function() {
    document.getElementById("myDiv").style.display = "block";
});


//change image
document.getElementById("btnImage").addEventListener("click", function() {
    document.getElementById("myImage").src = "Justine111.jpg";
});


//alert
document.getElementById("btnAlert").addEventListener("click", function() {
    alert("You look a lot like my next partner."); 
    

});             

//console log

//Control Floe in Javascript
//Conditional Statements (if/else)
//Switch Statements   

//checking if the user is old enough to enter your site
const userAge = 19;
if(userAge >= 18){
    console.log("Welcome to my site!!")
}else{
    console.log("Bawal, ka dito suri")
}

//grading system
const score = 85;
if (score >= 90){
  console.log("With Honors")
}else if (score >=95){
  console.log("With High Honors")
}else if(score >= 98){
   console.log("With Highest Honors")
}

//#1 for loop
let i = 0;




 

//array java script
const cars = ["Honda", "Toyota", "Ford", "Chevrolet"];
cars[0] = "Honda";
cars[1] = "Toyota";
cars[2] = "Ford";
cars[3] = "Chevrolet";

console.log(cars.length);
cars.push("Chevrolet ");


//looping through an array
const fruits = ["Apple", "Banana", "Cherry"];
for(let j = 0; j <= fruits.length; j++){
 console.log(fruits[j]);
}


const mixedArr = [42, "Hello", true, null, 3.14];
for(let k = 0; k < mixedArr.length; k++){
 console.log(mixedArr[k]);
}


let scores = [85, 90, 78, 92, 88];
//using for loop
for(let m = 0; m < scores.length; m++){
 console.log("index ",m, ":" , scores[m]);
}

for(let score) of scores{
 console.log("Score", score);
}