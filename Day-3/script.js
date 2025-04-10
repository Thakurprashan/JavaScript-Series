//                                                         Decision Making and Conditional Statement  


//                                                               if-else statement 

let x=5;
if(x>10){
  console.log("x is greater than 10");
} 
else{
  console.log("x is less than 10");
}


let num1=26;
let num2=13;
if (num2%num1){
  console.log("true");
}
else{
console.log("false")
}


let num3=48;
if (num3 % 2==0){
  console.log("true");
} else {
  console.log("false")
}


//                                                                  Prompt

let num4=prompt("enter the number");
if (num4 % 2==0){
  console.log("true");
} else {
  console.log("false")
}


//                                                              Switch Statement 
Q1.
  
let marks=prompt("enter the marks");

let grade;

switch(true)
{
  case marks>=41 && marks<=50:
    grade="A";
    break;
  case marks>=31 && marks<=40:
    grade="B";
    break;
  case marks>=21 && marks<=30:
    grade="C";
    break;
  case marks>=11 && marks<=20:
    grade="D";
    break;
  case marks>=0 && marks<=10:
      grade="E";
      break;
  default:"invalid marks" 
  }
  console.log(grade); 



  //                                                   Q2 Prints the Day of week...


  let num=prompt("enter the days");

  let days;

  switch(true){
    case num==1:
    days="mondays";
    break;
    case num==2:
    days="tuesdays";
    break;
    case num==3:
    days="wednesday";
    break;
    case num==4:
    days="thursday";
    break;
    case num==5:
    days="friday";
    break;
    case num==6:
    days="Saturday";
    break;
    case num==7:
    days="Sunday";
    break;
  }
console.log(days)



































