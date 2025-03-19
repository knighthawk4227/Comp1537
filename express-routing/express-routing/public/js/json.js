
document.addEventListener("DOMContentLoaded", function() {
  console.log("json.js is loaded");
  var ourRequest = new XMLHttpRequest(); 

  ourRequest.open("GET", "/app/data/recipe.json", true);
  //open json file path
  //wait for everything to load
  ourRequest.onload = function() {
    console.log("onload is working");
    var data = JSON.parse(ourRequest.responseText);
    console.log(data);
    const recipeList = document.querySelector('#section-b ul');
    /*Gets the first instance of this item 
    This is okay since I have only one template (I think man IDK I just want to go to bed) */
    const template = document.querySelector('template');
    
    if (!template) {
      console.error("SHIT IS NOT FOUND");
    }

    data.recipes.forEach( recipe => {
      //Clone all the things inside my template
      const clone = template.content.cloneNode(true);

      clone.querySelector('.card-title').textContent = recipe.name;
      clone.querySelector('.ingredients').textContent = recipe.ingredients.join(', ');
      //.join converts to string and adds comma space for the instructions
      clone.querySelector('.instructions').textContent = recipe.instructions.join(' ');
      

      //add template to section we want
      recipeList.appendChild(clone);
    })
  };


  ourRequest.send();
});











// var btn = document.getElementById("btn");
// var cont = document.getElementById("animal-info");
// var pageCount = 1;

// btn.addEventListener("click", function() {

  
//   //POST would be to send data 
//   ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCount + '.json');
//   //Go to this URL 
//   ourRequest.onload = function() {
//     //execute a script once a web page has completely loaded all content (
//     //returns the text received from a server following a request being sent
//     var ourData = JSON.parse(ourRequest.responseText);
//     //parse data at link 
    // addHtml(ourData);
//   };
//   //once data has loaded 
//   ourRequest.send();
//   pageCount++;
//   if (pageCount > 3) {
//     btn.classList.add("hide-me");
//   }
  
// });
// objects and arrays storing data 

//downloads json data

//function to create and add html 

// function addHtml(data) {
//   var htmlString = "";
//   //set an empty string 

//   for (i = 0; i < data.length; i++) {
//     htmlString += "<p>" + data[i].name + " is a " + data[i].species + " their likes are " 
//     + data[i].foods.likes + " and their dislikes are " + data[i].foods.dislikes + ".</p>"
//   }
//   cont.insertAdjacentHTML('beforeend', htmlString);
// }

// deleted cool json parsing stuff cause I can not use it since life hates me 