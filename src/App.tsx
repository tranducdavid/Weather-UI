import { ReactNode } from 'react'
import { FiSun } from 'react-icons/fi'
import { useForecast, usePosition } from './queries'
import { Loading } from './Loading'
import { getCurrentTemperature } from './utils'

type DayCardProps = {
  children: ReactNode
}

const DayCard = ({ children }: DayCardProps) => {
  return <div className="rounded-xl border border-gray-200 bg-white shadow">{children}</div>
}

const App = () => {
  const { data: position } = usePosition()
  const { data, isLoading, isError } = useForecast(position?.latitude, position?.longitude)

  return !data || isLoading || isError ? (
    <Loading />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-red-50">
      <div className="h-[52rem] w-[48rem] rounded-3xl border border-gray-200 bg-stone-50 shadow">
        <div className="h-[20rem] w-full rounded-t-3xl bg-[url('/weather.jpg')] bg-cover bg-center"></div>
        <div className="m-8 -mt-4">
          <div className="mb-4 grid h-[20rem] grid-flow-col grid-cols-3 grid-rows-2 gap-4">
            <div className="row-span-2 flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow">
              <p className="text-lg">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="mb-4 text-gray-600">Bratislava</p>
              <FiSun size={32} />
              <p className="mb-4">
                <i>Sunny</i>
              </p>
              <p className="text-3xl font-bold">{getCurrentTemperature(data)}°C</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white shadow">02</div>
            <div className="rounded-xl border border-gray-200 bg-white shadow">03</div>
            <div className="rounded-xl border border-gray-200 bg-white shadow">04</div>
            <div className="rounded-xl border border-gray-200 bg-white shadow">05</div>
          </div>
          <div className="grid h-[10rem] grid-flow-col grid-cols-7 grid-rows-1 gap-4">
            <DayCard>01</DayCard>
            <DayCard>02</DayCard>
            <DayCard>03</DayCard>
            <DayCard>04</DayCard>
            <DayCard>05</DayCard>
            <DayCard>06</DayCard>
            <DayCard>07</DayCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
