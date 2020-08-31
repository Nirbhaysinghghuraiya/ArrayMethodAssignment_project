//====== pop method ===//
 
  let names = ["Nirbhay" , "Rajeev", "Bhavani" , "Manoj"];
  document.write(names+ "<br>"); // Nirbhay,Rajeev,Bhavani,Manoj ----> Before applying method
     names.pop(); 
     document.write(names+ "<br>");  // Nirbhay,Rajeev,Bhavani ----> After applying method
   

     var x = names.pop();
     document.write(x+ "<br>" ); //  Bhavani
    

     //==============pop() ends here===//


    //==========push() starts here=====//

    let users = ["Nirbhay" , "Rajeev", "Bhavani" , "Manoj"];
         users.push("Rahul"); 
       document.write(users+ "<br"); // Nirbhay,Rajeev,Bhavani,Manoj,Rahul

    let animals = ["Lion" ,"Tiger" ,"Chheetah" , "Sher"];
      animals.push("Bear","horse", "cow");
      document.write(animals+ "<br"); // Lion,Tiger,Chheetah,Sher,Bear,horse,cow


      //==========push() ends here=====//
    
  //========== Array.prototype.shift() starts here==============//

      let employees = ["Nirbhay" , "Rajeev", "Bhavani" , "Manoj"];

         document.write(employees.length+ "<br>"); // 4

        document.write(employees+ "<br>"); // Nirbhay,Rajeev,Bhavani,Manoj ----> Before applying method
      
        employees.shift(); 
       
        document.write(employees+ "<br>");  // Rajeev,Bhavani,Manoj ----> After applying method
   
        document.write(employees.length); // 3



     var games = ["Cricket", "hockey", "Football"]
         
     
     document.write(games.length+ "<br>"); // 3

     document.write(games+ "<br>"); // Cricket,hockey,Football ----> Before applying method
   
     games.shift(); 
    
     document.write(games+ "<br>");  // hockey,Football ----> After applying method

     document.write(games.length); // 2



//========== Array.prototype.shift() ends here==============//


//========== Array.prototype.unshift() starts here==============//

let people = ["Nirbhay" , "Rajeev", "Bhavani" , "Manoj"];

document.write( people.length+ "<br>"); // 4

document.write( people+ "<br>"); // Nirbhay,Rajeev,Bhavani,Manoj ----> Before applying method

people.unshift("Sinkal"); 

document.write( people+ "<br>");  //Sinkal,Nirbhay, Rajeev,Bhavani,Manoj ----> After applying method

document.write( people.length+ "<br>"); // 5


var games = ["Cricket", "hockey", "Football"]
         
     
document.write(games.length+ "<br>"); // 3

document.write(games+ "<br>"); // Cricket,hockey,Football ----> Before applying method

games.unshift("Basketball", "Tennis"); 

document.write(games+ "<br>");  //Basketball,Tennis,Cricket,hockey,Football ----> After applying method
  

document.write(games.length+"<br>"); // 5

     //========== Array.prototype.unshift() ends here==============//
 
 
 
  //========== Array.prototype.indexof() starts here==============//
 
  let languages = [ "java","nodejs", "javascript", "python", "angular"];
     let a = languages.indexOf("javascript");  // without any specified position
              document.write(a); // 2


  var languages = [ "java","nodejs", "javascript", "python", "angular", "nodejs", "javascript", "python", "angular"];
       
  //search at a specified position
     var b = languages.indexOf("python" ,4)
                       document.write(b); // 7
         


 //========== Array.prototype.indexof() ends here==============//

    
  //========== Array.prototype.lastindexof() starts here==============//
 
  let languages = [ "java","nodejs", "javascript", "python", "angular"];
  let a = languages.lastIndexOf("javascript");  // without any specified position
           document.write(a); // 2
 
 
      var languages = [ "java","nodejs", "javascript", "python", "angular", "nodejs", "javascript", "python", "angular"];
       
      //search at a specified position
        var b = languages.lastIndexOf("python" ,4)
                    document.write(b); // 3
                    console.log(b);
 //========== Array.prototype.lastindexof() ends here==============//
 
 
          
 //========== Array.prototype.join() starts here==============//
 
 let games = ["Cricket", "hockey", "Football"];
 let stamina = games.join();
 
  console.log(stamina); // Cricket,hockey,Football
 
  let languages = [ "java","nodejs", "javascript", "python", "angular"];
  let x = languages.join(" and ");
  document.write(x+"<br>");
 
  //========== Array.prototype.join() ends here==============//
 
 
  //========== Array.prototype.splice() starts here==============//
 
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 0, "Lemon", "Kiwi");
   document.write(fruits+ "<br>");  // Banana,Orange,Lemon,Kiwi,Apple,Mango
 
 let people = ["Nirbhay" , "Rajeev", "Bhavani" , "Manoj"];
  people.splice(3, 2, "Sikal" , "Sourav" , "Vijay");
   document.write(people+ "<br>");  //Nirbhay,Rajeev,Bhavani,Sikal,Sourav,Vijay
 

   //========== Array.prototype.splice() ends here==============//
 


    //========== Array.prototype.slice() starts here==============//

    let courses = [ "java","nodejs", "javascript", "python", "angular"];
     let y = courses.slice(1, 3);
     document.write(y+ "<br>");  // nodejs,javascript
 

     function myfun(params) {
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        var z = fruits.slice(-3 , -2);
          document.write(z+ "<br>");  // Orange
     }

      //========== Array.prototype.slice() ends here==============//

   //========== Array.prototype.reverse() starts here==============//

        let courses = [ "java","nodejs", "javascript", "python", "angular"];
         courses.reverse();
         document.write(courses+ "<br>");  // angular,python,javascript,nodejs,java 
  

         function myfun1(params) {
            var fruits = ["Banana", "Orange", "Apple", "Mango"];
            var z = fruits.reverse();
              document.write(z+ "<br>");  // Mango,Apple,Orange,Banana
         }
 
 //========== Array.prototype.reverse()ends here==============//
    


 //========== Array.prototype.concat(); starts here==============//

    let games = ["Cricket", "hockey", "Football"];

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
     let s = games.concat(fruits);
     document.write(s); // Cricket,hockey,Football,Banana,Orange,Apple,Mango
     console.log(s); // ["Cricket", "hockey", "Football","Banana", "Orange", "Apple", "Mango"]

