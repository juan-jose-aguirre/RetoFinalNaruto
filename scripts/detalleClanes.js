const urlClans = "https://narutodb.xyz/api/clan"

const { createApp } = Vue;

    createApp({
        data() {
            return {
                clans: {},  
                textoBuscar: "",  
                clansBK: {},  
            };
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
                        this.clansBK = data
                    })
                   
            }
        },
        computed: {
            filteredCharacters() {
                
                return this.clansBK.characters ? this.clansBK.characters.filter(element =>
                    element.name.toLowerCase().includes(this.textoBuscar.toLowerCase())
                ) : [];
            }
        }

    }).mount("#containerDetails")
