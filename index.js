/*
 DELIVERABLE 1: When a user clicks on the button, display a picture of a fox using the fox API (https://randomfox.ca/floof/)
This deliverable will require you to combine event handling, communication with the server (fetch), and DOM manipulation
*/
const BASE_URL = 'https://randomfox.ca/floof/';

document.addEventListener("DOMContentLoaded", () => {
    fetch(BASE_URL) 
    .then((response) => response.json())
    .then((foxData) => {
        const foxImg = foxData.image;
        const foxURL = foxData.link;
        foxBoxImg(foxImg, foxURL);
    })
})

function foxBoxImg(image, URL){
    document.querySelector('#get-fox-btn').addEventListener('click', () => {
        const foxBox = document.querySelectorAll('img')[0];
        console.log(foxBox);
        foxBox.src = image;
    })
    
}


/*
DELIVERABLE 2: Start the json-server so that it is able to serve the data from the db.json file (json-server --watch db.json).
 Make a fetch request to "http://localhost:3000/foxes" to get an array of objects with fox data! For each object, create a <li></li>
element that displays the fox's name. The li element should also save the fox's ID. You can append the li element to the ul#list-of-foxes
element.
*/



/*
DELIVERABLE 3: When a user clicks on a li, get more information about the fox that the li represents by making
a fetch request to `http://localhost:3000/foxes/${foxId}` where foxId is the id of the fox that the li represents. You should get back an object
with information about one fox. Use the data inside of this object to update the img element and li element in the DOM in
the div#featured-fox section under the deliverable 2 & 3section.
*/


/*
DELIVERABLE 4: When a user submits the form, get the user input and add the new fox to the list of foxes in the
 Deliverable 2 & 3section. So this requires creating an <li></li> element that displays the new fox's name and appending it
 to the ul#list-of-foxes element. When you refresh the page, this won't persist, but that's alright for now! You need to learn about
 POST requests in order to make this persist. POST requests will not be on the code challenge. (:
*/