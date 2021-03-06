import { getSettings } from '../settings.js'

const DateDisplay = () => {
  const settings = getSettings()
  const { widgets, dateWidgetOptions } = settings
  const { dateWidget } = widgets
  if (!dateWidget) return null

  const { shortDateFormat } = dateWidgetOptions
  const formatOptions = shortDateFormat ? 'short' : 'long'

  const options = {
    weekday: formatOptions,
    month: formatOptions,
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }

  const now = new Date().toLocaleDateString("en-UK", options)
  return (
    <div className="date">
      {now}
    </div>
  )
}

export default DateDisplay
