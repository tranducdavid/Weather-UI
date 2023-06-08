import { WiHumidity } from 'react-icons/wi'

type HumidityProps = {
  humidity: number
}

export const Humidity = ({ humidity }: HumidityProps) => (
  <div className="mb-4 flex flex-col items-center justify-center text-center">
    <div className="flex items-center text-gray-400">
      <WiHumidity className="mr-2" /> Humidity
    </div>
    <div className="text-4xl">{humidity}%</div>
  </div>
)
