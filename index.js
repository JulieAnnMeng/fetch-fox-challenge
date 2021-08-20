/*
 DELIVERABLE 1: When a user clicks on the button, display a picture of a fox using the fox API (https://randomfox.ca/floof/)
This deliverable will require you to combine event handling, communication with the server (fetch), and DOM manipulation
*/
const FOX_BASE_URL = 'https://randomfox.ca/floof/';

document.addEventListener("DOMContentLoaded", () => {
    fetch(FOX_BASE_URL) 
    .then((response) => response.json())
    .then((foxData) => {
        const foxImg = foxData.image;
        const foxURL = foxData.link;
        foxBoxImg(foxImg);
    })
})

function foxBoxImg(image){
    document.querySelector('#get-fox-btn').addEventListener('click', () => {
        const foxBox = document.querySelectorAll('img')[0];
        //console.log(foxBox);
        foxBox.src = image;
        foxBox.a
    })
}


/*
DELIVERABLE 2: Start the json-server so that it is able to serve the data from the db.json file (json-server --watch db.json).
 Make a fetch request to "http://localhost:3000/foxes" to get an array of objects with fox data! For each object, create a <li></li>
element that displays the fox's name. The li element should also save the fox's ID. You can append the li element to the ul#list-of-foxes
element.
*/
const LOCAL_BASE_URL = 'http://localhost:3000/foxes';

document.addEventListener("DOMContentLoaded", () => {
    fetch(LOCAL_BASE_URL) 
    .then((response) => response.json())
    .then((localFoxes) => {
        //console.log(localFoxes);
        localFoxes.forEach(fox => (foxList(fox)));
    })
})



function foxList(obj){
    const listBox = document.querySelector('#list-of-foxes');
    const createList = document.createElement('li');

    createList.textContent = obj.name;
    createList.setAttribute('id', obj.id)

    createList.addEventListener('click', (e) => {
        fetch(LOCAL_BASE_URL + `/${obj.id}`) 
        .then((response) => response.json())
        .then((fox) => {
            const currentFox = document.querySelector('.fox-name');
            const currentFoxImg = document.querySelectorAll('img')[1];
            currentFox.textContent = fox.name;
            currentFoxImg.src = fox.image;
    })})

    listBox.appendChild(createList);
}


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

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const foxName = document.querySelectorAll('input')[0];
    const foxImg = document.querySelectorAll('input')[1];
    const foxData = {name: foxName.value, image: foxImg.value};
    
    fetch(LOCAL_BASE_URL, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(foxData),
    })
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch((error) => {console.error('error', error)})

    foxList(foxData);


})