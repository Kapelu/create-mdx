'use client'

import { useState } from 'react'
import {
  Armchair,
  CalendarDays,
  CircleGauge,
  Cog,
  Fuel,
  Gauge,
  Ruler,
  Settings,
  ShieldCheck,
  Truck,
  Weight,
  Wrench,
} from 'lucide-react'

import { Button } from '@/components/ui/Button'
import FormInput from '@/components/ui/FormInput'
import FormSection from '@/components/ui/FormSection'
import FormSelect from '@/components/ui/FormSelect'

export default function AltaTractor() {
  const [retarder, setRetarder] = useState(true)
  const [bloqueoDiferencial, setBloqueoDiferencial] = useState(true)
  const [activo, setActivo] = useState(true)

  const [aireAcondicionado, setAireAcondicionado] = useState(true)
  const [climatizador, setClimatizador] = useState(true)
  const [levantavidriosElectricos, setLevantavidriosElectricos] = useState(true)
  const [espejosElectricos, setEspejosElectricos] = useState(true)
  const [butacaNeumatica, setButacaNeumatica] = useState(true)
  const [volanteMultifuncion, setVolanteMultifuncion] = useState(true)
  const [pantallaMultimedia, setPantallaMultimedia] = useState(true)
  const [controlCrucero, setControlCrucero] = useState(true)
  const [heladera, setHeladera] = useState(true)
  const [litera, setLitera] = useState(true)

  const [airbagConductor, setAirbagConductor] = useState(true)
  const [cinturonesTresPuntos, setCinturonesTresPuntos] = useState(true)
  const [frenadoEmergencia, setFrenadoEmergencia] = useState(true)
  const [alertaCambioCarril, setAlertaCambioCarril] = useState(true)

  const handleReset = () => {
    setRetarder(true)
    setBloqueoDiferencial(true)
    setActivo(true)

    setAireAcondicionado(true)
    setClimatizador(true)
    setLevantavidriosElectricos(true)
    setEspejosElectricos(true)
    setButacaNeumatica(true)
    setVolanteMultifuncion(true)
    setPantallaMultimedia(true)
    setControlCrucero(true)
    setHeladera(true)
    setLitera(true)

    setAirbagConductor(true)
    setCinturonesTresPuntos(true)
    setFrenadoEmergencia(true)
    setAlertaCambioCarril(true)
  }

  return (
    <form className='space-y-6 p-6'>
      <FormSection
        title='Identificación de la Unidad'
        icon={Truck}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Unidad'
            name='unidad'
            className='col-span-2'
            defaultValue='400'
            required
          />

          <FormInput
            label='Patente'
            name='patente'
            className='col-span-3'
            defaultValue='AF123BC'
            required
          />

          <FormInput
            label='Marca'
            name='marca'
            className='col-span-3'
            defaultValue='Scania'
            required
          />

          <FormInput
            label='Línea'
            name='linea'
            className='col-span-2'
            defaultValue='Super'
            required
          />

          <FormInput
            label='Modelo'
            name='modelo'
            className='col-span-2'
            defaultValue='G420'
            required
          />

          <FormInput
            label='Año'
            name='anio'
            type='number'
            className='col-span-2'
            defaultValue={2025}
            required
          />

          <FormSelect
            label='Tipo de Vehículo'
            name='tipoVehiculo'
            className='col-span-4'
            defaultValue='Camión Tractor'
            required>
            <option value='Camión Tractor'>Camión Tractor</option>
            <option value='Camión Rígido'>Camión Rígido</option>
          </FormSelect>

          <FormSelect
            label='Configuración'
            name='configuracion'
            className='col-span-2'
            defaultValue='6x2'
            required>
            <option value='4x2'>4x2</option>
            <option value='6x2'>6x2</option>
            <option value='6x4'>6x4</option>
          </FormSelect>

          <FormInput
            label='Cabina'
            name='cabina'
            className='col-span-2'
            defaultValue='G'
            required
          />

          <FormInput
            label='Versión de Cabina'
            name='versionCabina'
            className='col-span-2'
            defaultValue='CG17N'
            required
          />

          <FormInput
            label='Empresa'
            name='empresa'
            className='col-span-4'
            defaultValue='Transporte Kapelu'
            required
          />

          <FormInput
            label='Número de Motor'
            name='numeroMotor'
            className='col-span-4'
            defaultValue='12345678901234567890'
            maxLength={20}
            required
          />

          <FormInput
            label='Número de Chasis'
            name='numeroChasis'
            className='col-span-4'
            defaultValue='98765432109876543210'
            maxLength={20}
            required
          />
        </div>
      </FormSection>

      <FormSection title='Motor' icon={Cog} iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Código'
            name='motor.codigo'
            className='col-span-3'
            defaultValue='DC13 173'
            required
          />

          <FormSelect
            label='Combustible'
            name='motor.combustible'
            className='col-span-3'
            defaultValue='Diésel'
            required>
            <option value='Diésel'>Diésel</option>
            <option value='GNC'>GNC</option>
            <option value='Eléctrico'>Eléctrico</option>
          </FormSelect>

          <FormInput
            label='Cilindrada (cc)'
            name='motor.cilindrada'
            type='number'
            className='col-span-3'
            defaultValue={12742}
            required
          />

          <FormInput
            label='Cilindros'
            name='motor.cilindros'
            type='number'
            className='col-span-3'
            defaultValue={6}
            required
          />

          <FormInput
            label='Disposición'
            name='motor.disposicion'
            className='col-span-3'
            defaultValue='En línea'
            required
          />

          <FormSelect
            label='Norma de Emisiones'
            name='motor.normaEmisiones'
            className='col-span-3'
            defaultValue='Euro 6'
            required>
            <option value='Euro 5'>Euro 5</option>
            <option value='Euro 6'>Euro 6</option>
          </FormSelect>

          <FormInput
            label='Potencia (HP)'
            name='motor.potenciaHP'
            type='number'
            className='col-span-2'
            defaultValue={420}
            required
          />

          <FormInput
            label='Potencia (kW)'
            name='motor.potenciaKW'
            type='number'
            className='col-span-2'
            defaultValue={309}
            required
          />

          <FormInput
            label='Torque (Nm)'
            name='motor.torqueNm'
            type='number'
            className='col-span-2'
            defaultValue={2300}
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Transmisión y Tracción'
        icon={Settings}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormSelect
            label='Tipo de Transmisión'
            name='transmision.tipo'
            className='col-span-3'
            defaultValue='Automatizada'
            required>
            <option value='Manual'>Manual</option>
            <option value='Automática'>Automática</option>
            <option value='Automatizada'>Automatizada</option>
          </FormSelect>

          <FormInput
            label='Modelo de Transmisión'
            name='transmision.modelo'
            className='col-span-5'
            defaultValue='GRSO905R Opticruise'
            required
          />

          <FormInput
            label='Marchas Adelante'
            name='transmision.marchasAdelante'
            type='number'
            className='col-span-2'
            defaultValue={12}
            required
          />

          <FormInput
            label='Marchas Atrás'
            name='transmision.marchasAtras'
            type='number'
            className='col-span-2'
            defaultValue={2}
            required
          />

          <FormSelect
            label='Configuración de Tracción'
            name='traccion.configuracion'
            className='col-span-4'
            defaultValue='6x2'
            required>
            <option value='4x2'>4x2</option>
            <option value='6x2'>6x2</option>
            <option value='6x4'>6x4</option>
          </FormSelect>

          <label className='col-span-4 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-5 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='transmision.retarder'
              checked={retarder}
              onChange={(e) => setRetarder(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Retarder
          </label>

          <label className='col-span-4 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-5 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='traccion.bloqueoDiferencial'
              checked={bloqueoDiferencial}
              onChange={(e) => setBloqueoDiferencial(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Bloqueo de diferencial
          </label>
        </div>
      </FormSection>

      <FormSection
        title='Suspensión, Frenos y Dirección'
        icon={Wrench}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Suspensión Delantera'
            name='suspension.delantera'
            className='col-span-4'
            defaultValue='Ballestas parabólicas'
            required
          />

          <FormInput
            label='Suspensión Trasera'
            name='suspension.trasera'
            className='col-span-4'
            defaultValue='Neumática'
            required
          />

          <FormInput
            label='Tipo de Dirección'
            name='direccion.tipo'
            className='col-span-4'
            defaultValue='Hidráulica'
            required
          />

          <FormInput
            label='Freno de Servicio'
            name='frenos.servicio'
            className='col-span-4'
            defaultValue='Discos con ABS'
            required
          />

          <label className='col-span-2 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='frenos.abs'
              defaultChecked
              className='h-4 w-4 rounded border-border accent-primary'
            />
            ABS
          </label>

          <label className='col-span-2 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='frenos.ebs'
              defaultChecked
              className='h-4 w-4 rounded border-border accent-primary'
            />
            EBS
          </label>

          <label className='col-span-2 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='frenos.controlTraccion'
              defaultChecked
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Control tracción
          </label>

          <label className='col-span-2 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='frenos.esc'
              defaultChecked
              className='h-4 w-4 rounded border-border accent-primary'
            />
            ESC
          </label>
        </div>
      </FormSection>

      <FormSection
        title='Tanques y Pesos'
        icon={Weight}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Combustible (litros)'
            name='tanques.combustibleLitros'
            type='number'
            className='col-span-3'
            defaultValue={700}
            required
          />

          <FormInput
            label='AdBlue (litros)'
            name='tanques.adBlueLitros'
            type='number'
            className='col-span-3'
            defaultValue={80}
            required
          />

          <FormInput
            label='Peso Bruto Vehicular (kg)'
            name='pesos.pesoBrutoVehicularKg'
            type='number'
            className='col-span-3'
            defaultValue={26000}
            required
          />

          <FormInput
            label='Peso Bruto Combinado (kg)'
            name='pesos.pesoBrutoCombinadoKg'
            type='number'
            className='col-span-3'
            defaultValue={55000}
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Dimensiones y Neumáticos'
        icon={Ruler}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Distancia entre Ejes (mm)'
            name='dimensiones.distanciaEntreEjesMm'
            type='number'
            className='col-span-3'
            defaultValue={3950}
            required
          />

          <FormInput
            label='Ancho (mm)'
            name='dimensiones.anchoMm'
            type='number'
            className='col-span-3'
            defaultValue={2550}
            required
          />

          <FormInput
            label='Alto de Cabina (mm)'
            name='dimensiones.altoCabinaMm'
            type='number'
            className='col-span-3'
            defaultValue={3400}
            required
          />

          <FormInput
            label='Medida de Neumáticos'
            name='neumaticos.medida'
            className='col-span-2'
            defaultValue='315/80 R22.5'
            required
          />

          <FormInput
            label='Cantidad'
            name='neumaticos.cantidad'
            type='number'
            className='col-span-1'
            defaultValue={10}
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Quinta Rueda'
        icon={CircleGauge}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Marca'
            name='quintaRueda.marca'
            className='col-span-6'
            defaultValue='JOST'
            required
          />

          <FormInput
            label='Diámetro del Perno (pulgadas)'
            name='quintaRueda.diametroPernoPulgadas'
            type='number'
            step='0.1'
            className='col-span-6'
            defaultValue={2}
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Equipamiento de Cabina'
        icon={Armchair}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-4'>
          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.aireAcondicionado'
              checked={aireAcondicionado}
              onChange={(e) => setAireAcondicionado(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Aire acondicionado
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.climatizador'
              checked={climatizador}
              onChange={(e) => setClimatizador(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Climatizador
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.levantavidriosElectricos'
              checked={levantavidriosElectricos}
              onChange={(e) => setLevantavidriosElectricos(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Levantavidrios eléctricos
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.espejosElectricos'
              checked={espejosElectricos}
              onChange={(e) => setEspejosElectricos(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Espejos eléctricos
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.butacaNeumatica'
              checked={butacaNeumatica}
              onChange={(e) => setButacaNeumatica(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Butaca neumática
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.volanteMultifuncion'
              checked={volanteMultifuncion}
              onChange={(e) => setVolanteMultifuncion(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Volante multifunción
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.pantallaMultimedia'
              checked={pantallaMultimedia}
              onChange={(e) => setPantallaMultimedia(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Pantalla multimedia
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.controlCrucero'
              checked={controlCrucero}
              onChange={(e) => setControlCrucero(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Control crucero
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.heladera'
              checked={heladera}
              onChange={(e) => setHeladera(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Heladera
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='cabinaEquipamiento.litera'
              checked={litera}
              onChange={(e) => setLitera(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Litera
          </label>
        </div>
      </FormSection>

      <FormSection
        title='Seguridad'
        icon={ShieldCheck}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-4'>
          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='seguridad.airbagConductor'
              checked={airbagConductor}
              onChange={(e) => setAirbagConductor(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Airbag conductor
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='seguridad.cinturonesTresPuntos'
              checked={cinturonesTresPuntos}
              onChange={(e) => setCinturonesTresPuntos(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Cinturones de tres puntos
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='seguridad.frenadoEmergencia'
              checked={frenadoEmergencia}
              onChange={(e) => setFrenadoEmergencia(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Frenado de emergencia
          </label>

          <label className='col-span-3 flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='seguridad.alertaCambioCarril'
              checked={alertaCambioCarril}
              onChange={(e) => setAlertaCambioCarril(e.target.checked)}
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Alerta cambio de carril
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
            defaultValue={18420}
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
            defaultValue='2026-06-20'
            required
          />

          <FormInput
            label='Próximo Service (km)'
            name='estado.proximoServiceKm'
            type='number'
            className='col-span-6'
            defaultValue={45000}
            required
          />

          <FormInput
            label='Próximo Service'
            name='estado.proximoServiceFecha'
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
          Agregar Tractor
        </Button>
      </div>
    </form>
  )
}
