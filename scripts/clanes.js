const urlClans = "https://narutodb.xyz/api/clan?page=1&limit=58"

const logos = [
    { imagen: 'https://w7.pngwing.com/pngs/662/173/png-transparent-hinata-hyuga-neji-hyuga-hyuga-clan-symbol-uchiha-clan-symbol-miscellaneous-angle-logo-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/800/767/png-transparent-choji-akimichi-shino-aburame-sakura-haruno-symbol-symbol-miscellaneous-angle-logo-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/521/948/png-transparent-red-and-black-naruto-mangekyou-sharingan-eye-illustration-sasuke-uchiha-itachi-uchiha-madara-uchiha-kakashi-hatake-clan-uchiha-mata-symmetry-cartoon-naruto-thumbnail.png' },
    { imagen: 'https://static.wikia.nocookie.net/06695054-6ee2-497e-b960-fcd37e8d8b03/scale-to-width/755' },
    { imagen: 'https://w7.pngwing.com/pngs/687/576/png-transparent-hashirama-senju-minato-namikaze-senju-clan-symbol-symbol-miscellaneous-logo-black-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/211/455/png-transparent-dojutsu-clan-uchiha-anime-naruto-akatsuki-anime-manga-cartoon-eye-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/211/455/png-transparent-dojutsu-clan-uchiha-anime-naruto-akatsuki-anime-manga-cartoon-eye-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/211/455/png-transparent-dojutsu-clan-uchiha-anime-naruto-akatsuki-anime-manga-cartoon-eye-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/769/673/png-transparent-kakashi-hatake-clan-uchiha-logo-heavy-metal-metallica-desktop-wallpaper-rim-naruto.png' },
    { imagen: 'https://static.miraheze.org/esnarutowiki/e/e5/S%C3%ADmbolo_de_Clan_%C5%8Ctsutsuki.svg' },
    { imagen: 'https://pm1.aminoapps.com/7013/98f96ee96642ff05da5c3096a22fc9ecf18a716br1-1024-1006v2_uhq.jpg' },
    { imagen: 'https://pm1.aminoapps.com/7013/98f96ee96642ff05da5c3096a22fc9ecf18a716br1-1024-1006v2_uhq.jpg' },
    { imagen: 'https://w7.pngwing.com/pngs/531/736/png-transparent-shimazu-clan-satsuma-domain-japan-mon-hy%C5%ABga-province-japan-trademark-logo-rim-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/531/736/png-transparent-shimazu-clan-satsuma-domain-japan-mon-hy%C5%ABga-province-japan-trademark-logo-rim-thumbnail.png' },
    { imagen: 'https://w7.pngwing.com/pngs/748/32/png-transparent-sasuke-uchiha-youtube-curse-line-art-tattoo-seal-white-face-animals-thumbnail.png' },
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

logos.forEach((logo, index) => {
    logo.id = index + 1;
});

console.log(logos);
  
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


