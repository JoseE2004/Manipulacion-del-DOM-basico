var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 250},
    {nombre: "Adifonos", costo: 1700},
];
//-----------------------------------------//

var articulosFiltrados = articulos.filter(function(){
    return articulo.costo <= 500
});

articulosFiltrados


var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});
nombreArticulo

//----------------------
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})


articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});
articulosBaratos