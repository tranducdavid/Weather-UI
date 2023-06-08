import { WiMoonrise, WiSunrise } from 'react-icons/wi'

type SunriseProps = {
  sunrise: string
  sunset: string
}

export const Sunrise = ({ sunrise, sunset }: SunriseProps) => (
  <div className="-mt-2">
    <div className="flex items-center text-gray-400">Sunrise & Sunset</div>
    <div className="grid grid-cols-2 grid-rows-2 items-center gap-x-1 gap-y-0">
      <div>
        <WiSunrise className="text-4xl" />
      </div>
      <div className="justify-self-end text-xl">{sunrise}</div>
      <div>
        <WiMoonrise className="text-4xl" />
      </div>
      <div className="justify-self-end text-xl">{sunset}</div>
    </div>
  </div>
)
