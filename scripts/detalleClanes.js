const urlClans = "https://narutodb.xyz/api/clan"

const { createApp } = Vue

const clansDetails = createApp({
    data() {
        return {
            clans: {}
        }
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search)
        const clansId = urlParams.get('id')
        this.getData(`${urlClans}/${clansId}`)
    },
    methods: {
        getData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.clans = data                   
                })
            
        }
    }
}).mount("#containerDetails")
