const urlKara = "https://narutodb.xyz/api/kara?page=1&limit=20"

console.log(urlKara)

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
        }
    },
    created() {

        this.getData(urlKara)

    },
    methods: {

        getData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.kara = data.kara
                    console.log(this.kara)
                })
        }

    },
    computed: {

    }

}).mount("#containerVue")