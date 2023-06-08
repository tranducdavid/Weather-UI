import { WiStrongWind } from 'react-icons/wi'

type WindStatusProps = {
  windSpeed: number
}

export const WindStatus = ({ windSpeed }: WindStatusProps) => (
  <div className="mb-4 flex flex-col items-center justify-center text-center">
    <div className="flex items-center text-gray-400">
      <WiStrongWind className="mr-2" /> Wind Speed
    </div>
    <div className="text-4xl">{windSpeed} km/h</div>
  </div>
)
