/*
   function names can NOT have:
   - spaces
   - any special characters except _
   function names CAN have:
   - letters
   - numbers
   function naming convention is: firstSecondThirdFourth (called Camel Case)
*/
// function showAlert() {
//    console.log('Alert # 1');
//    console.log('Alert # 2');
//    console.log('Alert # 3');
//    console.log('Alert # 4');
// }

// function secondFunc() {
//    alert('Sarah Ahmed');
// }
function changeName() {
   //1. Get input element
  
   document.querySelector('span').innerHTML = document.querySelector('input').value;
 

}
function color () {
document.querySelector('h1').style="background-color:white"
}
// Single line comments

/*
problem statement: show user input inside heading.
1. Get input element on which user typed something.
2.Get value value of input
3. Get element something

This
is a
multi-line comment

*/

// An English paragraph has many SENTENCES. Each sentence ends with a FULL-STOP
// A Javascript code has many STATEMENTS. Each statement ends with a SEMI-COLON.

// Each JS statement is written on a separate line.