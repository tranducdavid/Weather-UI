import { useForecast, usePosition } from './queries'
import { Loading } from './components/Loading'
import { Position, getCurrentHourlyData } from './utils'
import _ from 'lodash'
import moment from 'moment'
import { Sunrise } from './components/Sunrise'
import { WindStatus } from './components/WindStatus'
import { DayCard } from './components/DayCard'
import { Location } from './components/Location'
import { WeatherCard } from './components/WeatherCard'
import { WeatherIconWithDescription } from './components/WeatherIcon'
import { Forecast } from './types'

type WeatherForecastProps = {
  forecast: Forecast
  position?: Position
}

const WeatherForecast = ({ forecast, position }: WeatherForecastProps) => {
  const { currentTemperature, weathercode } = getCurrentHourlyData(forecast)

  return (
    <div className="flex h-full w-full items-center justify-center bg-red-50">
      <div className="h-[52rem] w-[48rem] rounded-3xl border border-gray-200 bg-stone-50 shadow">
        <div className="h-[20rem] w-full rounded-t-3xl bg-[url('/weather.jpg')] bg-cover bg-center"></div>
        <div className="m-8 -mt-4">
          <div className="mb-4 grid h-[20rem] grid-flow-col grid-cols-3 grid-rows-2 gap-4">
            <WeatherCard rowsSpan={2}>
              <p className="text-lg">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <Location latitude={position?.latitude} longitude={position?.longitude} />
              <WeatherIconWithDescription weathercode={weathercode} iconSize={48} />
              <p className="text-3xl font-bold">{currentTemperature}°C</p>
            </WeatherCard>
            <WeatherCard>02</WeatherCard>
            <WeatherCard>
              <Sunrise sunrise={moment(forecast.daily.sunrise[0]).format('H:mm')} sunset={moment(forecast.daily.sunset[0]).format('H:mm')} />
            </WeatherCard>
            <WeatherCard>
              <WindStatus windSpeed={forecast.hourly.windspeed_10m[0]} />
            </WeatherCard>
            <WeatherCard>05</WeatherCard>
          </div>
          <div className="grid h-[10rem] grid-flow-col grid-cols-7 grid-rows-1 gap-4">
            {_.range(7).map((i) => {
              const day = moment().add(i, 'day')
              const temperatureMin = forecast.daily.temperature_2m_min[i]
              const temperatureMax = forecast.daily.temperature_2m_max[i]
              return <DayCard key={`${i}${temperatureMin}${temperatureMax}`} {...{ day, temperatureMin, temperatureMax }} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const { data: position } = usePosition()
  const { data: forecast, isLoading, isError } = useForecast(position?.latitude, position?.longitude)

  return !forecast || isLoading || isError ? <Loading /> : <WeatherForecast {...{ position, forecast }} />
}

export default App
