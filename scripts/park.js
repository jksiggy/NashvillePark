


fetch("https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json")
.then(reparks => reparks.json())
.then(parsedParks => {
    console.log(parsedParks)
   let parks = parsedParks.parks;
   parks.forEach(element => {
  
let parksContainer = document.querySelector(".parksContainer")
    if (element.visited == true) {
        const parkHTML = `
        <article class="visited">
        <h3>${element.name}</h3>
        <p>${element.state}</p>
        </article>`;
        
        parksContainer.innerHTML += parkHTML;

    } else {
        const parkHTML =`
        <article class="not">
        <h3>${element.name}</h3>
        <p>${element.state}</p>
        </article>`;

        parksContainer.innerHTML += parkHTML;
    }
   })
});
   
   
   