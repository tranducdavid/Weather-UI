import { Forecast } from './types'

export const getCurrentHourlyData = (data: Forecast) => {
  const now = new Date()
  now.setSeconds(0, 0)
  now.setMinutes(0, 0)
  const isoHour = now.toISOString().slice(0, 16)

  const currentTimeIndex = data.hourly.time.findIndex((time: string) => time === isoHour)

  const currentTemperature = data.hourly.temperature_2m[currentTimeIndex]
  const precipitationProbability = data.hourly.precipitation_probability[currentTimeIndex]
  const humidity = data.hourly.relativehumidity_2m[currentTimeIndex]
  const weathercode = data.hourly.weathercode[currentTimeIndex]

  return { currentTemperature, precipitationProbability, humidity, weathercode }
}

export type Position = {
  latitude: number
  longitude: number
}

export const getCurrentPosition = () => {
  return new Promise<Position>((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        (error) => {
          reject(error)
        }
      )
    } else {
      reject(new Error('Geolocation is not supported by this browser.'))
    }
  })
}
