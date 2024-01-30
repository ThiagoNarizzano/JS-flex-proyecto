let productos = prompt("si lo desea ingrese un producto para saber su precio");

switch(productos) {
    case"arroz":
        alert("1800");
        break;
    case"fideos":
        alert("2000");
        break;
    case"galletas":
        alert("1600");
        break;
    default:
        alert("no tenemos ese producto")
        break;
}


