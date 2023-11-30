export class Vuelos{
    id_vuelos?: number;
    id_empresa:number;
	id_servicio: number;
    origen: string;
    destino: string;
    hora_salida: string;
    asientos_dis: number;
    fecha_vuelos: string;
    tipo_avion: string;
    costo: number;

    constructor(id_vuelos: number,id_empresa:number, id_servicio: number, origen: string, destino: string, hora_salida: string, asientos_dis: number, fecha_vuelos: string, tipo_avion: string, costo: number){
        this.id_vuelos = id_vuelos,
        this.id_empresa = id_empresa,
	    this.id_servicio = id_servicio,
        this.origen = origen,
        this.destino = destino,
        this.hora_salida = hora_salida,
        this.asientos_dis = asientos_dis,
        this.fecha_vuelos = fecha_vuelos,
        this.tipo_avion= tipo_avion,
        this.costo = costo
    }
}

