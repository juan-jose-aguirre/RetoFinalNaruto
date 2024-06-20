

const urlBase = "https://narutodb.xyz/api/character?page=1&limit=1431"

function getData(done) {
    const result = fetch(urlBase);
    result
        .then(response => response.json())
        .then(datos => {
            done(datos)
        });
}

let img = document.getElementById("img")

idDetails = window.location.href
idDetails = new URL(idDetails).searchParams.get("id")
console.log(idDetails);

getData(datos => {
    console.log(datos);
    let events = datos.characters
    console.log(events);
    let tarjeta = events.filter(events => events.id == idDetails)
    tarjeta.forEach(events => {
        img.innerHTML = `<img id="imgs" src="${events.images[0]}" class="card-img-top" alt="${events.name}">`
        let name = document.getElementById("name").innerHTML = `${events.name}`
        let jutsu = document.getElementById("jutsu").innerHTML = `${events.jutsu}`
        let affiliation = document.getElementById("affiliation").innerHTML = `${events.personal.affiliation}`
        let sex = document.getElementById("sex").innerHTML = `${events.personal.sex}`
        let clan = document.getElementById("clan").innerHTML = ` ${events.personal.clan} `
        let status = document.getElementById("status").innerHTML = ` ${events.personal.status} `
        let estimate = document.getElementById("estimate")
        let assistance = document.getElementById("assistance")
        let price = document.getElementById("price").innerHTML = `${events.price}`
        if (events.assistance != null || events.assistance != undefined) {

            assistance.innerHTML = `Assistance:<small class="text-body-secondary"> ${events.assistance} </small> `
            estimate.style.display = "none";

        } else {
            estimate.innerHTML = `Estimate:<small class="text-body-secondary"> ${events.estimate} </small> `
            assistance.style.display = "none";

        }
    })

 

    console.log(idDetails);
    console.log(tarjeta);

    
})
