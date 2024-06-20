const urlClans = "https://narutodb.xyz/api/clan?page=1&limit=58"

console.log(urlClans)

fetch(urlClans)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)
        console.log(data.clans[0].name)
        console.log(data.clans[1].name)
        console.log(data.clans[0].characters[1].name)
    })

const { createApp } = Vue

const clansPageDetails = createApp({

    data() {

        return {
            clans: [],
            characters:[]
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
                    console.log(this.clans[0].name)
                    console.log(this.clans)

                    this.clans.forEach(clan => {
                        this.characters.push(clan.characters);

                    
                    });

                    console.log(this.characters)
                   
                })
        }

    },
    computed: {

    }

}).mount("#containerDetails")

