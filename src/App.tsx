import { FiSun } from 'react-icons/fi'
import { useForecast, usePosition } from './queries'
import { Loading } from './Loading'
import { getCurrentTemperature } from './utils'
import _ from 'lodash'
import moment, { Moment } from 'moment'

type DayCardProps = {
  day: Moment
  temperatureMin: number
  temperatureMax: number
}

const DayCard = ({ day, temperatureMin, temperatureMax }: DayCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow">
      <div>{day.format('ddd')}</div>
      <div>
        {Math.round(temperatureMax)}° <span className="text-gray-600">{Math.round(temperatureMin)}°</span>
      </div>
    </div>
  )
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
            {_.range(7).map((i) => {
              const day = moment().add(i, 'day')
              const temperatureMin = data.daily.temperature_2m_min[i]
              const temperatureMax = data.daily.temperature_2m_max[i]
              return <DayCard key={`${i}${temperatureMin}${temperatureMax}`} {...{ day, temperatureMin, temperatureMax }} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
