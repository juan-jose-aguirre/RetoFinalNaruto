const urlKara = "https://narutodb.xyz/api/kara?page=1&limit=32"
const urlAkatsuki = "https://narutodb.xyz/api/akatsuki?page=1&limit=44"
console.log(urlKara)
console.log(urlAkatsuki)

fetch(urlAkatsuki)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)
        console.log(data.akatsuki[0].name)

    })

fetch(urlKara)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)
        console.log(data.kara[0].name)

    })

const { createApp } = Vue

const karaPage = createApp({

    data() {
        return {
            kara: [],
            akatsuki: [],
            textoBuscar: "",
            categoriaSeleccionada: [],
            karaBk:[],
            akatsukiBk: [],
            combinedData:[],
            resultadoFinal:[],
        }
    },

    created() {
        this.getData(urlKara)
        this.getData(urlAkatsuki)
        

    },

    methods: {
        getData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    

                    if (url.includes("kara")) {
                        this.kara = data.kara;
                        this.karaBk = data.kara
                        console.log(this.kara);

                    }

                    else if (url.includes("akatsuki")) {
                        this.akatsuki = data.akatsuki;
                        this.akatsukiBk = data.akatsuki
                        console.log(this.akatsuki);

                    }

                    let combinedData = [...this.akatsuki, ...this.kara];
                    console.log(combinedData);


                    //this.categorias = Array.from(new Set(this.kara.map((element) => element.personal.affiliation))) 
                    //this.categorias = Array.from(new Set(combinedData.map((element) => element.personal.affiliation[0]))) 
                    this.categorias = Array.from(new Set(combinedData
                        .filter(element => element.personal.affiliation.includes("Kara") || element.personal.affiliation.includes("Akatsuki"))
                        .map(element => element.personal.affiliation[0])
                    ));
                    

                    console.log(this.categorias);

                })
        }

    },
    computed: {
        superFiltro(){
            let filtroTexto = this.karaBk.filter(element => element.name.toLowerCase().includes(this.textoBuscar.toLowerCase()))
            let filtroTexto2 = this.akatsukiBk.filter(element => element.name.toLowerCase().includes(this.textoBuscar.toLowerCase()))
            
            let resultadoFinal = filtroTexto.concat(filtroTexto2);
            this.kara = resultadoFinal
            console.log(resultadoFinal);
        }

    }

}).mount("#containerVue")