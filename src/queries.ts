import { useQuery } from 'react-query'
import { Forecast } from './types'
import { getCurrentPosition } from './utils'

const fetchForecast = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,windspeed_10m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=UTC`
  )
  const data = (await response.json()) as Forecast
  return data
}

export const useForecast = (latitude?: number, longitude?: number) => {
  return useQuery('forecast', () => fetchForecast(latitude!, longitude!), {
    enabled: !!latitude && !!longitude,
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    refetchInterval: 60 * 60 * 1000,
  })
}

export const usePosition = () => {
  return useQuery('position', getCurrentPosition, { staleTime: Infinity, cacheTime: Infinity })
}

const fetchLatLonToCity = async (latitude?: number, longitude?: number): Promise<string> => {
  const response = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
  const data = await response.json()
  return data.address.city
}

export const useLatLonToCity = (latitude?: number, longitude?: number) => {
  return useQuery('city', () => fetchLatLonToCity(latitude!, longitude!), {
    enabled: !!latitude && !!longitude,
    staleTime: Infinity,
    cacheTime: Infinity,
  })
}
