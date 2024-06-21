const urlClans = "https://narutodb.xyz/api/clan?page=1&limit=58"

const logos = [
    { imagen: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfh9vsm-fbfd4714-3fc3-4857-8369-e18cdf26f2e9.png/v1/fill/w_1280,h_1280/aburame_clan_symbol_by_jormxdos_dfh9vsm-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZoOXZzbS1mYmZkNDcxNC0zZmMzLTQ4NTctODM2OS1lMThjZGYyNmYyZTkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6_CIfM3tYPgnytpZwHhTXOxNLpYlDZyMjn9nBZmZzfs' },
    { imagen: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d00921e-cbf3-470c-84b0-089619cd5fe3/d4yvue8-c85fd413-b5ee-49b0-9e36-9d0bf77c5c3a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkMDA5MjFlLWNiZjMtNDcwYy04NGIwLTA4OTYxOWNkNWZlM1wvZDR5dnVlOC1jODVmZDQxMy1iNWVlLTQ5YjAtOWUzNi05ZDBiZjc3YzVjM2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-pxypook-CHLF_QgBrxa2e5d2jR1RGOmJMVxTJxZ5T8' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiUHQa_F0u8N7LdpN6sMvu9CplWbuoue-Yw&s' },
    { imagen: 'https://static.wikia.nocookie.net/06695054-6ee2-497e-b960-fcd37e8d8b03/scale-to-width/755' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8FDsQIqR-mRsEN96Eb2fbjKK6K8eDmqW5Q&s' },
    { imagen: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90a9d40d-63b0-442b-95ee-9fa9fa8f5a50/db35fzo-85c8d628-edf6-418e-8ab1-dbefd23cd879.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwYTlkNDBkLTYzYjAtNDQyYi05NWVlLTlmYTlmYThmNWE1MFwvZGIzNWZ6by04NWM4ZDYyOC1lZGY2LTQxOGUtOGFiMS1kYmVmZDIzY2Q4NzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JK8_g-0Rq6nSSskTG4KkvZtMSBLzfxWI9DyAdmDVM2s' },
    { imagen: 'https://images5.alphacoders.com/980/980198.png' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yM9rhVHP-4OicczGrUnS6pF5rSTJkYR3mQ&s' },
    { imagen: 'https://w7.pngwing.com/pngs/769/673/png-transparent-kakashi-hatake-clan-uchiha-logo-heavy-metal-metallica-desktop-wallpaper-rim-naruto.png' },
    { imagen: 'https://static.miraheze.org/esnarutowiki/e/e5/S%C3%ADmbolo_de_Clan_%C5%8Ctsutsuki.svg' },
    { imagen: 'https://pm1.aminoapps.com/7013/98f96ee96642ff05da5c3096a22fc9ecf18a716br1-1024-1006v2_uhq.jpg' },
    { imagen: 'https://e7.pngegg.com/pngimages/533/103/png-clipart-uchiha-clan-logo-hidan-fan-art-akatsuki-logo-naruto-television-manga.png' },
    { imagen: 'https://i.pinimg.com/originals/9e/54/7f/9e547f767cc490dd352eb6b24be8fd8c.jpg' },
    { imagen: 'https://i.pinimg.com/originals/9e/54/7f/9e547f767cc490dd352eb6b24be8fd8c.jpg' },
    { imagen: 'https://pm1.aminoapps.com/7546/4f244229c25f8cd659e86ea890c74f2ec1e40d93r1-736-735v2_uhq.jpg' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBmwMxABx4iYPdci1ZzrDVTbyyIugP32QOw&s' },
    { imagen: 'https://pm1.aminoapps.com/7075/9f701fe1e862c4c756afbcd0136a1ff0caa87543r1-509-476v2_00.jpg' },
    { imagen: 'https://i.pinimg.com/originals/7e/39/16/7e3916ed1f0a208576c87c783a82b51e.png' },
    { imagen: 'https://w7.pngwing.com/pngs/61/12/png-transparent-sharingan-sasuke-uchiha-uchiha-clan-naruto-naruto-manga-sasuke-uchiha-sphere.png' },
    { imagen: 'https://pm1.aminoapps.com/7531/1961c45cd68fb8fb64764939d3b8b02d2c82151dr1-750-744v2_uhq.jpg' },
    { imagen: 'https://qph.cf2.quoracdn.net/main-qimg-2e2763c966144c14345d7f40222192e6-lq' },
    { imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Symbole_du_Clan_Kaguya.svg/1200px-Symbole_du_Clan_Kaguya.svg.png' },
    { imagen: 'https://pm1.aminoapps.com/8033/b7c3abed0c2b265c8261b14ce41b6589a334996ar1-290-290v2_00.jpg' },
    { imagen: 'https://pm1.aminoapps.com/8033/b7c3abed0c2b265c8261b14ce41b6589a334996ar1-290-290v2_00.jpg' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAsfXmQ_ijfPqOnznvxWLQqsd8XrANxZsTA&s' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAsfXmQ_ijfPqOnznvxWLQqsd8XrANxZsTA&s' },
    { imagen: 'https://pm1.aminoapps.com/6542/f7a5e8e4dae5289be12050f525218a7b0bcac293_hq.jpg' },
    { imagen: 'https://pm1.aminoapps.com/6542/f7a5e8e4dae5289be12050f525218a7b0bcac293_hq.jpg' },
    { imagen: 'https://pbs.twimg.com/media/CKYgGv8VAAAt5SZ.jpg' },
    { imagen: 'https://i.pinimg.com/originals/d1/c5/13/d1c51379ecfb755b14ace6319512083c.jpg' },
    { imagen: 'https://i.pinimg.com/originals/89/d4/30/89d430c5b9dae03bbe076e297c283096.jpg' },
    { imagen: 'https://pm1.aminoapps.com/6645/d020407b315ebed925972d64d3a73eb702674ffc_00.jpg' },
    { imagen: 'https://i.pinimg.com/originals/4c/a2/d5/4ca2d50ce8991c77fd6f2d19d6f721da.png' },
    { imagen: 'https://i.pinimg.com/474x/92/ff/bf/92ffbf7b84b42e443663bf2f3951e0c5.jpg' },
    { imagen: 'https://vignette2.wikia.nocookie.net/narutooriginals/images/3/30/Akiyama_Clan_Symbol.png/revision/latest?cb=20130805171021' },
    { imagen: 'https://www.vhv.rs/dpng/d/254-2548704_kagame-clan-naruto-fanon-wiki-cool-clan-logos.png' },
    { imagen: 'https://i.pinimg.com/originals/70/10/d5/7010d5457a201304a3cff285107aa5c9.png' },
    { imagen: 'https://www.shutterstock.com/image-vector/phoenix-logo-fire-bird-vector-260nw-1862990200.jpg' },
    { imagen: 'https://i.pinimg.com/originals/b6/8a/41/b68a41f59ae06376f98410a70f25ad03.png' },
    { imagen: 'https://i.pinimg.com/originals/b6/8a/41/b68a41f59ae06376f98410a70f25ad03.png' },
    { imagen: 'https://pm1.aminoapps.com/7438/ef10340b25d180dd6766bdebc33feb233f587bdar1-1024-768v2_uhq.jpg' },
    { imagen: 'https://media.moddb.com/images/mods/1/25/24813/Shimura.jpg' },
    { imagen: 'https://pm1.aminoapps.com/6973/b7894cde8de5df21b7cc91363b290c575f73f740r1-150-150v2_00.jpg' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zhF1J1FCZQ-Ad0cJukQUC3diT0DoGCFU94fca1eG9dhSZNcFsFTf50yTetQCJZcj-QQ&usqp=CAU' },
    { imagen: 'https://pm1.aminoapps.com/6809/6cb3d4f5f5e27a95d665170cac190554f4d6eecav2_00.jpg' },
    { imagen: 'https://i.pinimg.com/564x/40/63/c3/4063c346f62112343f18311b77bff7c8.jpg' },
    { imagen: 'https://i.pinimg.com/564x/f9/c6/d9/f9c6d9f9b7f50a9acd1f6589ecf85ce4.jpg' },
    { imagen: 'https://i.pinimg.com/564x/f9/c6/d9/f9c6d9f9b7f50a9acd1f6589ecf85ce4.jpg' },
    { imagen: 'https://w7.pngwing.com/pngs/423/809/png-transparent-vampire-the-masquerade-vampire-the-eternal-struggle-tzimisce-clan-malkavian-symbol.png' },
    { imagen: 'https://w7.pngwing.com/pngs/423/809/png-transparent-vampire-the-masquerade-vampire-the-eternal-struggle-tzimisce-clan-malkavian-symbol.png' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZFlq1YjCeauaGRXCNaHTqkj3IpLZ6W99Rg&s' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZFlq1YjCeauaGRXCNaHTqkj3IpLZ6W99Rg&s' },
    { imagen: 'https://pm1.aminoapps.com/7049/8df4ae39723076884ca18acd1ba1fd8fdf4a8183r1-720-720v2_00.jpg' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDG_VF2HYKwRPld8XffIhQ9A8VLVwEoAeGmg&s' },
    { imagen: 'https://ih1.redbubble.net/image.1085221589.0908/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9rjBBZK_X0nT9A4WsQagFqKuds-r0dsQkQ&s' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwco51iFNMCTPLjCcMZ1xctfyadwhqNelXCA&s' },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKw9akTjUMiaciFGDZxodxUsIgb3NolZwYA&s' },
];
  
const { createApp } = Vue

const clansPage = createApp({
    data() {
        return {
            clans: [],
            shield: logos
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
                   
                })
        }
    }
}).mount("#containerVue")


