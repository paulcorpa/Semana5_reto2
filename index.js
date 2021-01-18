var num_hamburguesas = +prompt ("Ingrese la cantidad de hamburguesas que desea comprar");

var sencilla = 0;
var doble = 0;
var triple = 0;


for( var compra = 0; compra < num_hamburguesas; compra++){
    var tipo_hamburguesa = +prompt("Hamburguesa sencilla --> Marque 1 " + "\n" +"Hamburguesa doble --> Marque 2   "+ "\n" + "Hamburguesa triple --> Marque 3 ");

    switch(tipo_hamburguesa)
    {
        case 1:
            sencilla++;
            break;
        case 2:
            doble++;
            break;
        case 3:
            triple++;
            break;
        default:
            console.log("Ingrese una opción valida");
            compra--;
            break;
    }
}
var cantidad_sencillas = sencilla * 20;
var cantidad_dobles = doble *25;
var cantidad_triples = triple *28;

console.log("Hamburguesas Sencillas: " + sencilla +  " Total: " +"$" + cantidad_sencillas  );
console.log("Hamburguesas dobles: " + doble + " Total: " +"$"+ cantidad_dobles);
console.log("Hamburguesas triples: " + triple + " Total: " + "$"+cantidad_triples);

var precio_total=0;

var metodo_pago = +prompt("Seleccione tipo de pago: " + "\n" + "Marque 1 --> Para pago en efectivo " +"\n"+" Marque 2 --> Para pago con trajeta")


    if(metodo_pago == 1)
    {
        precio_total = sencilla * 20 + doble * 25 + triple * 28; 
        console.log("El total a pagar es de: " +"$" +precio_total);
    }
    else if(metodo_pago == 2)
    {
        precio_total = sencilla * 20 + doble * 25 + triple * 28;
        console.log("El total a pagar es de: " +"$" +precio_total );
        precio_total = (precio_total * 0.05) + precio_total;
        console.log("Agregandole el %5 por ser con tarjeta el total seria: " + " $"+precio_total );
        
    }






