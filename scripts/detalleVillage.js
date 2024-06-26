const urlVillages = "https://narutodb.xyz/api/village"

const { createApp } = Vue

const villageDetailsApp = createApp({
    data() {
        return {
            village: {},
        }
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        const villageId = urlParams.get('id');
        this.getData(`${urlVillages}/${villageId}`);
    },
    methods: {
        getData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.village = data;
                })
                .catch(error => console.error('Error fetching village data:', error));
        }
    }
}).mount("#villageDetailsApp")
