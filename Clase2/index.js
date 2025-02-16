// App para validar entrada a parque temático

//1.Edad y altura, tener al menos 12 años y medir 1.40m
//2. Pago o pase, debe haber hecho el pago de $20 o tener pase VIP
//3. Condicion de salud, no tener fiebre ni tos
//4. Acompañante, si el visitant es menor de 16 años, debe ir acompañado de un adulto

let edad = Number(prompt("Ingresa tu edad: "));
let altura = Number(prompt("Ingresa tu altura en cm: "));
let pago = prompt("¿Hiciste el pago de $20? (si/no): ").toLocaleLowerCase() === 'si';
let pase = prompt("¿Tienes pase VIP? (si/no): ").toLocaleLowerCase() === 'si';
let salud = prompt("¿Tienes fiebre o tos? (si/no): ").toLocaleLowerCase() === 'si';
let acompanante = prompt("¿Vienes acompañado de un adulto? (si/no): ").toLocaleLowerCase() === 'si';

if(!(pago||pase)||salud||altura<140||edad<12||!(edad>=16||acompanante)){
    alert("Lo sentimos, no puedes pasar.");
}else{
    alert("Bienvenido, que tenga una excelente experiencia");
}

