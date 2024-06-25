
const { createApp } = Vue;

const CharacterPage = {
    data() {
        return {
            personajes: [],
            paginaActual: 1,
            numeroDePaginas:15,
            elementosPorPagina: 20,
            filtroNombre: "",
            personajesFiltrados: [],
            filtroBestias: false,
            filtroOjos: false,
            filtroVillas: false
        };
    },
    computed: {
        personajesPaginados() {
            let indiceInicio = (this.paginaActual - 1) * this.elementosPorPagina;
            let indiceFin = indiceInicio + this.elementosPorPagina;
            return this.personajesFiltrados.slice(indiceInicio, indiceFin);
        },
        totalPaginas() {
            return Math.ceil(this.personajesFiltrados.length / this.elementosPorPagina);
        },
        paginas() {
            let arrayPaginas = [];
            
            let inicioBloque = Math.max(1, this.paginaActual - Math.floor(this.numeroDePaginas / 2));
            let finBloque = Math.min(inicioBloque + this.numeroDePaginas - 1, this.totalPaginas);

            for (let i = inicioBloque; i <= finBloque; i++) {
                arrayPaginas.push(i);
            }
            return arrayPaginas;
        }
    
    },
    methods: {
        
        cargarPersonajes() {
            fetch('https://narutodb.xyz/api/character?page=1&limit=1400')
                .then(response => response.json())
                .then(data => {
                    this.personajes = data.characters;
                    this.filtrarPersonajes();
                    console.log(data)
                })
                .catch(error => {
                    console.error('Error al obtener los personajes:', error);
                });
        },
        cambiarPagina(pagina) {
            if (pagina > 0 && pagina <= this.totalPaginas) {
                this.paginaActual = pagina;
            }
        },
        filtrarPersonajes() {
            let filtro = this.filtroNombre.trim().toLowerCase();
            this.personajesFiltrados = this.personajes.filter(personaje => {
                let coincide = true;
                if (filtro) {
                    coincide = personaje.name.toLowerCase().includes(filtro);
                }

                if (this.filtroBestias) {
                    coincide = coincide && personaje.personal.classification && personaje.personal.classification.includes('Jinchuriki');
                }
                console.log(this.filtroBestias)

                if (this.filtroOjos) {
                    coincide = coincide && personaje.personal.kekkeiGenkai && personaje.personal.kekkeiGenkai.length > 0;
                }

                return coincide;
            });
            this.paginaActual = 1;
        }
    },
    mounted() {
        this.cargarPersonajes();
    }
};

createApp(CharacterPage).mount('#charactersVue');
 