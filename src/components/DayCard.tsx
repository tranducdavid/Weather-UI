import { Moment } from 'moment'
import { WeatherIconWithDescription } from './WeatherIcon'

type DayCardProps = {
  day: Moment
  temperatureMin: number
  temperatureMax: number
  weathercode: number
}

export const DayCard = ({ day, temperatureMin, temperatureMax, weathercode }: DayCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow">
      <div>{day.format('ddd')}</div>
      <WeatherIconWithDescription weathercode={weathercode} iconSize={32} compact />
      <div>
        {Math.round(temperatureMax)}° <span className="text-gray-600">{Math.round(temperatureMin)}°</span>
      </div>
    </div>
  )
}
