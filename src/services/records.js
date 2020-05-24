import Discojs from 'discojs'

export class RecordsService {
  constructor() {
    this.client = new Discojs({
      userToken: 'JkvQWzpixIZDreLxgbByXauBopoHzDxhJLBdzASo',
    })
  }

  getMyLatestRecords() {
    return this.client.getItemsInFolderForUser('xavhan', 0, {}, { by: 'added', order: 'desc' })
      .then(data => data.releases)
  }

  getRecord(id) {
    return this.client.getRelease(id)
  }
}