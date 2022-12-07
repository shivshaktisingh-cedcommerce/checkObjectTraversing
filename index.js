let str = "abcaabca";
var i;
var temp=[];
var count = 0 ;
let flag = true;
function find(){
    for(i = 1;i<str.length;i++){
        if(str[0]===str[i]){
            if(str.length%i===0){
                check(i)
                }
             }
    }
}
 function check(ind){
    let j = 0;
   while(j<str.length){
    temp.push(str.substring( j , j+ind))
    j= j+ind;
   }
   let x = temp[0];
   count = 0;
   temp.map((item)=>{
    if(x===item){
        count = count + 1;
    }
    else{
        temp = [];    
    }
   })
   if(temp.length===0){
    console.log(false)
   }
   if(temp.length>0){
    console.log(count)
    console.log(temp)
   }
 }