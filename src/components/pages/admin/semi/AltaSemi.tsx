'use client'

import {
  Boxes,
  CalendarDays,
  CircleGauge,
  Container,
  Gauge,
  Ruler,
  Settings,
  ShieldCheck,
  Truck,
  Weight,
  Wrench,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import FormInput from '@/components/ui/form/FormInput'
import FormSection from '@/components/ui/form/FormSection'
import FormSelect from '@/components/ui/form/FormSelect'

export default function AltaSemi() {
  const [techoCorredizo, setTechoCorredizo] = useState(false)

  const [levantaEje, setLevantaEje] = useState(true)

  const [abs, setAbs] = useState(true)
  const [ebs, setEbs] = useState(true)

  const [cortinasCorredizas, setCortinasCorredizas] = useState(true)
  const [tensoresAutomaticos, setTensoresAutomaticos] = useState(true)
  const [cajaHerramientas, setCajaHerramientas] = useState(true)
  const [lucesLed, setLucesLed] = useState(true)
  const [escaleraTrasera, setEscaleraTrasera] = useState(true)
  const [paragolpesRetractil, setParagolpesRetractil] = useState(true)
  const [guardabarrosPlasticos, setGuardabarrosPlasticos] = useState(true)
  const [cintaReflectiva, setCintaReflectiva] = useState(true)

  const [activo, setActivo] = useState(true)

  const handleReset = () => {
    setTechoCorredizo(false)

    setLevantaEje(true)

    setAbs(true)
    setEbs(true)

    setCortinasCorredizas(true)
    setTensoresAutomaticos(true)
    setCajaHerramientas(true)
    setLucesLed(true)
    setEscaleraTrasera(true)
    setParagolpesRetractil(true)
    setGuardabarrosPlasticos(true)
    setCintaReflectiva(true)

    setActivo(true)
  }

  return (
    <form className='space-y-6 p-6'>
      <FormSection
        title='Identificación de la Unidad'
        icon={Truck}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Patente'
            name='patente'
            className='col-span-3'
            defaultValue='AE001AA'
            maxLength={7}
            required
          />

          <FormInput
            label='Marca'
            name='marca'
            className='col-span-3'
            defaultValue='Maldonado'
            required
          />

          <FormInput
            label='Modelo'
            name='modelo'
            className='col-span-3'
            defaultValue='Sider'
            required
          />

          <FormInput
            label='Año'
            name='anio'
            type='number'
            className='col-span-3'
            defaultValue={2025}
            min={1900}
            required
          />

          <FormSelect
            label='Tipo de Vehículo'
            name='tipoVehiculo'
            className='col-span-4'
            defaultValue='Semirremolque'
            required>
            <option value='Semirremolque'>Semirremolque</option>
            <option value='Acoplado'>Acoplado</option>
            <option value='Bitren'>Bitren</option>
          </FormSelect>

          <FormInput
            label='Número de Chasis'
            name='numeroChasis'
            className='col-span-4'
            defaultValue='50000000000000000001'
            maxLength={20}
            required
          />

          <FormInput
            label='Empresa'
            name='empresa'
            className='col-span-4'
            defaultValue='Transporte Kapelu'
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Estructura'
        icon={Container}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormSelect
            label='Tipo de Estructura'
            name='estructura.tipo'
            className='col-span-3'
            defaultValue='Sider'
            required>
            <option value='Sider'>Sider</option>
            <option value='Furgón'>Furgón</option>
            <option value='Baranda Volcable'>Baranda Volcable</option>
            <option value='Portacontenedor'>Portacontenedor</option>
            <option value='Tolva'>Tolva</option>
            <option value='Tanque'>Tanque</option>
          </FormSelect>

          <FormInput
            label='Material del Chasis'
            name='estructura.materialChasis'
            className='col-span-5'
            defaultValue='Acero de alta resistencia ASTM A572'
            required
          />

          <FormInput
            label='Material del Piso'
            name='estructura.materialPiso'
            className='col-span-4'
            defaultValue='Fenólico antideslizante de 30 mm'
            required
          />

          <FormInput
            label='Material del Techo'
            name='estructura.materialTecho'
            className='col-span-3'
            defaultValue='Aluminio'
            required
          />

          <FormInput
            label='Material de Cortinas'
            name='estructura.cortinas'
            className='col-span-4'
            defaultValue='PVC reforzado 900 g/m²'
            required
          />

          <FormInput
            label='Color de Cortinas'
            name='estructura.colorCortinas'
            className='col-span-2'
            defaultValue='Azul'
            required
          />

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-5 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='estructura.techoCorredizo'
              checked={techoCorredizo}
              onChange={(e) => setTechoCorredizo(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Techo corredizo
          </label>
        </div>
      </FormSection>

      <FormSection
        title='Dimensiones'
        icon={Ruler}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Largo Exterior (mm)'
            name='dimensiones.largoExteriorMm'
            type='number'
            className='col-span-2'
            defaultValue={14500}
            required
          />

          <FormInput
            label='Largo Útil (mm)'
            name='dimensiones.largoUtilMm'
            type='number'
            className='col-span-2'
            defaultValue={14400}
            required
          />

          <FormInput
            label='Ancho Exterior (mm)'
            name='dimensiones.anchoExteriorMm'
            type='number'
            className='col-span-2'
            defaultValue={2600}
            required
          />

          <FormInput
            label='Ancho Útil (mm)'
            name='dimensiones.anchoUtilMm'
            type='number'
            className='col-span-2'
            defaultValue={2480}
            required
          />

          <FormInput
            label='Altura Exterior (mm)'
            name='dimensiones.alturaExteriorMm'
            type='number'
            className='col-span-2'
            defaultValue={4200}
            required
          />

          <FormInput
            label='Altura Interior (mm)'
            name='dimensiones.alturaInteriorMm'
            type='number'
            className='col-span-2'
            defaultValue={2850}
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Pesos y Capacidades'
        icon={Weight}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Peso Vacío (kg)'
            name='capacidades.pesoVacioKg'
            type='number'
            className='col-span-2'
            defaultValue={8200}
            required
          />

          <FormInput
            label='Carga Útil (kg)'
            name='capacidades.cargaUtilKg'
            type='number'
            className='col-span-2'
            defaultValue={30200}
            required
          />

          <FormInput
            label='Peso Bruto (kg)'
            name='capacidades.pesoBrutoKg'
            type='number'
            className='col-span-2'
            defaultValue={38400}
            required
          />

          <FormInput
            label='Volumen (m³)'
            name='capacidades.volumenM3'
            type='number'
            className='col-span-3'
            defaultValue={102}
            required
          />

          <FormInput
            label='Cantidad de Pallets'
            name='capacidades.cantidadPallets'
            type='number'
            className='col-span-3'
            defaultValue={34}
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Ejes y Suspensión'
        icon={Settings}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Cantidad de Ejes'
            name='ejes.cantidad'
            type='number'
            className='col-span-2'
            defaultValue={3}
            required
          />

          <FormSelect
            label='Configuración'
            name='ejes.configuracion'
            className='col-span-2'
            defaultValue='1+1+1'
            required>
            <option value='1+1'>1+1</option>
            <option value='1+1+1'>1+1+1</option>
            <option value='2+1'>2+1</option>
          </FormSelect>

          <FormInput
            label='Marca'
            name='ejes.marca'
            className='col-span-2'
            defaultValue='ROR'
            required
          />

          <FormInput
            label='Modelo'
            name='ejes.modelo'
            className='col-span-2'
            defaultValue='TM'
            required
          />

          <FormSelect
            label='Suspensión'
            name='ejes.suspension'
            className='col-span-2'
            defaultValue='Neumática'
            required>
            <option value='Neumática'>Neumática</option>
            <option value='Mecánica'>Mecánica</option>
            <option value='Mixta'>Mixta</option>
          </FormSelect>

          <label className='col-span-2 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='ejes.levantaEje'
              checked={levantaEje}
              onChange={(e) => setLevantaEje(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Levanta eje
          </label>
        </div>
      </FormSection>

      <FormSection
        title='Sistema de Frenos'
        icon={ShieldCheck}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormSelect
            label='Tipo de Freno'
            name='frenos.tipo'
            className='col-span-4'
            defaultValue='Disco'
            required>
            <option value='Disco'>Disco</option>
            <option value='Tambor'>Tambor</option>
          </FormSelect>

          <label className='col-span-4 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-5 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='frenos.abs'
              checked={abs}
              onChange={(e) => setAbs(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Sistema ABS
          </label>

          <label className='col-span-4 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-5 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='frenos.ebs'
              checked={ebs}
              onChange={(e) => setEbs(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Sistema EBS
          </label>
        </div>
      </FormSection>

      <FormSection
        title='Rodado'
        icon={CircleGauge}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Cantidad de Cubiertas'
            name='rodado.cantidadCubiertas'
            type='number'
            className='col-span-4'
            defaultValue={12}
            required
          />

          <FormInput
            label='Medida'
            name='rodado.medida'
            className='col-span-4'
            defaultValue='295/80 R22.5'
            required
          />

          <FormInput
            label='Llantas'
            name='rodado.llantas'
            className='col-span-4'
            defaultValue='22.5 x 8.25'
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Perno Rey'
        icon={Wrench}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Marca'
            name='pernoRey.marca'
            className='col-span-4'
            defaultValue='JOST'
            required
          />

          <FormInput
            label='Diámetro (pulgadas)'
            name='pernoRey.diametroPulgadas'
            type='number'
            step='0.1'
            className='col-span-4'
            defaultValue={2}
            required
          />

          <FormInput
            label='Norma'
            name='pernoRey.norma'
            className='col-span-4'
            defaultValue='SAE J700'
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Equipamiento'
        icon={Boxes}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-4'>
          <FormSelect
            label='Puertas Traseras'
            name='equipamiento.puertasTraseras'
            className='col-span-3'
            defaultValue='Doble hoja'
            required>
            <option value='Doble hoja'>Doble hoja</option>
            <option value='Portón elevador'>Portón elevador</option>
            <option value='Portón volcable'>Portón volcable</option>
          </FormSelect>

          <FormInput
            label='Porta Auxilio'
            name='equipamiento.portaAuxilio'
            type='number'
            className='col-span-3'
            defaultValue={2}
            required
          />

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='equipamiento.cortinasCorredizas'
              checked={cortinasCorredizas}
              onChange={(e) => setCortinasCorredizas(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Cortinas corredizas
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='equipamiento.tensoresAutomaticos'
              checked={tensoresAutomaticos}
              onChange={(e) => setTensoresAutomaticos(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Tensores automáticos
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='equipamiento.cajaHerramientas'
              checked={cajaHerramientas}
              onChange={(e) => setCajaHerramientas(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Caja de herramientas
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='equipamiento.lucesLed'
              checked={lucesLed}
              onChange={(e) => setLucesLed(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Luces LED
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='equipamiento.escaleraTrasera'
              checked={escaleraTrasera}
              onChange={(e) => setEscaleraTrasera(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Escalera trasera
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='equipamiento.paragolpesRetractil'
              checked={paragolpesRetractil}
              onChange={(e) => setParagolpesRetractil(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Paragolpes retráctil
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='equipamiento.guardabarrosPlasticos'
              checked={guardabarrosPlasticos}
              onChange={(e) => setGuardabarrosPlasticos(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Guardabarros plásticos
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='equipamiento.cintaReflectiva'
              checked={cintaReflectiva}
              onChange={(e) => setCintaReflectiva(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Cinta reflectiva
          </label>
        </div>
      </FormSection>

      <FormSection
        title='Estado y Mantenimiento'
        icon={CalendarDays}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-5 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='estado.activo'
              checked={activo}
              onChange={(e) => setActivo(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Unidad activa
          </label>

          <FormInput
            label='Kilometraje'
            name='estado.kilometraje'
            type='number'
            className='col-span-3'
            defaultValue={8420}
            min={0}
            required
          />

          <FormInput
            label='Fecha de Alta'
            name='estado.fechaAlta'
            type='date'
            className='col-span-3'
            defaultValue='2026-01-15'
            required
          />

          <FormInput
            label='Última Revisión'
            name='estado.ultimaRevision'
            type='date'
            className='col-span-3'
            defaultValue='2026-06-18'
            required
          />

          <FormInput
            label='Próximo Service (km)'
            name='estado.proximoServiceKm'
            type='number'
            className='col-span-6'
            defaultValue={45000}
            min={0}
            required
          />

          <FormInput
            label='Próxima Revisión'
            name='estado.proximaRevision'
            type='date'
            className='col-span-6'
            defaultValue='2027-01-15'
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Observaciones'
        icon={Gauge}
        iconClassName='text-blue-500'>
        <textarea
          name='observaciones'
          rows={5}
          defaultValue=''
          className='w-full resize-none rounded-xl border border-border bg-background p-4 text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary'
        />
      </FormSection>

      <div className='flex justify-end gap-4 border-t border-border pt-6'>
        <Button
          type='reset'
          variant='secondary'
          size='lg'
          onClick={handleReset}>
          Cancelar
        </Button>

        <Button type='submit' variant='primary' size='lg'>
          Agregar Semirremolque
        </Button>
      </div>
    </form>
  )
}
