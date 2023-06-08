import { IconType } from 'react-icons'
import { WiDaySunny, WiDaySunnyOvercast, WiDayFog, WiDayRainMix, WiRain, WiSnow, WiThunderstorm, WiNightSnowThunderstorm } from 'react-icons/wi'

const codeToIcon: Record<number, { Icon: IconType; description: string }> = {
  0: { Icon: WiDaySunny, description: 'Clear Sky' },

  1: { Icon: WiDaySunnyOvercast, description: 'Mainly Clear' },
  2: { Icon: WiDaySunnyOvercast, description: 'Partly Cloudy' },
  3: { Icon: WiDaySunnyOvercast, description: 'Overcast' },

  45: { Icon: WiDayFog, description: 'Fog' },
  48: { Icon: WiDayFog, description: 'Depositing rime fog' },

  51: { Icon: WiDayRainMix, description: 'Light Drizzle' },
  53: { Icon: WiDayRainMix, description: 'Moderate Drizzle' },
  55: { Icon: WiDayRainMix, description: 'Dense Drizzle' },

  56: { Icon: WiDayRainMix, description: 'Light Freezing Drizzle' },
  57: { Icon: WiDayRainMix, description: 'Dense Freezing Drizzle' },

  61: { Icon: WiRain, description: 'Slight Rain' },
  63: { Icon: WiRain, description: 'Moderate Rain' },
  65: { Icon: WiRain, description: 'Heavy Rain' },

  66: { Icon: WiRain, description: 'Light Freezing Rain' },
  67: { Icon: WiRain, description: 'Heavy Freezing Rain' },

  71: { Icon: WiSnow, description: 'Slight Snow Fall' },
  73: { Icon: WiSnow, description: 'Moderate Snow Fall' },
  75: { Icon: WiSnow, description: 'Heavy Snow Fall' },

  77: { Icon: WiSnow, description: 'Snow Grains' },

  80: { Icon: WiRain, description: 'Slight Rain Showers' },
  81: { Icon: WiRain, description: 'Moderate Rain Showers' },
  82: { Icon: WiRain, description: 'Violent Rain Showers' },

  85: { Icon: WiSnow, description: 'Slight Snow Showers' },
  86: { Icon: WiSnow, description: 'Heavy Snow Showers' },

  95: { Icon: WiThunderstorm, description: 'Thunderstorm' },

  96: { Icon: WiNightSnowThunderstorm, description: 'Thunderstorm With Slight Hail' },
  99: { Icon: WiNightSnowThunderstorm, description: 'Thunderstorm With Heavy Hail' },
}

type WeatherIconWithDescriptionProps = {
  weathercode: number
  iconSize: number
  compact: boolean
}

export const WeatherIconWithDescription = ({ weathercode, iconSize, compact }: WeatherIconWithDescriptionProps) => {
  const { Icon, description } = codeToIcon[weathercode]
  return (
    <div className="flex flex-col items-center">
      <div className="group">
        <Icon size={iconSize} />
        {compact && (
          <span className="absolute w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
            {description}
          </span>
        )}
      </div>
      {!compact && (
        <p className="text-gray-500">
          <i>{description}</i>
        </p>
      )}
    </div>
  )
}
