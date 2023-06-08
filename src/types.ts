// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Forecast {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: HourlyUnits
  hourly: Hourly
  daily_units: DailyUnits
  daily: Daily
}

export interface Daily {
  time: string[]
  weathercode: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  sunrise: string[]
  sunset: string[]
  uv_index_max: number[]
}

export interface DailyUnits {
  time: string
  weathercode: string
  temperature_2m_max: string
  temperature_2m_min: string
  sunrise: string
  sunset: string
  uv_index_max: string
}

export interface Hourly {
  time: string[]
  temperature_2m: number[]
  relativehumidity_2m: number[]
  apparent_temperature: number[]
  windspeed_10m: number[]
  weathercode: number[]
}

export interface HourlyUnits {
  time: string
  temperature_2m: string
  relativehumidity_2m: string
  apparent_temperature: string
  windspeed_10m: string
  weathercode: string
}
