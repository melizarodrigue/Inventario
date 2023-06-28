function seleccionar() {
    let producto = ""
    let categoria = prompt("Ingrese categorias (granos, aseo, carnes, lacteos)")
    switch (categoria) {
        case "granos":
            producto = prompt("Ingrese producto (arroz, frijoles, lentejas)");
            
            break;

        case "aseo":
            producto = prompt("Ingrese producto (jabon, limpido, champu)");
            
            break;

        case "carnes":
            producto = prompt("Ingrese producto (pescado, res, cerdo)");
            
            break;

        case "lacteos":
            producto = prompt("Ingrese producto (yogurt, leche, kumis)");
            
            break;
    
        default:
            producto = "Ingrese categoria valida"
            break;
    }
    return producto
}

export {seleccionar}