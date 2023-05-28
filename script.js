
const apiKey = "GDyXb9JPhd6P9zlVgCzQSBt24pKrTSfyQqoTUi0fzS5jQ7AcpPOrwh7B";
const apiUrl = 'https://api.pexels.com/v1';
let container = document.getElementById("portrait");
container.classList.add("container", "d-flex")
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
   let card = document.createElement("div")
   card.classList.add("card", "col-sm-6", "col-md-4", "col-lg-2", "m-2", "bg-dark", "mt-4")
   let title = document.createElement("p");
   title.innerText = photo.photographer;
   title.classList.add("text-light");
   console.log(photo);
   let img = document.createElement("img");
   img.classList.add("immage-fluid");
   img.src = photo.src.medium
   let description = document.createElement("p");
   description.innerText = photo.alt;
   description.classList.add("text-light");
   card.append(description);
   card.append(title);
   card.append(img);
   return card })
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