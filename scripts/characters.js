const { createApp } = Vue;

const CharacterPage = {
    data() {
        return {
            personajes: [], 
            paginaActual: 1,
            elementosPorPagina: 20
        };
    },
    computed: {
        personajesPaginados() {
            let indiceInicio = (this.paginaActual - 1) * this.elementosPorPagina;
            let indiceFin = indiceInicio + this.elementosPorPagina;
            return this.personajes.slice(indiceInicio, indiceFin);
        },
        totalPaginas() {
            return Math.ceil(this.personajes.length / this.elementosPorPagina);
        },
        paginas() {
            let arrayPaginas = [];
            for (let i = 1; i <= this.totalPaginas; i++) {
                arrayPaginas.push(i);
            }
            return arrayPaginas;

        }
        
    },
    methods: {
        cargarPersonajes() {
            fetch('https://narutodb.xyz/api/character?page=1&limit=500')
                .then(response => response.json())
                .then(data => {
                    this.personajes = data.characters; 
                    console.log(data.characters)
                })
                .catch(error => {
                    console.error('Error al obtener los personajes:', error);
                });
        },
        cambiarPagina(pagina) {
            if (pagina > 0 && pagina <= this.totalPaginas) {
                this.paginaActual = pagina;
            }
        }
    },
    mounted() {
        this.cargarPersonajes();
    }
};

createApp(CharacterPage).mount('#charactersVue');