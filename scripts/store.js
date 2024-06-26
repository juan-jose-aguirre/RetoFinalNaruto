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
  },
  {
    id: 6,
    name: "bijus paint",
    price: 22.99,
    image: "https://tcustompc.com/cdn/shop/files/TailmonstersCuadro1.jpg?v=1688413815&width=713",
    description: "Headband with the symbol of the Hidden Leaf Village (Konoha).",
    toBuy:false
  },
  {
    "id": 4,
    "name": "Sharingan Contact Lenses",
    "price": 19.99,
    "image": "https://wantlens.com/wp-content/uploads/2023/06/Sba2f79861ac349cda05cb3760af5a24eL.jpg_960x960-600x600.jpg",
    "description": "Cosmetic contact lenses designed to look like the Sharingan eye technique.",
    "toBuy": false
  },
  {
    "id": 5,
    "name": "Konoha Headband",
    "price": 9.99,
    "image": "https://tcustompc.com/cdn/shop/files/Kakashi_NarutoCuadro1.jpg?v=1690313569&width=713",
    "description": "Headband with the symbol of the Hidden Leaf Village (Konoha).",
    "toBuy": false
  },
  {
    "id": 6,
    "name": "jakect",
    "price": 24.99,
    "image": "https://down-co.img.susercontent.com/file/ad507ae50d425e7d8ce2ddb9d8fd4dcf_tn",
    "description": "Action figure of Naruto Uzumaki in his iconic outfit.",
    "toBuy": false
  },
  {
    "id": 7,
    "name": "Sasuke Action Figure",
    "price": 84.99,
    "image": "https://m.media-amazon.com/images/I/71lqGwffoZL._AC_SL1500_.jpg",
    "description": "Action figure of Sasuke Uchiha with his sword.",
    "toBuy": false
  },
  {
    "id": 8,
    "name": "Naruto T-shirt",
    "price": 12.99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTa0hRgEAqZLLKXH_KiT4wM_9du2qlvHt-w&s",
    "description": "Black t-shirt with a print of Naruto in action.",
    "toBuy": false
  },
  {
    "id": 9,
    "name": "rook lee ",
    "price": 10.99,
    "image": "https://acdn.mitiendanube.com/stores/001/161/337/products/cci-39564045557132965-8958a1b1b2ec990bce17100918150131-1024-1024.jpg",
    "description": "Poster of Kakashi Hatake with his Sharingan revealed.",
    "toBuy": false
  },
  {
    "id": 10,
    "name": "Itachi Uchiha Keychain",
    "price": 5.99,
    "image": "https://northlandindia.com/storage/media/iqnSGecN9fGqWTUmEi76bie5mYpi69RbS69BWR0I.jpg",
    "description": "Keychain featuring Itachi Uchiha's iconic red cloud.",
    "toBuy": false
  },
  {
    "id": 11,
    "name": "Naruto Ramen Bowl",
    "price": 18.99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj7gJomYVdN7EroArTgt9J5aBUWsJdrGfBA&sg",
    "description": "Ceramic ramen bowl with a Naruto Uzumaki design.",
    "toBuy": false
  },
  {
    "id": 12,
    "name": "Kakashi tshirt",
    "price": 29.99,
    "image": "https://http2.mlstatic.com/D_NQ_NP_913725-MCO46091287041_052021-O.webp",
    "description": "Backpack designed to look like Gaara's sand gourd.",
    "toBuy": false
  },
  {
    "id": 13,
    "name": "Naruto Paintng",
    "price": 65.99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsw9FrdczO5ljWzdqQWItTl6QejJrEQEQ2g&s",
    "description": "Metal-plated headband with the Naruto symbol.",
    "toBuy": false
  },
  {
    "id": 14,
    "name": "glass",
    "price": 14.99,
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1NZnRloz1ns-WsVIkV5iBLpioj39-Gz8Xha-pDHY3DhcOUfNpKV0MG3UwzU2IekmhPbouG1u1wQVZHVuk8im_7fjdHbVsA-mHBmfObrzWxR2rNBPXATcYfg&usqp=CAE",
    "description": "Set of rings representing the Akatsuki members.",
    "toBuy": false
  },
  {
    "id": 15,
    "name": "toy Naruto",
    "price": "19.99",
    "image": "https://i5.walmartimages.com/asr/25f6920f-87f2-43b1-8c47-b18c5661b547.ca3ff71f75f9aace8596ef94158aad5b.jpeg",
    "description": "Figure of Hinata Hyuga in her combat stance.",
    "toBuy": false
  },
  {
    "id": 16,
    "name": "coleccion Gaara",
    "price": 39.99,
    "image": "https://http2.mlstatic.com/D_NQ_NP_990089-MLA49336910853_032022-O.webp",
    "description": "Complete DVD set of Naruto Shippuden series.",
    "toBuy": false
  },
  {
    "id": 17,
    "name": "Sakura Haruno Plush",
    "price": 14.99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJkF_otwlr-3LU4R2JGzvqvPNyOmHaMiHaQ&s",
    "description": "Plush toy of Sakura Haruno in her ninja outfit.",
    "toBuy": false
  },
  {
    "id": 18,
    "name": "Naruto Manga Box Set",
    "price": 99.99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi9kt70-R61d4i2HECySzeRaEKS76LXCuFg&s",
    "description": "Box set of the complete Naruto manga series.",
    "toBuy": false
  },
  {
    "id": 19,
    "name": "Minato Namikaze Action Figure",
    "price": 29.99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5pdjdHNjKptPd20DbMs8i-9MEaBGx0vHWA&s",
    "description": "Action figure of Minato Namikaze with his Hokage cloak.",
    "toBuy": false
  },
  {
    "id": 20,
    "name": "Naruto Poster Set",
    "price": 15.99,
    "image": "https://http2.mlstatic.com/D_913945-MLA48482860264_122021-C.jpg",
    "description": "Set of 5 posters featuring different Naruto characters.",
    "toBuy": false
  },
  {
    "id": 21,
    "name": "Naruto Blanket",
    "price": 34.99,
    "image": "https://ticklemysenses.s3.amazonaws.com/wp-content/uploads/2023/04/NarutoBlanketFlannelThrowRoomDecoration_4.jpg",
    "description": "Soft blanket with Naruto and Kurama design.",
    "toBuy": false
  }
];

