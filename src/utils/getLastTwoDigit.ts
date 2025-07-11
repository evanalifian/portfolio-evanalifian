/**
 * 
 * @param year Year input as integer.
 * @returns Last two digit of the year.
 */
export default function getLastTwoDigit(year: number): number {
  return year % 100
}