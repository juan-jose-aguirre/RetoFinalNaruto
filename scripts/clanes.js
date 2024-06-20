const urlClans = "https://narutodb.xyz/api/clan?page=1&limit=58"

console.log(urlClans)

fetch(urlClans)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)
        console.log(data.clans[0].name)
        console.log(data.clans[1].name)
        console.log(data.clans[0].characters[1])
    })

const { createApp } = Vue

const clansPage = createApp({

    data() {

        return {
            clans: [],
        }
    },
    created() {

        this.getData(urlClans)

    },
    methods: {

        getData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.clans = data.clans
                    console.log(this.clans)
                })
        }

    },
    computed: {

    }

}).mount("#containerVue")