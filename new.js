// var globalArr=[2000 , 500 , 200 , 100 , 50 , 20 , 10 , 5 , 2 ,1];
// function find(){
//     let tempArr = [];
//     var temp = Number(document.getElementById('num').value);
//     let i = 0;    
//     while(i<10){
//          if(parseInt(temp/globalArr[i])===0){
//             i++;
//             continue;
//          }
//          if(parseInt(temp/globalArr[i])!==0){
//             tempArr.push({[globalArr[i]]:parseInt(temp/globalArr[i])})
//             temp = temp % globalArr[i];
//             i++;
//          }
//     }
//      console.log(tempArr)
// }

 function find(){
   let obj = {
      name:{
         fname:'dsfds' ,
         lname:'rfsdef',
      } ,
      comnpany:{
         previousCompany:['akjsdg' , 'Amazon'] ,
         currentCompany:'sdfsdf' ,
         nextCompanies:['Meta' , 'xcv']
      } ,
      age:23 ,
      skills:['React' ,'cyber']
   }
 
   const makeData = (obj) =>{
      let res = {}
      Object.keys(obj).map(item =>{
         if(typeof(obj[item]) === 'object' && !Array.isArray(obj[item])){
            let t = makeData(obj[item])
            Object.keys(t).map(i => {
               res[`${item}.${i}`] = t[i]
            })
         }
         else {
            res[item] = obj[item]
         }
      })
      return res
   }
   //   let x = makeData(obj)
   // console.log(x)
   
   
// for (let property of person) {
//    console.log(property)
// }

 }


