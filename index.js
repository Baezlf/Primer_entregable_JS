class Producto{
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    compra(cant){
        this.cantidad -= cant;
    }
}

const manga = new Producto("Manga", 1000, 20);
const comic = new Producto("Comic", 1500, 20);
const libro = new Producto("Libro", 3500, 20);

let validar = (a) => {while(a !== "si" && a !== "no"){
    a = prompt(`Opcion incorrecta.
    Desea continuar la comprar? (si, no)`).toLowerCase();
    }
    return a;
}

let calcularPrecio = (a, b) => {return a * b}

let operacionCompra = (nom, pre, stk) => {
    cant = parseInt(prompt(`Nombre: ${nom}
    Precio: $${pre}
    Stock diponible: ${stk}
    Cuantas unidades desea comprar?`));
    if (cant < 0){
        alert(`Coloque una cantidad valida.`)
        precioTotal = 0;
        cant = 0;
    } else if (cant <= stk){
        precioTotal = calcularPrecio(pre, cant);
    } else {
        alert(`No hay stock disponible!
        Disculpe la molestia`);
        precioTotal = 0;
        cant = 0;
    }
    
    return [ precioTotal, cant]
}

let mensaje = (a) => {
    alert(`Precio final a pagar: $${a}`)
}

let despedida1 = () => {alert(`Gracias por su compra!`)}

let despedida2 = () => {alert(`Gracias por su visita!`)}

let eleccion = prompt(`Bienvenido a la comiqueria! Desea comprar? (si, no)`).toLowerCase();
eleccion = validar(eleccion);

let precioFinal = 0;


while (eleccion != "no"){
    let opcion = prompt(`Que desea comprar?
    ${manga.nombre}
    ${comic.nombre}
    ${libro.nombre}`).toLowerCase();
    switch (opcion){
        case "manga":
            const [precioTotalm, cantm] = operacionCompra(manga.nombre, manga.precio, manga.cantidad); 
            precioFinal += precioTotalm;
            manga.compra(cantm);  
            break;
        case "comic":
            const [precioTotalc, cantc] = operacionCompra(comic.nombre, comic.precio, comic.cantidad); 
            precioFinal += precioTotalc;
            comic.compra(cantc); 
            break;
        case "libro":
            const [precioTotall, cantl] = operacionCompra(libro.nombre, libro.precio, libro.cantidad); 
            precioFinal += precioTotall;
            libro.compra(cantl); 
            break;
        default: alert("Opcion incorrecta!");
    }
    eleccion = prompt(`Desea continuar comprando? (si, no)`).toLowerCase();
    validar(eleccion);
    if (eleccion === "no"){
        mensaje(precioFinal);
    }
}

if (precioFinal === 0){
    despedida2();
}else{
    despedida1();
}