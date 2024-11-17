const PORT = 3000;
const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());


const products = {
    description: 'Productos',
    items: [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      { id: 2, nombre: 'FIFA 23 PS5' , precio: 1000},
      {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
      {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
      {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ]
  }
  let productsJSON = JSON.stringify(products); //no necesario

app.listen(3000, () => {
  console.log("Server started on port "+PORT);
});

// Al llamar a localhost:3000/products se debe mostrar el siguiente JSON
app.get('/products',(req,res)=>{
    res.send(products);
 })
// Crear endpoint para poder crear un producto nuevo
app.post('/addProduct',(req,res)=>{
    let newProduct = { id: products.items.length+1, nombre: req.body.nombre , precio: req.body.precio} // Sensible mayusculas!!!
    products.items.push(newProduct);
    res.send(products);
})
// Crear endpoint para poder actualizar un producto
app.put('/updateProduct/id/:id',(req,res)=>{
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    products.items.forEach(product => {
        if(req.params.id == product.id){
            product.nombre = nombre;
            product.precio = precio;
        }
    });
    res.send(products);
})
// Crear endpoint para poder eliminar un producto
app.delete('/deleteProduct/id/:id',(req,res)=>{
    products.items.forEach(product => {
        if(req.params.id == product.id){
            product.nombre = "";
            product.precio = "";
        }
    });
    res.send(products);
})
// Crear filtro que muestre los productos con un precio entre 50 y 250.
app.get('/productsFilter50_250',(req,res)=>{
    console.log(typeof products.items); // no se porque me da objeto y no array
    
    
    //let newArray = products.items.filter(item=>{item.precio >= 50 && item.precio<=250 }); //No se porque no me va 
    let newArray = [];
    products.items.forEach(product => {
        if(product.precio >= 50 && product.precio<= 250){
            newArray.push(product);
        }
        
    });
    res.send(newArray);
 })
// Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto
app.get('/getProduct/id/:id',(req,res)=>{
    products.items.forEach(product => {
        if(req.params.id == product.id){
            res.send(product)
        }
    });
})
// Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto
app.get('/getProduct/nombre/:nombre',(req,res)=>{
    products.items.forEach(product => {
        if(req.params.nombre == product.nombre){
            res.send(product)
        }
    });
})
