import { WiRain } from 'react-icons/wi'

type PrecipitationProbabilityProps = {
  precipitationProbability: number
}

export const PrecipitationProbability = ({ precipitationProbability }: PrecipitationProbabilityProps) => (
  <div className="mb-4 flex flex-col items-center justify-center text-center">
    <div className="flex items-center text-gray-400">
      <WiRain className="mr-2" /> Precipitation
    </div>
    <div className="text-4xl">{precipitationProbability}%</div>
  </div>
)
