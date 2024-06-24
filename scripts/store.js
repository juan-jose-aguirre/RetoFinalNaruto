const products = [
    {
      id: 1,
      name: "Naruto Uzumaki Action Figure",
      price: 25.99,
      image: "https://http2.mlstatic.com/D_NQ_NP_742214-MLU70129409725_062023-O.webp",
      description: "Detailed action figure of Naruto Uzumaki in his signature Konoha outfit.",
      liked:false
    },
    {
      id: 2,
      name: "Akatsuki Hoodie",
      price: 35.99,
      image: "https://i.ebayimg.com/images/g/wTAAAOSwMUpcveyc/s-l1200.jpg",
      description: "Black hoodie with the red cloud design of the Akatsuki organization.",
      liked:false
    },
    {
      id: 3,
      name: "Training Kunai",
      price: 12.99,
      image: "https://i.etsystatic.com/5676306/r/il/e6fe53/2142240366/il_570xN.2142240366_1ept.jpg",
      description: "Replica of the kunai used for training by ninjas in the Naruto series.",
      liked:false
    },
    {
      id: 4,
      name: "Sharingan Contact Lenses",
      price: 19.99,
      image: "https://wantlens.com/wp-content/uploads/2023/06/Sba2f79861ac349cda05cb3760af5a24eL.jpg_960x960-600x600.jpg",
      description: "Cosmetic contact lenses designed to look like the Sharingan eye technique.",
      liked:false
    },
    {
      id: 5,
      name: "Konoha Headband",
      price: 9.99,
      image: "https://target.scene7.com/is/image/Target/GUEST_594e74ef-1b17-4bcb-baa2-8ee7f3f791a7?wid=488&hei=488&fmt=pjpeg",
      description: "Headband with the symbol of the Hidden Leaf Village (Konoha).",
      liked:false
    }
  ];
  
const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            ListaProductos:products
        }
    },
    created(){
        this.main()
    },
    methods:{
        main(){
            localStorage.setItem("listaProductos",JSON.stringify(this.ListaProductos));
        },
        getLike(id){
            console.log(id);
            this.ListaProductos = JSON.parse(localStorage.getItem("listaProductos"))
            for(let producto of this.ListaProductos){
                if(producto.id == id){
                    producto.liked = !producto.liked;
                }
            }
            localStorage.setItem("listaProductos",JSON.stringify(this.ListaProductos));
            console.log(this.ListaProductos);
        }
    },
    computed:{
        
    }
}).mount("#store");


// function getLike(id){
//     console.log(id);
// }