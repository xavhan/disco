export class DateService {
  format(isoString: string): string {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat().format(date)
  }
}