//1
let q = 0;
let w = -1;
let e = 4;

//q
let sort;
if(q >= w && a >= e){
    if(w >= e){
    sort = [q,w,e];
}else{
    sort = [q,w,e];
} 

//w
}else if (w >= q && w >= e){
    if(q >= e){
        sort = [w, q, e];
    }else{
        sort = [w, e, q];
}
  
//e
}else{
if(q>= w){
    sort = [e, q, w]
}else{
    sort = [e, w, q];
}

}
console.log(sort);


//2
let a = -5;
let s = -2;
let d = -6;
let f = 0;
let g = -1;
let largest = a;
if(f > largest){
largest = f;
}
console.log(largest);



//3
let Fizzbuzz = 0;
let output = "";
for(let i = 1; i <= 100; i++){
 if(i % 3 === 0 && i % 5 === 0){
  output = "FizzBuzz";
 } else if (i % 3 === 0){
  output = "Fizz";
 } else if (i % 5 === 0){
  output = "Buzz";
 } else {
    output = i;
 }
}

console.log(output);



