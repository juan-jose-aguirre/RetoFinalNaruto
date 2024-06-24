

const urlBase = "https://narutodb.xyz/api/character?page=1&limit=1431"

function getData(done) {
    const result = fetch(urlBase);
    result
        .then(response => response.json())
        .then(datos => {
            done(datos)
        });
}



idDetails = window.location.href
idDetails = new URL(idDetails).searchParams.get("id")
console.log(idDetails);

getData(datos => {
    console.log(datos);
    let events = datos.characters
    console.log(events);
    let tarjeta = events.filter(events => events.id == idDetails)
    tarjeta.forEach(events => {
        let img = document.getElementById("img")
        let name = document.getElementById("name").innerHTML = `${events.name}`
        let jutsu = document.getElementById("jutsu")
        let affiliation = document.getElementById("affiliation")
        let sex = document.getElementById("sex")
        let clan = document.getElementById("clan")
        let status = document.getElementById("status")


        // img
        if (events.images !== undefined && events.images.length > 0) {
            img.innerHTML = `<img id="imgs" src="${events.images[0]}" class="card-img-top" alt="${events.name}">`
            
            
        } else {
            img.style.display = "none";
        }

        // jutsu
        if (events.jutsu !== undefined && events.jutsu.length > 0) {
            jutsu.innerHTML = `Jutsu: <ul class="text-body-secondary">${events.jutsu}</ul>`;
           
        } else {
            jutsu.style.display = "none";
        }
        
        // Afiliación
        if (events.personal.affiliation !== undefined) {
            affiliation.innerHTML = `Affiliation: <small class="text-body-secondary">${events.personal.affiliation}</small>`;
        } else {
            affiliation.style.display = "none";
        }

        // Sexo
        if (events.personal.sex !== undefined) {
            sex.innerHTML = `Sex: <small class="text-body-secondary">${events.personal.sex}</small>`;
        } else {
            sex.style.display = "none";
        }

        // Clan
        if (events.personal.clan !== undefined) {
            clan.innerHTML = `Clan: <small class="text-body-secondary">${events.personal.clan}</small>`;
        } else {
            clan.style.display = "none";
        }

        // Status
        if (events.personal.status !== undefined) {
            status.innerHTML = `Status: <small class="text-body-secondary">${events.personal.status}</small>`;
        } else {
            status.style.display = "none";
        }







    })



    console.log(idDetails);
    console.log(tarjeta);


})
