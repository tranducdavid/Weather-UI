import { Forecast } from './types'

export const getCurrentTemperature = (data: Forecast) => {
  const now = new Date()
  now.setSeconds(0, 0)
  now.setMinutes(0, 0)
  const isoHour = now.toISOString().slice(0, 16)

  const currentTimeIndex = data.hourly.time.findIndex((time: string) => time === isoHour)
  const currentTemperature = data.hourly.temperature_2m[currentTimeIndex]

  return currentTemperature
}
