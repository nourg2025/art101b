/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 3 October
 * License: Public Domain
 */

housesArray = [
    {
        title: "Gryffindor",
        text: "Gryffindor emphasizes qualities such as bravery, daring, nerve, and chivalry. Individuals sorted into this house may not always be universally recognized brave, yet they consistently opt for the morally correct course of action regardless of potential repercussions. Gryffindor stands out as the most favored house, with many Potterheads aspiring to be part of it, irrespective of whether it aligns with their inherent qualities."
    },
    {
        title: "Hufflepuff",
        text: "A Hufflepuff values 'hard work, dedication, patience, loyalty, and fair play.' They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house, and many Potterheads treat being sorted into Hufflepuff as worse than getting kissed by a dementor."
    },
    {
        title: "Ravenclaw",
        text: "Ravenclaws value intelligence, knowledge, and wit. Often referred to as the intellectual elite of Hogwarts, they possess a unique form of prowess. Instead of relying on a wand to disarm, their words have the power to cut to the bone. Known for their brilliance, resourcefulness, creativity, and cleverness, Ravenclaws are regarded as excellent, and most Potterheads find being sorted into Ravenclaw quite acceptable."
    },
    {
        title: "Slytherin",
        text: "Slytherin prioritizes ambition, cunning, and resourcefulness, embodying a sly and clever approach to achieving their goals. They don't rely on bold tactics to get what they want. While often stereotyped as the bullies and villains of Hogwarts, it's important to note the numerous accomplished Slytherin alums. Despite the prevalent focus on the negative aspects, many outstanding individuals emerged from Slytherin."
    },
    {
        title: "Grufflepuff (Gryffindor + Hufflepuff)",
        text: "Grufflepuffs exhibit bravery, using their courageous qualities to impact others positively. They are diligent, unafraid to express their opinions and highly regard honesty, goodness, kindness, and love. Being a Grufflepuff is aspiring, as these individuals uphold elevated standards and are remarkable in every aspect."
    },
    {
        title: "Ravendor (Ravenclaw + Gryffindor)",
        text: "A Ravendor fearlessly explores intellectual territories that others may shy away from. They engage fearlessly in philosophical debates and discussions on controversial subjects. While they exude confidence, they maintain an open-minded and learning-oriented approach. Their intelligence is evident, yet they avoid being intellectual snobs. Despite their academic responsibilities, they willingly assist others with their homework. Among the houses, Ravendors are exceptionally skilled at public speaking."
    },
    {
        title: "Slyffindor (Slytherin + Gryffindor)",
        text: "Contrary to the expectation that Slyffindors are in a perpetual struggle between good and evil, this is not always true. They are driven and unafraid to take the necessary steps to achieve their goals. Exceptional in the realm of business, Slyffindors achieve high levels of success. They embody the essence of ambiverts, possessing both charm and charisma that aid them in attaining their desires, yet they also recognize the value of quiet moments. While some may grapple with internal conflicts between darkness and light, many Slyffindors are remarkable individuals."
    },
    {
        title: "Ravenpuff (Ravenclaw + Hufflepuff)",
        text: "These individuals can be spotted in the library, dedicated to their studies around the clock. Their determination extends to excelling in various areas such as art, music, academics, and sports. Their drive is not to outshine others but to consistently improve themselves. Occasionally, their pursuit of greatness may lead them to go overboard, and setbacks can be disheartening. Nevertheless, their exceptional reliability and proficiency in multiple fields make them valuable."
    },
    {
        title: "Raverin (Ravenclaw + Slytherin)",
        text: "Crossing paths with a Raverin? Proceed with caution. They boast intelligence, wit, creativity, and a sly, ambitious nature capable of being quite ruthless. Their cunning extends to knowing how to handle situations in the most harmful manner, disguising it as an accident. However, it's important to note that not all Raverins are malevolent; consider Sherlock Holmes, a Raverin who employs his sly intellect for noble purposes. While he may occasionally rub people the wrong way, he's undeniably an impressive individual. The path a Raverin takes is a personal choice, and it's up to you to weigh the consequences of challenging them, considering the potential repercussions they might unleash."
    },
    {
        title: "Slytherpuff (Hufflepuff + Slytherin)",
        text: "Slytherpuffs can be considered the 'positive Slytherins.' Their ambition is paired with strong moral principles that serve as a foundation for their character. They employ their resourcefulness and ambition not just for personal gain but to assist others, engage in benevolent deeds, and promote kindness. Picture them as individuals who might initiate non-profit organizations, exemplifying some of the finest qualities. It's easy to envision them forming close bonds with Grufflepuffs."
     }
]

creditHTML = '<div class="credits">Hogwarts house descriptions courtesy of <a href="https://iamjustdandi.wordpress.com/2015/11/06/those-in-between-hogwarts-houses/">iamjustdandi</a></div>';

introHTML = '<div class="stage-direction">The Sorting Hat sings his song:</div>'


// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHatLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

// take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

// Three pure javascript functions to manipulate classes
// from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
//
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

// Given a name, hash the string, and
// return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHatHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % housesArray.length;
  return housesArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var houseObj = sortingHatHash(name);
  // output to output div (adding some text and HTML around the results)
  newText = "<h2>" + houseObj.title + "!</h2>" +
          introHTML +
          "<p>\"" + houseObj.text + "\"</p>" +
          creditHTML;
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("tail-box"), "hidden");
})

var myInput = document.getElementById("input");
myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("tail-box"), "hidden");
});

// given a number, return a Hogwart's houses
//
// function getHouse(num){
//   // get the remainer divided by 4 of the length
//   var remainder = num % 4;
//   // create an if else to show house
//   if (remainder == 0) {
//     var str = "Gryffindor";
//   } else if (remainder == 1) {
//     var str = "Ravenclaw";
//   } else if (remainder == 2) {
//     var str = "Hufflepuff";
//   } else if (remainder == 3) {
//     var str = "Slytherin";
//   }
//   return str;
// }
//
//
// THIS IS THE ONE WE DID IN CLASS
//
// // attach click handler to submit button
// $("#button").click(function(){
//   // get the value in the #input text box, asign to a varaiable name
//   var name = $("#input").val()
//   console.log(name);
//   // get the length of the name
//   var nameLength = name.length;
//   console.log(nameLength);
//   // get the house
//   var house = getHouse(nameLength);
//   console.log(house);
//   // add house to output div
//   $("#output").html("<h1>" + house + "</h1>");
// })