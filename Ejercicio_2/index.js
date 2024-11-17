const PORT = 3000;
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server started on port "+PORT);
});
// Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get('/',(req,res)=>{
    res.send("Mensaje de bienvenida")
 })
// Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos
app.get('/Productos',(req,res)=>{
    res.send("Listado de Productos")
 })
// Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.use(express.json())

app.post("/Productos", (req, res) => {
  res.send("Creando el producto: \n" + req.body);
});

// Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put("/Productos",(req,res)=>{
    res.send("Actualizar producto")
})
// Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete('/Productos',(req,res)=>{
    res.send("borrar un producto")
 })
// Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/Usuarios',(req,res)=>{
    res.send("listado de usuarios")
 })
// Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post('/Usuarios',(req,res)=>{
    res.send("Crear un usuario")
 })
// Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put("/Usuarios",(req,res)=>{
    res.send("Actualizar un usuario")
})
// Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete("/Usuarios",(req,res)=>{
    res.send("borrar un usuario")
})


