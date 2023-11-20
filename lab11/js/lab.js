/* lab.js : This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
 * requirements : jQuery must be loaded for this script to work.
 * Author : Nour Gabsi <ngabsi@ucsc.edu>
 * Date : November 20 2023
 */

// if the js is working, it will say so in console
console.log("JS is working");
// if still not working, it's smt else

$(document).ready(function(){
  // if button is activated, it will say so in console

  // anagram function
function anagram(inputString) {
  const userName = $("#input").val();
  console.log("userName = ", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);
  return nameSorted;
}

console.log("Button clicked!");
$("#my-button").click(function(){
  const userName = $("#input").val();
  var name = anagram(userName);
  console.log("Prompt returned: " + name);
  $("#title").html("Hello, " + name + "!" + 
  "<p class='size'>(Is that Correct?)</p>");
})
});