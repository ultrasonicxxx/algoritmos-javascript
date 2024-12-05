// Saludar

function saludar() {
    alert("Hola usuario");
}

function opBasicas() {
    // Declaro las variables necesarias para la ejecucion
    let A,B,S,R,M,D  = 0;
    // Notifico al usuario que realiza este algoritmo 
    alert("Este algoritmo realiza una suma, resta, multiplicacion, división entre dos valores ingresados")
    // Capturar los datos de entrada o Inputs
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));
    // Realiza el proceso
    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;
    // Dar el resultado (Output)
    alert("El resultado de la suma es: " + S);
    alert("El resultado de la resta es: " + R);
    alert("El resultado de la multiplicación es: " + M);
    alert("El resultado de la división es: " + D);



}

function areaTriangulo() {
    let B,H,A = 0;

    alert("Este algoritmo calcula el área de un triangulo a partit de su base y su altura");
    
    B = parseInt(prompt("Ingrese el valor de Base"));
    H = parseInt(prompt("Ingrese el valor de Altura"));

    A = (B*H)/2;

    alert("El area del triangulo es: " + A);
    
}

function conversionUnidades() {
    
    let M, P, CM, KM = 0;

    alert("Este algoritmo convierte en centimetros, pulgadas y kilometros un valor dado en metros")

    M = parseInt(prompt("Ingresse el valor en metros a convertir"));
    
    P = M * 39.37;
    CM = M * 100;
    KM = M / 1000;

    alert(M + " metros en pulgadas son: " + P);
    alert(M + " metros en centimetros son: " + CM);
    alert(M + " metros en kilometros son: " + KM);
}

// Algoritmos condicionales

function servicioMilitar(){
    let edad = 0;
    let genero = "";
    let hijoUnico = "";

    alert("Algoritmo que determina si eres apto para presentar el servicio militar obligatorio");

    edad = parseInt(prompt("Por favor ingrese su edad"));
    genero = prompt("Por favor ingrese su genero: F- femenino o M- Masculino");
    hijoUnico = prompt("Por favor ingrese Si o No, de ser hijo unico");

    if (edad>=18 && edad<=26) {

        if(genero === "M"){

            if(hijoUnico === "No") {

                alert("Eres apto para prestar el servicio militar");

            }else{
                alert("No eres apto para presentr el servicio militar");
            }

        }else{
            alert("No eres apta para presentar servicio militar");
        }

    }else{
        alert("No es apto por su edad");
    }
}

function mayorDosN(){

    let N1,N2 = 0;

    alert("Valida el mayor de dos numeros");

    N1 = parseInt(prompt("Ingrese el primer valor"));
    N2 = parseInt(prompt("Ingrese el segundo valor"));

    if (N1 === N2) {
        alert("No hay ningun numero mayor. Ambos son iguales")
    }else if (N1>N2){
        alert(N1 + " es mayor que " + N2);
    }else{
        alert(N2 + " es mayor que " + N1);
    }
}

function paroImpar(){

    let X = 0;

    alert("Determinar si un numero es par o impar");

    X = parseInt(prompt("Ingrese el numero a varificar"));

    if (X % 2 === 0){
        alert(X + " es un numero par");
    }else{
        alert(X + " es un numero impar");
    }
}

function rangoNumeros(){

    alert("Imprimir en consola los numeros existentes entre un valor inicial y un valor final")

    let inicio = parseInt(prompt("Ingrese el valor de punto de partida"));
    let fin = parseInt(prompt("Ingrese el valor de punto de final"));

    let contador = inicio;

    while (contador <= fin){
        console.log(contador);

        contador ++;
    }

    alert("En conosola mostraremos los numero que hay entre " + inicio + " y " + fin);
}

function sumaRango(){

    alert("Suma los valores entre un rango ingresado");

    let inicio = parseInt(prompt("Ingrese el punto de partida"));
    let fin = parseInt(prompt("Ingrese el punto de final"));

    let suma = 0;

    contador = inicio;

    while (contador <= fin){
        suma += contador;

        contador ++;
    }
    alert ("La suma de los numeros de " + inicio + " al " + fin + " es: " + suma);
}

function esPrimo(){
    alert ("Determina si un numero es primo");

    let numero = parseInt(prompt("Ingrese el numero"));

    if (numero<=1){
        alert(numero + " no es un numero primo"); 
        return; 
    }

    for(let i = 2; i <= numero/2; i++){

        if(numero % i === 0){
            alert(numero + " no es un numero primo");
            return;
        }
    }
    alert(numero + " si es un numero primo");
}

function conversionMoneda(){

    // Objeto como dato de partida
    let tasaCambio = {
        USD : 0.00028,
        EUR : 0.00024
    }

    alert("Realiza la conversion de dinero en pesos colombianos a dolares y euros");

    let cantidadPesos = parseFloat(prompt("Ingrese la cantidad a convertir"));
    let tasa = parseInt(prompt("Seleccione la divisia a cambiar: USD = 1, EUR 2"));
    let conversion;
    switch (tasa) {
        case 1:
            conversion = cantidadPesos * tasaCambio.USD;
            alert (cantidadPesos + " Pesos colombianos son " + conversion + " Dolares");
            break;
        case 2:
            conversion = cantidadPesos * tasaCambio.EUR;
            alert (cantidadPesos + " Pesos colombianos son " + conversion + " Euros");
            break;

        default:
            alert("Tasa de cambio no permitida")
            break;
    }
}

function calcularPromedio(){
    alert("Este algoritmo determina el promedio de calificaciones ingresadas por el usuario");

    let calificaciones =[];

    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones"));

    for(let i = 1; i<= cantidadNotas; i++){
        calificaciones.push(parseFloat(prompt("Ingrese la calificaciones #" + i + " :")));
    }

    let sumaCalif = 0;
    for(let calificacion of calificaciones){
        sumaCalif += calificacion;
    } 

    let promedio = sumaCalif/calificaciones.length;
    alert("El promedio de las calificaciones es: " + promedio);
}

function consultarPeli() {

    alert("Este algoritmo muestra la informacion de una pelicula elegida");

    let peliculas = [
        {
            titulo : "El padrino",
            director :"Nombre del director",
            anio : "1972",
            genero : "Drama"
        },
        {
            titulo : "Intelestelar",
            director :"Nombre del director",
            anio : "2014",
            genero : "Ficcion"
        },
        {
            titulo : "Harry Potter",
            director :"Nombre del director",
            anio : "2008",
            genero : "Ficcion"
        }
    ];
    
    let nombrePelicula = prompt("Por favor ingrese el nombre de la pelicula");

    let infoPelicula = "";

    for(let pelicula of peliculas){

        if(pelicula.titulo === nombrePelicula){
            infoPelicula = "Titulo: " + pelicula.titulo + "\n" +
                            "Director: " + pelicula.director + "\n" +
                            "Año: " + pelicula.anio + "\n" +
                            "Genero: " + pelicula.genero;
            break;
        }
    }
    if (infoPelicula !== ""){
        alert("La pelicula consultada tiene la siguiente informacion " + infoPelicula);
    }
    else{
        alert("La pelicula consultada no se encuentra en el sistema");
    }
}