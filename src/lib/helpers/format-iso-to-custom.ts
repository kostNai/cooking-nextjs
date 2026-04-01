export function formatIsoToCustom(
    isoString: string,
    { showTimezone = true }: { showTimezone?: boolean } = {}
): string {
    if (!isoString) return ''

    const date = new Date(isoString)
    if (isNaN(date.getTime())) return ''

    const pad = (n: number) => String(n).padStart(2, '0')

    const formatted = `${pad(date.getDate())}-${pad(
        date.getMonth() + 1
    )}-${date.getFullYear()}, ${pad(date.getHours())}-${pad(
        date.getMinutes()
    )}-${pad(date.getSeconds())}`

    if (!showTimezone) return formatted

    const offsetMinutes = -date.getTimezoneOffset()

    const sign = offsetMinutes >= 0 ? '+' : '-'
    const abs = Math.abs(offsetMinutes)

    const hours = pad(Math.floor(abs / 60))
    const minutes = pad(abs % 60)

    const tz = `${sign}${hours}:${minutes}`

    return `${formatted} (${tz})`
}
