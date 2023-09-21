//Meses del año

export const meses = [
  { value: "Enero", label: "Enero" },
  { value: "Febrero", label: "Febrero" },
  { value: "Marzo", label: "Marzo" },
  { value: "Abril", label: "Abril" },
  { value: "Mayo", label: "Mayo" },
  { value: "Junio", label: "Junio" },
  { value: "Julio", label: "Julio" },
  { value: "Agosto", label: "Agosto" },
  { value: "Septiembre", label: "Septiembre" },
  { value: "Octubre", label: "Octubre" },
  { value: "Noviembre", label: "Noviembre" },
  { value: "Diciembre", label: "Diciembre" },
];
export const mesesRAW = [
  { value: "0", label: "Enero" },
  { value: "1", label: "Febrero" },
  { value: "2", label: "Marzo" },
  { value: "3", label: "Abril" },
  { value: "4", label: "Mayo" },
  { value: "5", label: "Junio" },
  { value: "6", label: "Julio" },
  { value: "7", label: "Agosto" },
  { value: "8", label: "Septiembre" },
  { value: "9", label: "Octubre" },
  { value: "10", label: "Noviembre" },
  { value: "11", label: "Diciembre" },
];


//Dias de la semana

export const dias = [
  { value: "Domingo", label: "Domingo"},
  { value: "Lunes", label: "Lunes"},
  { value: "Martes", label: "Martes"},
  { value: "Miercoles", label: "Miercoles"},
  { value: "Jueves", label: "Jueves"},
  { value: "Viernes", label: "Viernes"},
  { value: "Sabado", label: "Sabado"},
]

export const diasRAW = [
  { value: "0", label: "Domingo"},
  { value: "1", label: "Lunes"},
  { value: "2", label: "Martes"},
  { value: "3", label: "Miercoles"},
  { value: "4", label: "Jueves"},
  { value: "5", label: "Viernes"},
  { value: "6", label: "Sabado"},
]

//Hora 

export const Hora = [
  { value: "0" ,  label: "00:00" },
  { value: "1" ,  label: "01:00" }, 
  { value: "2" ,  label: "02:00" },
  { value: "3" ,  label: "03:00" },
  { value: "4" ,  label: "04:00" },
  { value: "5" ,  label: "05:00" },
  { value: "6" ,  label: "06:00" },
  { value: "7" ,  label: "07:00" },
  { value: "8" ,  label: "08:00" },
  { value: "9" ,  label: "09:00" },
  { value: "10" , label: "10:00" },
  { value: "11" , label: "11:00" }, 
  { value: "12" , label: "12:00" },
  { value: "13" , label: "13:00" },
  { value: "14" , label: "14:00" },
  { value: "15" , label: "15:00" },
  { value: "16" , label: "16:00" },
  { value: "17" , label: "17:00" },
  { value: "18" , label: "18:00" },
  { value: "19" , label: "19:00" },
  { value: "20" , label: "20:00" },
  { value: "21" , label: "21:00" }, 
  { value: "22" , label: "22:00" },
  { value: "23" , label: "23:00" },
  { value: "24" , label: "24:00" },
];

//Duracion de la cita

export const intervalo = [
  { value: "15", label: "15 Min"},
  { value: "30", label: "30 Min"},
  { value: "45", label: "45 Min"},
  { value: "60", label: "60 Min"},
]


// El usuario recupera el servicio

// 🔽 GET /api/servicios?servicio_id=<UUID></UUID>
export const myBussinesData = {
	identificador: "01d32f3c-40da-4db8-a154-c006845f8399",
	nombre_del_servicio: "Peluqueria Don Juan",
	meses: [ 9, 10, 11, 12 ],
	dias: [ 1,2,3,4,5 ],
	horarios: {
		inicio: 8,
		fin: 15
	},
	enlace: "https://c13-15-e-calendary.onrender.com/api/calendarios?service_id=01d32f3c-40da-4db8-a154-c006845f8399"
}