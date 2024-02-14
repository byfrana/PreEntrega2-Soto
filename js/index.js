function ventaDeIlustraciones() {
	// Lista de ilustraciones
	const ILUS = [
		{ codigo: 1, nombre: 'Dolce & Gabbana', precio: 35000 },
		{ codigo: 2, nombre: 'Versace', precio: 28000 },
		{ codigo: 3, nombre: 'Burberry', precio: 32000 },
	];

	let total = 0;
	let venta = true;

	while (venta) {
		// crear la lista de ilustraciones
		let lista = 'Selecciona las Ilustraciones en venta por su código: (1,2 o 3)\n';
		ILUS.forEach((ILUS) => {
			lista += `${ILUS.codigo} - ${ILUS.nombre} $${ILUS.precio}\n`;
		});

		// mostrar la lista para seleccionar
		let seleccionLista = parseInt(prompt(lista)) - 1;

		// es valida
		if (seleccionLista >= 0 && seleccionLista < ILUS.length) {
			// Obtener el producto seleccionado
			let ilustracion = ILUS[seleccionLista];
			// Sumar el precio del producto seleccionado al total
			total += ilustracion.precio;
			// Mostrar información del producto seleccionado
			console.log('Seleccionaste ' + ilustracion.nombre);
		} else {
			console.log('Selección inválida. Intenta otra vez.');
		}
		// Preguntar al usuario si desea agregar más productos
		let respuesta = prompt('¿Quieres agregar otra ilustración? (si, no)').toLowerCase();
		if (respuesta !== 'si') {
			venta = false;
		}
	}

	const neto = total / 1.19; // Calcular el total neto
	const iva = total - neto; // Calcular el IVA

	console.log('El total neto es: $' + neto.toFixed(0));
	console.log('El IVA es: $' + iva.toFixed(0));
	console.log('El total con IVA incluido es: $' + total.toFixed(0));
}

window.onload = function () {
	setTimeout(ventaDeIlustraciones, 2000);
};
