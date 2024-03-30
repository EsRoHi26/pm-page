export interface Usuarios {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export interface Proyectos {
    id: String;
    nombre: string;
    recursosN: String;
    presupuesto: number;
    correoColaboradores: string;
    estado: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date | null;
    historialCambios: any[];                                          
    correoEncargado: string;
    tareas: any[];
    
}
