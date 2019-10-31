export enum Perfil {
    Cliente = 'Cliente',
    Recepcionista = 'Recepcionista',
    Especialista = 'Especialista',
    Administrador = 'Administrador'
}

export enum Especialidad {
    Oncologia = 'Oncología',
    Dermatologia = 'Dermatología',
    Odontologia = 'Odontología',
    Psicologia = 'Psicología'
}

export interface UsuarioInterface {
    Uid: string;
    Nombre: string;
    Email: string;
    Password: string;
    ImagenUrl?: string;
    Perfil?: Perfil;
    Especialidad?: Especialidad;
    Activo?: boolean;
}
