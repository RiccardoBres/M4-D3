
const apiKey = "GDyXb9JPhd6P9zlVgCzQSBt24pKrTSfyQqoTUi0fzS5jQ7AcpPOrwh7B";
const apiUrl = 'https://api.pexels.com/v1';
let container = document.getElementById("portrait");
let button = document.getElementById("button")



function search(buttonValue) {
    //let buttonValue = document.getElementById("buttonValue").value.toLowerCase();
    
    fetch(apiUrl + '/search?query=' + buttonValue, { headers: { Authorization: apiKey } })
    .then((data)=> data.json()
    )
    .then((response)=> { append(response.photos)})
    .catch((err) => {console.log(err)})
} 

//search("people")
  
function append(photos){
   container.innerHTML = ""
   let imgEl = photos.map((photo) =>{
   let img = document.createElement("img")
   img.src = photo.src.medium
   return img })
   container.append(...imgEl)} 

button.addEventListener("click", function () {
    let buttonValue = document.getElementById("buttonValue").value.toLowerCase();
    search(buttonValue);
})

 /* for (const photo of photos) {
        let img = document.createElement("img");
        img.src = photo.src.medium;
        container.appendChild(img);
    } */

/*const apiURL = 'https://api.pexels.com/v1';
const APIKey = "ynXusvPujxQx7GGvjETwfOkmxpW53o03osOAQIFeGpYl8ZnL9AgCXvth"

let portrait = document.getElementById('portrait');

let button = document.getElementById("button");

function pictures() {
    
    let queryURL = apiURL + '/search?query=house';
    
    fetch(queryURL, { headers: { Authorization: APIKey } })
        .then((response) => response.json())
        .then((res) => pics(res.photos))
        .catch((error) => console.error(error));
}

function pics(input) {
   
    
    for (const photo of input) {
        console.log(input);
        let img = document.createElement('img');
        img.src = photo.src.medium;
        portrait.appendChild(img);
    }
}


pictures()
*/