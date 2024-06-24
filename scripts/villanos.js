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
            akatsuki:[]

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
                        console.log(this.kara);
                    } 
                    
                     else if (url.includes("akatsuki")) {
                         this.akatsuki = data.akatsuki;
                         console.log(this.akatsuki);
                    }
                })
        }

    },
    computed: {

    }

}).mount("#containerVue")