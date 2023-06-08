import { useLatLonToCity } from '../queries'

type LocationProps = {
  latitude?: number
  longitude?: number
}

export const Location = ({ latitude, longitude }: LocationProps) => {
  const { data } = useLatLonToCity(latitude, longitude)

  if (!latitude && !longitude) {
    return <></>
  }

  if (data) {
    return <p className="mb-4 text-gray-600">{data}</p>
  }

  return <></>
}