//========== Array.prototype.concat(); ends here==============//


//========== Array.prototype.sort(); starts here==============//
      

let courses = [ "java","nodejs", "javascript", "python", "angular"];
let y = courses.sort();
document.write(y+ "<br>");  // angular,java,javascript,nodejs,python


  function myfun2(params) {
    let courses = [ "java","reacts", "javascript", "python", "angular"];
    let y = courses.sort();
    document.write(y+ "<br>");  // angular,java,javascript,python,reacts

  }


  //========== Array.prototype.tostring(); starts here==============//

  let people = ["Nirbhay" , "Rajeev", "Bhavani" , "Manoj"];
  people.toString();
   document.write(people+ "<br>");  //Nirbhay,Rajeev,Bhavani,Manoj


    //========== Array.prototype.tostring(); ends here==============//


    //========== Array.prototype.forEach(); Starts here==============//

    let languages = ["Javascript", "nodejs", "python","java","c++"];

     languages.forEach(function (value, index, array) {
        console.log(index);
        console.log(value);
        console.log(array);
      });

            
   
  
       var sum = 0;
       var numbers = [65, 44, 12, 4];
          numbers.forEach(myFunction);

         function myFunction(item) {
               sum += item;
              
                };
             document.write(sum);// 125


 //========== Array.prototype.forEach(); Endss here==============//



 //========== Array.prototype.Map(); Starts here==============//


             let numbers = [56, 47, 14, 4, 2];
             let newarray = numbers.map(myFunction)
 
              function myFunction(num) {
                 return num * 5;
                           }
 
              document.write(newarray);  // 280,235,70,20,10
 



              let languages = ["Javascript", "nodejs", "python","java","c++"];

              languages.map(function (value, index, array) {
                 console.log(index);
                 console.log(value);
                 console.log(array);
               });

             
            //========== Array.prototype.Map(); Ends here==============//
        

      //========== Array.prototype.Filter(); Starts here==============//
        

            var ages = [32, 33, 16, 40];

            function checkAdult(age) {
              return age >= 18;
            }
            
            function myfun3() {
              document.write(ages.filter(checkAdult));  //32,33,40
            }


            let languages = ["java", "java", "java", "java", "java", "java", "java","nodejs", "nodejs", "python", "python"];

              let filteredContent = languages.filter((value, index, array) => {
              
                return array.indexOf(value) === index // now it is filtered
              });

              console.log(filteredContent);


     //========== Array.prototype.Filter(); Ends here==============//   


     //========== Array.prototype.reduce(); Starts here==============//  
     
     
                  let numbers = [175,25,50];
                   let result = numbers.reduce(function (previousValue,currentValue) {
                    
 
                          return (currentValue + previousValue);
                            });
 
                   console.log(numbers);
                    console.log(result);
 

                   

   
                    let numbers = [175,25,50];
                    let result = numbers.reduce(function (total,num) {
                     
  
                           return (total - num);
                             });
  
                    console.log(numbers);
                     console.log(result);
  

      //========== Array.prototype.reduce(); Ends here==============//  