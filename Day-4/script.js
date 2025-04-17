//                                                    For Loop

for (let j=1; j<=9;j++){
    console.log("my name is Prashant tomar",j);
}

y=3
for(z=1;z<=10;z++)
    console.log(`${y}*${z}=${y*z}`)


for (let m=1; m<=5; m++){
   let pattern="";
   for(let n =1; n<=m; n++){
    pattern += "*" + "";
}
    console.log(pattern);
}


for(let i=1; i<=5;i++){
    console.log("my name is navya singh",i);
}


for(let a=5;a>=1;a--)
{
   let pattern="";
   for(let b=1;b<=a;b++){
      pattern = pattern + "*";
}
console.log(pattern);
}


for(let i=1; i<=3;i++){
    console.log("my name is aman singh",i);
}


let p,q,e, pattern,n=5;
for( p=1;p<=n;p++){
    pattern="";
    for( q=1;q<=n-p;q++){
        pattern+=" ";
    }
    for(e=1;e<=p; e++){
        pattern+= "*";
    }
    console.log(pattern);
}


for(let i=5; i<=10;i++){
    console.log("my name is karan singh",i);
}


let c,d,patterns,s=5;
for( c=1;c<=s;c++){
    patterns="";
    for( d=1;d<=s;d++){
        if(d<=c-1){
         patterns+=" ";
        } else{
            patterns+="*";
        }
    }
    console.log(patterns);
}


k=0;
while(k<5){
    console.log("the number is",k);
    k++;
}


//                                                    Do While
let l=1;
do{
    console.log("value is",l);
    l++;
}
while(l<=10);
 

//                                                      For In
const student={
    name:"Rahul",
    class:7,
    age:14,
}
for(let key in student){
    console.log(`${key}=${student[key]}`);
}

//                                                       For Of
 
var set = new Set([1, 2, 3, 4, 5, 6]);
for (var value of set) {
  console.log(value);
}











