// fetch('https://narutodb.xyz/api/character')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)

//     })

const { createApp } = Vue

const CharacterPage = createApp({

    data: {
        el: '#chactersVue',
        personajes: [], 
        paginaActual: 1,
        elementosPorPagina: 50, 

    computed: {
        
        personajesPaginados: function() {
            let indiceInicio = (this.paginaActual - 1) * this.elementosPorPagina;
            let indiceFin = indiceInicio + this.elementosPorPagina;
            return this.personajes.slice(indiceInicio, indiceFin);
        },
        paginas: function() {
            let arrayPaginas = [];
            for (var i = 1; i <= this.totalPaginas; i++) {
                arrayPaginas.push(i);
            }
            return arrayPaginas;
        }
    },
      

    },
    methods: 
        {
            cargarPersonajes: function() {
              
                fetch('https://narutodb.xyz/api/character')
                    .then(response => response.json())
                    .then(data => {
                        this.personajes = data.characters; 
                    })
                    .catch(error => {
                        console.error('Error al obtener los personajes:', error);
                    });
            },
        

    },
    computed: {

    }

}).mo
