const products = [
    {
      id: 1,
      name: "Naruto Uzumaki Action Figure",
      price: 25.99,
      image: "https://http2.mlstatic.com/D_NQ_NP_742214-MLU70129409725_062023-O.webp",
      description: "Detailed action figure of Naruto Uzumaki in his signature Konoha outfit.",
      toBuy:false
    },
    {
      id: 2,
      name: "Akatsuki Hoodie",
      price: 35.99,
      image: "https://i.ebayimg.com/images/g/wTAAAOSwMUpcveyc/s-l1200.jpg",
      description: "Black hoodie with the red cloud design of the Akatsuki organization.",
      toBuy:false
    },
    {
      id: 3,
      name: "Training Kunai",
      price: 12.99,
      image: "https://i.etsystatic.com/5676306/r/il/e6fe53/2142240366/il_570xN.2142240366_1ept.jpg",
      description: "Replica of the kunai used for training by ninjas in the Naruto series.",
      toBuy:false
    },
    {
      id: 4,
      name: "Sharingan Contact Lenses",
      price: 19.99,
      image: "https://wantlens.com/wp-content/uploads/2023/06/Sba2f79861ac349cda05cb3760af5a24eL.jpg_960x960-600x600.jpg",
      description: "Cosmetic contact lenses designed to look like the Sharingan eye technique.",
      toBuy:false
    },
    {
      id: 5,
      name: "Konoha Headband",
      price: 9.99,
      image: "https://target.scene7.com/is/image/Target/GUEST_594e74ef-1b17-4bcb-baa2-8ee7f3f791a7?wid=488&hei=488&fmt=pjpeg",
      description: "Headband with the symbol of the Hidden Leaf Village (Konoha).",
      toBuy:false
    }
  ];
  
const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            ListaProductosBK:products,
            ListaProductos:products,
            ListaProductosComprar:[]
        }
    },
    created(){
        this.main()
    },
    methods:{
        main(){
        },
        toBuy(id){
            console.log(id);
            // this.ListaProductos = JSON.parse(localStorage.getItem("listaProductos"))
            console.log(this.ListaProductos);
            for(let producto of this.ListaProductos){
                if(producto.id == id){
                    producto.toBuy = !producto.toBuy;
                }
            }
            localStorage.setItem("listaProductos",JSON.stringify(this.ListaProductos));
            this.ListaProductosComprar = JSON.parse(localStorage.getItem("listaProductos"))
            console.log(this.ListaProductosComprar);
        },
        filtrar(){
          // console.log(sentido);
          let sentido = document.querySelector("input[type=radio]:checked").value;
          let propiedad = document.querySelector("#filtroSelect").value;
          console.log(sentido);
          console.log(propiedad);
          if(propiedad != "none"){
            if(sentido == "ascendente"){
              if(propiedad == "name"){
                this.ListaProductos = this.ListaProductos.sort((a,b) => b[propiedad].localeCompare(a[propiedad]));
              }else{
                this.ListaProductos = this.ListaProductos.sort((a,b) => a[propiedad] - b[propiedad]);
              }

            }else{
              if(propiedad == "name"){
                this.ListaProductos = this.ListaProductos.sort((a,b) => a[propiedad].localeCompare(b[propiedad]));
              }else{
                this.ListaProductos = this.ListaProductos.sort((a,b) => b[propiedad] - a[propiedad]);
              }
            }
          }
        },
        limpiarCarrito(){
          localStorage.clear();
          this.ListaProductosComprar = false;
          for(let producto of this.ListaProductos){
            producto.toBuy = false;
          }
        }
    },
    computed:{
        
    }
}).mount("#store");


// function getLike(id){
//     console.log(id);
// }