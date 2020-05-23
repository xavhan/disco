export class DateService {
  format(isoString) {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat().format(date)
  }
}