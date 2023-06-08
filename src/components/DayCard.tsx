import { Moment } from 'moment'

type DayCardProps = {
  day: Moment
  temperatureMin: number
  temperatureMax: number
}

export const DayCard = ({ day, temperatureMin, temperatureMax }: DayCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow">
      <div>{day.format('ddd')}</div>
      <div>
        {Math.round(temperatureMax)}° <span className="text-gray-600">{Math.round(temperatureMin)}°</span>
      </div>
    </div>
  )
}
