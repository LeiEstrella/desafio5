const express = require('express')
const router = express.Router();
let id=3;
let listaProductos=[
    {id:1 ,title:"Estufa electrica", price:20000,img:"../estufa1.png"},
    {id:2 ,title:"Placa termica", price:30000,img:"../estufa2.png"},
    {id:3 ,title:"Tiro balanceado", price:42000,img:"../estufa3.png"}
]

router.get('/listar',(req,res)=>{
    res.render('productos',{productos:listaProductos})
})
router.get('/agregar',(req,res)=>{
    res.render('agregarProducto')
})
//ruta parametrizada
router.get('/detalle/:id',(req,res)=>{
    let id = req.params.id;
    let miProducto = listaProductos.filter(p=>p.id == id);
    if(miProducto.length ==0){
        return res.send(`No hay productos`)
    }
    res.send(miProducto)
})
router.post('/',(req,res)=>{
    let datos = req.body;
    datos.id=id++;
    listaProductos=[...listaProductos,datos]
    //almacenar los datos
    res.redirect('/productos/agregar');
})
module.exports = router;