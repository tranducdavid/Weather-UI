import { ReactNode } from 'react'

type WeatherCardProps = {
  children: ReactNode
  rowsSpan?: number
  colsSpan?: number
}

export const WeatherCard = ({ children, rowsSpan, colsSpan }: WeatherCardProps) => (
  <div
    className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow"
    style={{ gridRow: rowsSpan && `span ${rowsSpan} / span ${rowsSpan}`, gridColumn: colsSpan && `span ${colsSpan} / span ${colsSpan}` }}
  >
    {children}
  </div>
)
