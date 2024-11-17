
 let bAllProducts = document.getElementById("products");
 let bAddProduct = document.getElementById("addProducts");
 let bSearchProduct = document.getElementById("searchProduct");
 let bDeleteProducts = document.getElementById("deleteProducts");
 let divResult = document.getElementById("result");

 let products = "";

 //funciones axios
 async function getAllProducts() {
    console.log(divResult);
    
    divResult.innerHTML = "";
    try {
      const res = await axios.get("http://localhost:3000/products");
      console.log("axios",res.data.items);
      productos = res.data.items;
      productos.forEach(producto => {
        divResult.innerHTML += `<strong>Producto ${producto.id}:</strong> <br> <strong>Nombre:</strong> ${producto.nombre}<br><strong>Precio:</strong> ${producto.precio}<hr>`
      });

      
    } catch (error) {
      console.error(error);
    }
  }
  //eventos
  bAllProducts.addEventListener("click",getAllProducts);