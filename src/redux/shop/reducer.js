//Reacciona a la acción que se está realizando/ejecutando en el momento y se le conocen como funciones puras

const INITIAL_STATE = {
    products: [
      {
        id: 1,
        name: "Tenis adidas",
        price: 50,
        imgUrl:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/0b9411c8634d419f84c0a9d8010d24e4_9366/Tenis_U_Path_Run_Negro_G28107_01_standard.jpg",
        description: "Tenis adidas Path Run en color negro",
        category: "Deportes",
        quantity: 1
      },
      {
        id: 2,
        name: "Remera Urban",
        price: 200,
        imgUrl:
          "https://www.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/6/4/640020852419036-1.jpg",
        description: "remera color azul",
        category: "Deportes",
        quantity: 1
      },
      {
        id: 3,
        name: "camisa adidas",
        price: 20,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnQBlr_-Bd6aoaokB4dRFZP5tb_bo2lNMDb6Xy8mDWI7o5lh7j2vChcupRB4h7sD50oJ_qP64&usqp=CAc",
        description: "camisa adidas Path Run en color gris",
        category: "Deportes",
        quantity: 1
      },
      {
        id: 4,
        name: "Short adidas",
        price: 69,
        imgUrl:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/6d8a2856a3e44e92b42da805004f50b3_9366/Shorts_Parma_16_Negro_AJ5880_01_laydown.jpg",
        description: "Shorts adidas color negro deportivos",
        category: "Deportes",
        quantity: 1
      },
      {
        id: 5,
        name: "Computadora Gamer HP",
        price: 250,
        imgUrl:
          "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06365240_2.png",
        description:
          "Computadora Gamer HP Pavilion color negro teclado retroiluminado",
        category: "Tecnologia",
        quantity: 1
      },
      {
        id: 6,
        name: "Gorra NIKE",
        price: 12,
        imgUrl:
          "https://www.innvictus.com/medias/IN-942212-631-1.png?context=bWFzdGVyfGltYWdlc3wxMjMzNDJ8aW1hZ2UvcG5nfGltYWdlcy9oMjEvaDFlLzkyNTMzNDMxMzM3MjYucG5nfGM4YTQ4YWYzMmI4YTJkMjE0Y2M5YzgxZmU1MTU1ZjdjNDA1ZWJlMDQ0MzJiMjc5NGI3NDkyOWJhNzY5NTNjMGI",
        description: "Gorra NIKE, color rosa, deportiva",
        category: "Deportes",
        quantity: 1
      }
    ],
    cart: [],
    toggleCart: false
  };
  
  export const shopReducer = (previousState = INITIAL_STATE, action) => {
    switch (action.type) {
      case "ADDTOCAR":
        //code...
        const id = action.payload;
        const cart = [...previousState.cart];
        const objectProduct = previousState.products.find((e) => e.id === id);
        //Buscar si ya existe el producto en el carrito de compras
        const productCart = cart.find(
          (product) => product.id === objectProduct.id
        );
        let newCart = [];
        if (productCart) {
          let indice = cart.findIndex(
            (product) => product.id === objectProduct.id
          );
          //Voy a sumar en uno la cantidad
          productCart.quantity += 1;
          //Producto modificado donde se le sumo uno
          cart[indice] = productCart;
          newCart = cart;
        } else {
          //Voy agregar el producto al arreglo de carrito
          newCart = [...previousState.cart, objectProduct];
        }
        return { ...previousState, cart: newCart };
      case "DELETE_PROD":
        const productsCart = [...previousState.cart];
        if (productsCart[action.payload-1].quantity > 1) {
          let product = productsCart.findIndex(p=>p.id===action.payload)
          productsCart[product].quantity-=1;
        } else {
          productsCart.splice(action.payload-1, 1);
        }
  
        return { ...previousState, cart: productsCart };
      case "TOGGLE_CART":
        return { ...previousState, toggleCart: !previousState.toggleCart };
      default:
        return previousState;
    }
  };
  
  //arreglo.find(elemento => expresion ); regresa el elemento que coincida con la expresión dada
  