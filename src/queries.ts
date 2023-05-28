import { useQuery } from 'react-query'
import { Forecast } from './types'

const fetchForecast = async () => {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=48.29&longitude=17.52&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=UTC'
  )
  const data = (await response.json()) as Forecast
  return data
}

export const useForecast = () => {
  return useQuery('forecast', fetchForecast, { staleTime: 60 * 60 * 1000, cacheTime: 60 * 60 * 1000, refetchInterval: 60 * 60 * 1000 })
}
