import { Discojs } from 'discojs'

console.log(process.env)
export class RecordsService {
  constructor() {
    this.client = new Discojs({
      userToken: process.env.REACT_APP_DISCOGS_TOKEN,
    })
  }

  getMyLatestRecords(params = {}) {
    const DEFAULTS = { page: 1 }
    const options = { ...DEFAULTS, ...params  };
    return this.client.listItemsInFolder(0, { by: 'added', order: 'desc' }, { page: options.page })
      .then(data => data.releases)
  }

  getRecord(id) {
    return this.client.getRelease(id)
  }
}