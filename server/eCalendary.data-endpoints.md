# eCalendary Data
## Datos
Datos usados para eCalendary

### Creando el servicio
Para crear el servicio los datos enviados desde el front son:
```javascript
POST /api/servicios

{
	identificador_de_usuario: '<alguna secuencia alfanumérica>',
	nombre_servicio: "<Nombre del Servicio>",
	meses: [
		"ENERO",
		"FEBRERO",
		"ABRIL"
	], 
	dias: [
		"DOMINGO",
		"LUNES"
	],
	horarios: {
		inicio: <entero>,
		fin: <entero>
	},
	intervalo: <en segundos>
}
	 
``` 
Con una operación exitosa debería responder
```javascript
{
	identificador: '<ID alfanumérico>',
	enlace: '<enlace para compartir con los clientes>',
	mensaje: "Servicio creado"
}
```
### El usuario recupera el servicio
```javascript
GET /api/servicios?servicio_id=<UUID>
```
La respuesta debería ser
```javascript
{
	id: <UUID>,
	nombre_de_servicio: <nombre del servicio>,
	meses: [ "ENERO", "FEBRERO", "ABRIL" ]
	dias: [ "LUNES", "MARTES", "JUEVES" ]
	horarios: {
		inicio: <entero>,
		fin: <entero>
	},
	enlace: <URL para acceder a los horarios del servicio>
}
```
### El cliente consulta el calendario desde el enlace
Una vez el usuario creó el servicio, obtiene un enlace para compartir con sus clientes.  El cliente no realiza la consulta directa al servicio de REST API, lo hace el Front-end.
```javascript
GET /api/calendarios?servicio_id=<identificador alfanumérico>
```
Las respuesta debería ser
```javascript
{
	nombre_del_servicio: '<nombre del servicio>',
	meses: [ 
		"ENERO",
		"FEBRERO",
		"ABRIL"
	]
	dias: [
		"LUNES",
		"MARTES",
		"JUEVES"
	],
	horarios: [
		'<Formato dd-mm-YYYY>',
		...
	]
}
```
### El cliente reserva sus horarios
El cliente selecciona los horarios que requiere del usuario y envía la reserva.
```javascript
POST /api/reservas
{
	nombre_cliente: '<cadena>',
	contacto: '<dirección|teléfono|email>',
	servicio: '<ID del servicio>',
	horarios: [
		'<Formato YYYY-mm-dd HH:MM>',...
	]
}
```

### El cliente consulta disponibilidad de horarios según el día y nombre del servicio
Para un vistazo rápido de los horarios disponibles, el cliente puede solicitar los horarios de un día específico.
```javascript
GET /api/calendarios?servicio=<nombre del servicio>&fecha=<Formato YYYY-MM-DD>'
```
En caso que exista el servicio y la fecha
```javascript
{
	[
		'<Formato HH:MM>'
		, ...
	]
}
```
En caso que no exista el servicio debería responder
```javascript
{
	mensaje: 'El servicio solicitado no se encuentra registrado'
}
```
En caso que el día no esté habilitado para el servicio o que no exista debería responder
```javascript
{
	mensaje: 'La fecha solicitada no está disponible'
}
```
> Written with [StackEdit](https://stackedit.io/).
