// El cliente consulta el calendario desde el enlace
// Una vez el usuario creó el servicio, obtiene un enlace para compartir con sus clientes. 
// El cliente no realiza la consulta directa al servicio de REST API, lo hace el Front-end.

// 🔽 GET /api/calendarios?servicio_id=<identificador alfanumérico>
export const calendarByBusinessMock = {
	nombre_del_servicio: "Peluqueria Don Juan",
	meses: [ 9, 10, 11, 12 ],
	dias: [ 1,2,3,4,5 ],
	fechas: [
		'<Formato dd-mm-YYYY>',
		'<Formato dd-mm-YYYY>',
	]
}



// El cliente reserva sus horarios
// El cliente selecciona los horarios que requiere del usuario y envía la reserva.

// 🔼 POST /api/reservas
export const reserveTimeMock = {
	nombre_cliente: "Peluqueria Don Juan",
	contacto: '<dirección|teléfono|email>',
	servicio: "62684321854315",
	horarios: [
		'<Formato YYYY-mm-dd HH:MM>',
		'<Formato YYYY-mm-dd HH:MM>',
		'<Formato YYYY-mm-dd HH:MM>',
	]
}



// El cliente consulta disponibilidad de horarios según el día y nombre del servicio
// Para un vistazo rápido de los horarios disponibles, el cliente puede solicitar los horarios de un día específico.

// GET /api/calendarios?servicio=<nombre del servicio>&fecha=<Formato YYYY-MM-DD>'

{
	[
		0, 1, 2, 3, 4,
	]
}