

GET /api/calendarios?servicio_id=<identificador alfanumérico>
{
	nombre_del_servicio: '<nombre del servicio>',
	meses: [ 
		0,	// ENERO
		1,	// FEBRERO
		3	// ABRIL
	]
	dias_semana: [
		1,	// LUNES
		2,	// MARTES
		4	// JUEVES
	],
	fechas_disponibles: [
		
		fechas
	]
}

// al seleccionar el dia pido
GET /api/calendarios?servicio=<nombre del servicio>&fecha=<Formato YYYY-MM-DD>'

recibo
{
	[
		{ hora: '<Formato HH:mmTZD>', disponible: <true|false> }
		, ...
	]
}

//agendar

POST /api/reservas
{
	nombre_cliente: '<cadena>',
	contacto: '<dirección|teléfono|email>',
	servicio: '<ID del servicio>',
	horarios: [
		2023-09-06 01:00,
        2023-09-06 02:00,
        2023-09-06 03:00
	]
    
} 