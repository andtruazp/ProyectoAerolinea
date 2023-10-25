export class Empresa {
    id_empresa? : number;
    nombre : string;
    estatus : string;
    correo : string;
    direccion : string;
    telefono : string;
    poli_condi : string;

    constructor(id_empresa : number, nombre : string, estatus : string, correo : string, direccion : string, telefono : string, poli_condi : string){
        this.id_empresa = id_empresa;
        this.nombre = nombre;
        this.estatus = estatus
        this.correo = correo;
        this.direccion = direccion;
        this.telefono = telefono;
        this.poli_condi = poli_condi;
    }
}

