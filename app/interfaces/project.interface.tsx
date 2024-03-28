export interface Proyectos {
    _id:                 string;
    nombre:              string;
    recursosN:           string;
    presupuesto:         number;
    correoColaboradores: string[];
    estado:              string;
    descripcion:         string;
    fechaInicio:         Date;
    historialCambios:    any[];
    correoResponsable:   string;
    tareas:              Tarea[];
    __v:                 number;
    fechaFin?:           Date | null;
}

export interface Tarea {
    nombre:          string;
    descripcion:     string;
    correoEncargado: string;
    puntos:          number;
    estado:          string;
    _id:             string;
}