const { createApp } = Vue;

const app = createApp({

  data(){
      return{
          ListaProductosBK:products,
          ListaProductos:products,
          listaCarrito:[],
          textoBuscar:""
      }
  },
  created(){
      this.main()
  },
  methods:{
      main(){
        if(JSON.parse(localStorage.getItem("listaCarrito"))){
          this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
          for(let productoCarrito of this.listaCarrito){
            for(let productoDisponible of this.ListaProductos){
              if(productoDisponible.id == productoCarrito.id){
                productoDisponible.toBuy = !productoDisponible.toBuy
              }
            }
          }
        }
      },
      toBuy(producto){
          for(let productoDisponible of this.ListaProductos){
            if(productoDisponible == producto){
              if(!this.listaCarrito.includes(producto)){

                productoDisponible.toBuy = !productoDisponible.toBuy;
                this.listaCarrito.push(producto)
              }
              
            }
          }
          localStorage.setItem("listaCarrito",JSON.stringify(this.listaCarrito));
          this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"))
      },
      filtroBuscar(){
        if(this.textoBuscar.length != 0){
          this.ListaProductos = [...this.ListaProductosBK].filter(producto => producto.name.toLowerCase().includes(this.textoBuscar.trim().toLowerCase()))
          this.filtrar()
        }else{
          this.ListaProductos = [...this.ListaProductosBK];
          this.filtrar()
        }
      }
,      filtrar(){
        let sentido = document.querySelector("input[type=radio]:checked").value;
        let propiedad = document.querySelector("#filtroSelect").value;
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
      limpiarCarrito(producto){
        if(this.listaCarrito.length == 1){

          for(let productoDisponible of this.ListaProductos){
            if(productoDisponible.id == producto.id){
              productoDisponible.toBuy = !productoDisponible.toBuy;
            }
          }
          this.listaCarrito = [];
          localStorage.clear();
        }else{
          for(let productoDisponible of this.ListaProductos){
            if(productoDisponible == producto){
              productoDisponible.toBuy = !productoDisponible.toBuy;
            }
          }
          let index = 0;
          for(let productoCarrito of this.listaCarrito){
            if(productoCarrito.id == producto.id){
              index = this.listaCarrito.indexOf(productoCarrito);
            }
          }
          this.listaCarrito.splice(index,1);
          localStorage.setItem("listaCarrito",JSON.stringify(this.listaCarrito))
        }
      },
      vaciarCarrito(){
        for(let productoDisponible of this.ListaProductos){
          productoDisponible.toBuy = false; 
        }
        this.listaCarrito = [];
        localStorage.clear();
      }
  },
  computed:{}
}).mount("#store");

