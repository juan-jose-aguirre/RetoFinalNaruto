const { createApp } = Vue;

const CharacterPage = {
    data() {
        return {
            personajes: [],
            paginaActual: 1,
            numeroDePaginas: 10,
            elementosPorPagina: 20,
            filtroNombre: "",
            personajesFiltrados: [],
            filtroShippuden: false,
            filtroBoruto:false,
            filtroNaruto:false
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

                if (this.filtroBestias && personaje.personal && typeof personaje.personal.classification === 'string') {
                    coincide = coincide && personaje.personal.classification.toLowerCase() === 'jinchūriki';
                }

                if (this.filtroShippuden && personaje.debut && personaje.debut.anime) {
                    coincide = coincide && personaje.debut.anime.toLowerCase().includes("naruto shippūden");
                }
                if (this.filtroBoruto && personaje.debut && personaje.debut.anime) {
                    coincide = coincide && personaje.debut.anime.toLowerCase().includes("boruto");
                }
                if (this.filtroNaruto && personaje.debut && personaje.debut.anime) {
                    coincide = coincide && personaje.debut.anime.toLowerCase().includes("naruto chapter");
                }
                return coincide;
            });
            this.paginaActual = 1;
        },
    },
    mounted() {
        this.cargarPersonajes();
    }
};

createApp(CharacterPage).mount('#charactersVue');