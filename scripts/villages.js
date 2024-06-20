const urlVillages = "https://narutodb.xyz/api/village?page=1&limit=58"

const { createApp } = Vue

const villagesPage = createApp({
    data() {
        return {
            villages: [],
        }
    },
    created() {
        this.getData(urlVillages)
    },
    methods: {
        getData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.villages = data.villages;
                    console.log(this.villages)
                })
        }
    }
}).mount("#containerVue")
