const urlClans = "https://narutodb.xyz/api/clan?page=1&limit=58"

const logos = [
    { imagen: 'https://w7.pngwing.com/pngs/662/173/png-transparent-hinata-hyuga-neji-hyuga-hyuga-clan-symbol-uchiha-clan-symbol-miscellaneous-angle-logo-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/800/767/png-transparent-choji-akimichi-shino-aburame-sakura-haruno-symbol-symbol-miscellaneous-angle-logo-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/521/948/png-transparent-red-and-black-naruto-mangekyou-sharingan-eye-illustration-sasuke-uchiha-itachi-uchiha-madara-uchiha-kakashi-hatake-clan-uchiha-mata-symmetry-cartoon-naruto-thumbnail.png' },
    { imagen: 'https://static.wikia.nocookie.net/06695054-6ee2-497e-b960-fcd37e8d8b03/scale-to-width/755' },
    { imagen: 'https://w7.pngwing.com/pngs/687/576/png-transparent-hashirama-senju-minato-namikaze-senju-clan-symbol-symbol-miscellaneous-logo-black-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/211/455/png-transparent-dojutsu-clan-uchiha-anime-naruto-akatsuki-anime-manga-cartoon-eye-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/769/673/png-transparent-kakashi-hatake-clan-uchiha-logo-heavy-metal-metallica-desktop-wallpaper-rim-naruto.png' },
    { imagen: 'https://static.miraheze.org/esnarutowiki/e/e5/S%C3%ADmbolo_de_Clan_%C5%8Ctsutsuki.svg' },
    { imagen: 'https://pm1.aminoapps.com/7013/98f96ee96642ff05da5c3096a22fc9ecf18a716br1-1024-1006v2_uhq.jpg' },
    { imagen: 'https://w7.pngwing.com/pngs/531/736/png-transparent-shimazu-clan-satsuma-domain-japan-mon-hy%C5%ABga-province-japan-trademark-logo-rim-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/748/32/png-transparent-sasuke-uchiha-youtube-curse-line-art-tattoo-seal-white-face-animals-thumbnail.png' },
    { imagen: 'https://pm1.aminoapps.com/7075/9f701fe1e862c4c756afbcd0136a1ff0caa87543r1-509-476v2_00.jpg' },
    { imagen: 'https://w7.pngwing.com/pngs/61/12/png-transparent-sharingan-sasuke-uchiha-uchiha-clan-naruto-naruto-manga-sasuke-uchiha-sphere.png' },
    { imagen: 'https://pm1.aminoapps.com/7531/1961c45cd68fb8fb64764939d3b8b02d2c82151dr1-750-744v2_uhq.jpg' },
    { imagen: 'https://qph.cf2.quoracdn.net/main-qimg-2e2763c966144c14345d7f40222192e6-lq' },
    { imagen: 'https://pm1.aminoapps.com/8033/b7c3abed0c2b265c8261b14ce41b6589a334996ar1-290-290v2_00.jpg' },
    { imagen: 'https://pm1.aminoapps.com/6542/f7a5e8e4dae5289be12050f525218a7b0bcac293_hq.jpg' },
    { imagen: 'https://i.pinimg.com/originals/d1/c5/13/d1c51379ecfb755b14ace6319512083c.jpg' },
    { imagen: 'https://i.pinimg.com/originals/89/d4/30/89d430c5b9dae03bbe076e297c283096.jpg' },
    { imagen: 'https://pm1.aminoapps.com/6645/d020407b315ebed925972d64d3a73eb702674ffc_00.jpg' },
    { imagen: 'https://i.pinimg.com/474x/92/ff/bf/92ffbf7b84b42e443663bf2f3951e0c5.jpg' },
    { imagen: 'https://vignette2.wikia.nocookie.net/narutooriginals/images/3/30/Akiyama_Clan_Symbol.png/revision/latest?cb=20130805171021' },
    { imagen: 'https://www.vhv.rs/dpng/d/254-2548704_kagame-clan-naruto-fanon-wiki-cool-clan-logos.png' },
    { imagen: 'https://pm1.aminoapps.com/7438/ef10340b25d180dd6766bdebc33feb233f587bdar1-1024-768v2_uhq.jpg' },
    { imagen: 'https://media.moddb.com/images/mods/1/25/24813/Shimura.jpg' },
    { imagen: 'https://pm1.aminoapps.com/6809/6cb3d4f5f5e27a95d665170cac190554f4d6eecav2_00.jpg' },
    { imagen: 'https://w7.pngwing.com/pngs/423/809/png-transparent-vampire-the-masquerade-vampire-the-eternal-struggle-tzimisce-clan-malkavian-symbol.png' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZFlq1YjCeauaGRXCNaHTqkj3IpLZ6W99Rg&s' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDG_VF2HYKwRPld8XffIhQ9A8VLVwEoAeGmg&s' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKw9akTjUMiaciFGDZxodxUsIgb3NolZwYA&s' },
    { imagen: 'https://pm1.aminoapps.com/7013/98f96ee96642ff05da5c3096a22fc9ecf18a716br1-1024-1006v2_uhq.jpg' },
    { imagen: 'https://w7.pngwing.com/pngs/531/736/png-transparent-shimazu-clan-satsuma-domain-japan-mon-hy%C5%ABga-province-japan-trademark-logo-rim-thumbnail.png' },
]

const { createApp } = Vue

const clansPage = createApp({
    data() {
        return {
            clans: [],       
            clansBK: [],     
            shield: logos,   
            textoBuscar: "", 
            filterClans: []  
        };
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
                    this.clansBK = data.clans

                   
                    this.clansUnicos = new Set(this.clans.map(item => item.name.toLowerCase()))
                    this.filterClans = [...this.clansUnicos].map(element => {
                        return this.clans.find(item => item.name.toLowerCase() === element)
                    })
                })
        }
    },
    computed: {
        filteredCharacters() {
            return this.filterClans.filter(clan =>
                clan.name.toLowerCase().includes(this.textoBuscar.toLowerCase())
            )
        }
    }
}).mount("#containerVue")

