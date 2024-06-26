const urlVillages = "https://narutodb.xyz/api/village?page=1&limit=39"
const urlClans = "https://narutodb.xyz/api/clan?page=1&limit=58"
const urlCharacters = "https://narutodb.xyz/api/character?page=1&limit=1431"
const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            aldeas:[],
            clans:[],
            personajes:[],
            aldeaMasPersonajes:"",
            clanMasPersonajes:"",
            clanNombreMasLargo:"",
            personajesMuertos:0,
            personajesHombres:0,
            personajesMujeres:0,
            PorClan:{}
        }
    },
    created(){
        this.main(urlVillages)
    },
    methods:{
        main(){
            fetch(urlVillages).then(res => res.json()).then(data =>{
                this.aldeas = [...data.villages];
                this.aldeaMasPersonajes = conMasPersonajes(this.aldeas);
            })
            fetch(urlClans).then(res => res.json()).then(data =>{
                this.clanes = [...data.clans];
                this.clanMasPersonajes = conMasPersonajes(this.clanes);
                this.clanNombreMasLargo = nombreMasLargo(this.clanes);
                this.PorClan = objetoClanes(this.clanes);
            })
            fetch(urlCharacters).then(res => res.json()).then(data =>{
                this.personajes = [...data.characters];
                this.personajes.forEach(personaje=> {
                    if(personaje.personal){
                        if(personaje.personal.status == "Deceased"){
                            this.personajesMuertos++
                        }
                        if(personaje.personal.sex == "Male"){
                            this.personajesHombres++
                        }
                        if(personaje.personal.sex == "Female"){
                            this.personajesMujeres++
                        }
                    } 
                });
            })
        }
    },
    computed:{}
}).mount("#statistics");

function objetoClanes(lista){
    let listaClanes = ["Uzumaki","Uchiha","Hyūga","Ōtsutsuki","Senju"];
    let objetoClanes = {
        clanes:[]
    };
    for(let clan of listaClanes){
        let listaPersonajes = lista.filter(grupo => grupo.name == clan);
        let sumaJutsus = 0;
        let sumaTools = 0;
        for(let personaje of listaPersonajes[0].characters){
            if(personaje.jutsu && personaje.jutsu.length != 0){
                sumaJutsus += personaje.jutsu.length
            }
            if(personaje.tools && personaje.tools.length != 0){
                sumaTools += personaje.tools.length
            }
        }
        objetoClanes.clanes.push({name:clan,totalJutsus:sumaJutsus,totalTools:sumaTools});
    }
    return objetoClanes;
}

function conMasPersonajes(lista){
    let nombre = "";
    return nombre = [...lista].sort((a,b) => a.characters.length - b.characters.length).pop().name;
}
function nombreMasLargo(lista) {
    let nombre = "";
    return nombre = [...lista].sort((a,b) => a.name.length - b.name.length).pop().name;
}