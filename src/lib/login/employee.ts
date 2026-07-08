import clientPromise from '@/lib/login/mongodb'

import type { Empleado } from '@/types/database'

export async function getEmployeeByLegajo(
  legajo: number,
): Promise<Empleado | null> {
  const client = await clientPromise

  const db = client.db(process.env.MONGODB_DB)

  const empleados = db.collection<Empleado>('empleados')

  const empleado = await empleados.findOne({
    legajo,
    activo: true,
  })

  if (!empleado) {
    return null
  }

  return JSON.parse(JSON.stringify(empleado)) as Empleado
}
