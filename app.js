// console.log('for loops');




             //  | For Loops |

        //  Question & Answer



//   Q.No-01 : Write a program to display the message “Hello World” 5 times
//             in your browser using for loop.     

//   Ans.No-01 :  

// const hero = document.querySelector('#hero')

// for(let i = 0 ; i < 5 ; i++){

//     console.log(i)

//     hero.innerHTML += `<p>${"hello world"}</p>`
    
// }









//   Q.No-02 : Write a program to print numeric counting from 1 to 10.

//    Ans.No-02 :

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i)
// }












//   Q.No-03 : Write a program to print multiplication table of any number
//               using for loop. Table number & length should be taken as an
//               input from user


//    Ans.No-03 :

// const input = prompt('enter your table number');
// const times = prompt('how many times you want');


// for(let i = 1 ; i <= times ; i++){
//     console.log(`${input} * ${i} = ${input * i}`)
// }














//   Q.No-04 : You have an array
//             A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
//             Write each element on new line with the help of for loop
  
      
 
//    Ans.No-04 : 

// const arr = ["Nokia",'Samsung', "Apple", "Sony", "Huawei"];
// const div = document.querySelector('#hero');


// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);

//     div.innerHTML += `<p>${arr[i]}</p>`
// }












//   Q.No-05 : Write a program to print items of the following array        using for loop:fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


 
//   Ans.No-05 :


// const fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawberry'];
// const div = document.querySelector('#hero');


// for(let i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i])

//     div.innerHTML += `<p>${fruits[i]}</p>`
// }















//   Q.No-06 : Write a program to initialize an array of N items by using
//             prompt. Where N is number of items as entered by the user. 



//   Ans.No-06 :



// function getArray(){
//      const input = prompt('enter number of items as entered')
//      if(isNaN(input) || input <= 0){
//           alert('Please enter a valid positive integer.')
//           return;
//      }
//      const arr = []
//      for(let i = 0 ; i <= input.length ; i++){
//           var item = prompt(' enter item ' + (i + 1) + ' : ');
//           arr.push(item);
//      }
     
//      alert(' array initialize with ' + input + ' items ' + arr);
// }

// getArray()













 
//   Q.No-07 : Generate the following series in your browser. See example
//              output.
//              a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//              b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//              c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//              d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//              e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




//   Ans.No-07 : 

 //  counting

// const counting = document.querySelector('#count');

// for(let i = 0 ; i <= 15 ; i++){
//      console.log(i)
//      counting.innerHTML += `<li>${i}</li>`
// }




   //     Reverse counting:


// const Reverse = document.querySelector('#reverse');

// for(let i = 10 ; i >= 1 ; i--){
//      console.log(i)
//      Reverse.innerHTML += `<li>${i}</li>`
// }




  //    Even Number


// const even = document.querySelector('#even');

// for(let i = 0 ; i <= 20 ; i +=2){
//      console.log(i)
//      even.innerHTML += `<li>${i}</li>`
// }


  
 //     odd number




// const odd = document.querySelector('#odd');

// for(let i = 1 ; i <= 19 ; i +=2){
//      console.log(i)
//      odd.innerHTML += `<li>${i}</li>`
// }



//      series number




// const series = document.querySelector('#series');

// for(let i = 1 ; i <= 10 ; i ++){
//      console.log(i)
//      series.innerHTML += 2 * i + ' k ';
// }




































































































































































































































