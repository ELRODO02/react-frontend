export interface Empleado {
    id?: number;
    nombre: string;
    apaterno: string;
    amaterno: string;
    direccion: string;
    telefono: string;
    ciudad: string;
    estado: string;
    email: string;
    usuario: string;
    password: string;
    rol?: string;
    activo?: string;
    activeToken?: string | null
}

export interface LoginPayload {
    usuario: string;
    password: string;
}

export interface DecodedToken {
    id: number;
    nombre: string;
    apaterno: string;
    amaterno: string;
    rol: string;
    iat: number;
    exp: number;
}
    
