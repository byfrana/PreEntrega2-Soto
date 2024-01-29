//Calculadora de IVA

function calculadoraDeIva() {
	let total; // monto total
	let neto; // monto neto
	let iva; // monto iva

	console.log(`Opción 1: Calcular en Monto Total y el IVA de un Neto`);
	console.log(`Opción 2: Calcular en Monto Neto y el IVA de un Total`);
	console.log(`Opción 3: Calcular en Monto Neto y el Total a partir del IVA`);
	const OPCION = parseFloat(prompt('Ingrese opcion 1, 2 o 3'));

	switch (OPCION) {
		case 1:
			neto = parseFloat(prompt('Ingrese un Monto Neto'));

			if (!isNaN(neto) && neto > 0) {
				iva = neto * 0.19;
				total = neto + iva;
				console.log(`El monto Neto ingresado es $${neto}. El IVA es de $${iva.toFixed(0)} y el monto Total con IVA es de $${total.toFixed(0)}`);
			} else {
				console.log('Ingrese un número válido para el Monto Neto');
			}
			break;
		case 2:
			total = parseFloat(prompt('Ingrese un Monto Total'));
			if (!isNaN(total) && total > 0) {
				neto = total / 1.19;
				iva = total - neto;
				console.log(`El monto Total ingresado es $${total}. El IVA es de $${iva.toFixed(0)} y el monto Neto es de $${neto.toFixed(0)}`);
			} else {
				console.log('Ingrese un número válido para el Monto Total');
			}
			break;
		case 3:
			iva = parseFloat(prompt('Ingrese el monto del IVA'));
			if (!isNaN(iva) && iva > 0) {
				neto = iva / 0.19;
				total = neto + iva;
				console.log(`El IVA ingresado es $${iva}. El Neto es $${neto.toFixed(0)} y el monto Total con IVA es de $${total.toFixed(0)}`);
			} else {
				console.log('Ingrese un número válido para el IVA');
			}
			break;

		default:
			console.log('Esta opción no existe.');
	}
}

window.onload = function () {
	// Establecer un retraso de 2000 milisegundos (2 segundos) antes de ejecutar la función
	setTimeout(calculadoraDeIva, 2000);
};
