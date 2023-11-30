export class Servicio{
    id_servicio?: number;
    tipo: string;
    nombre:string;
    descripcion:string;
    costo: number;
    extra: string;
    
	

    constructor(id_servicio: number,tipo:string, nombre:string, descripcion:string, costo:number, extra:string){
        this.id_servicio = id_servicio,
        this.tipo = tipo,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.costo = costo,
        this.extra = extra
    }
}

export interface IServicio {
    id_servicio?: number;
    tipo: string,
    nombre: string;
    descripcion: string;
    getInfo(): { nombre: string; descripcion: string };
  }
  
  export class Basico implements IServicio {
    constructor(
        public tipo:string,
        public nombre: string,
        public descripcion: string,
        
    ) {}
  
    getInfo() {
      return { nombre: this.nombre, descripcion: this.descripcion };
    }
  }
  
  export class Plus implements IServicio {
    constructor(
        public tipo: string,
        public nombre: string,
        public descripcion: string,
        public costo: number
    ) {}
  
    getInfo() {
      return { nombre: this.nombre, descripcion: this.descripcion, costo: this.costo };
    }
  }
  
  export class Premium implements IServicio {
    constructor(
        public tipo: string,
        public nombre: string,
        public descripcion: string,
        public costo: number,
        public extra: string
    ) {}
  
    getInfo() {
      return { nombre: this.nombre, descripcion: this.descripcion, costo: this.costo, extra: this.extra };
    }
  }

  export class ServicioFactory {
    createServicio(tipo: string, nombre: string, descripcion: string, costo: number, extra: string): IServicio {
      if (!tipo) {
        throw new Error('Tipo de servicio no proporcionado');
      }
      switch (tipo) {
        case 'basico':
          return new Basico(tipo, nombre, descripcion);
        case 'plus':
          return new Plus(tipo, nombre, descripcion, costo);
        case 'premium':
          return new Premium(tipo, nombre, descripcion, costo, extra);
        default:
          throw new Error('Tipo de servicio no válido');
      }
    }
  }
  