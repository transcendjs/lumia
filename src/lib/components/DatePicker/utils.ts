//
// © 2023 Hardcore Engineering, Inc. All Rights Reserved.
// Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
//

export function padDigits(num: number, zero: number = 2): string {
  return num.toString().padStart(zero, '0')
}

const defaultDateTimeOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
}
export function formatDateTime(
  date: Date | null,
  type: 'datetime' | 'date',
  dateTimeOptions: Intl.DateTimeFormatOptions = defaultDateTimeOptions
): string {
  const tempDate = date ? date.toLocaleString('sv-SE', dateTimeOptions) : null
  return tempDate ? (type === 'date' ? tempDate.split(' ')[0] : tempDate.replace(' ', 'T')) : ''
}

export function areDatesEqual(
  firstDate: Date | null,
  secondDate: Date | null,
  type: 'datetime' | 'date'
): boolean {
  if (firstDate === null && secondDate === null) {
    return true
  } else if (firstDate === null || secondDate === null) {
    return false
  }
  const dateEqual =
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  const timeEqual =
    firstDate.getHours() === secondDate.getHours() &&
    firstDate.getMinutes() === secondDate.getMinutes()
  return type === 'date' ? dateEqual : dateEqual && timeEqual
}

export function daysInMonth(date: Date): number {
  return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate()
}

export function getDaysByMonthYear(m: number, y: number): number {
  return (
    28 +
    ((m + Math.floor(m / 8)) % 2) +
    (2 % m) +
    Math.floor(
      (1 +
        (1 - (((y % 4) + 2) % ((y % 4) + 1))) * (((y % 100) + 2) % ((y % 100) + 1)) +
        (1 - (((y % 400) + 2) % ((y % 400) + 1)))) /
        m
    ) +
    Math.floor(1 / m) -
    Math.floor(
      ((1 - (((y % 4) + 2) % ((y % 4) + 1))) * (((y % 100) + 2) % ((y % 100) + 1)) +
        (1 - (((y % 400) + 2) % ((y % 400) + 1)))) /
        m
    )
  )
}

export const getValue = (date: Date, id: string): number => {
  switch (id) {
    case 'day':
      return date.getDate()
    case 'month':
      return date.getMonth() + 1
    case 'year':
      return date.getFullYear()
    case 'hour':
      return date.getHours()
    case 'minute':
      return date.getMinutes()
    default:
      return 0
  }
}

export const getMinMaxValue = (
  date: Date | null,
  id: string,
  real: boolean = false,
  min: boolean = false
): number => {
  if (date == null) date = new Date()
  switch (id) {
    case 'day':
      return min ? 1 : real ? daysInMonth(date) : 31
    case 'month':
      return min ? 1 : 12
    case 'year':
      return min ? 1970 : 3000
    case 'hour':
      return min ? 0 : 23
    default:
      return min ? 0 : 59
  }
}
