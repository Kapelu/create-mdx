export interface Usuario {
  legajo: number
  usuario: string
  password: string
}

export interface Empleado {
  legajo: number
  dni: number
  imagen: string
  apellido: string
  nombres: string
  fechaNacimiento: string
  direccion: string
  telefono: string
  email: string
  puesto: string
  activo: boolean
}
