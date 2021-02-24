import { Discojs, SortOrdersEnum, UserSortEnum,  } from 'discojs'

export class RecordsService {
  client: Discojs;

  constructor() {
    this.client = new Discojs({
      userToken: process.env.REACT_APP_DISCOGS_TOKEN,
    })
  }

  getMyLatestRecords(params = {}): Promise<MyRecord[]> {
    const DEFAULTS = { page: 1 }
    const options = { ...DEFAULTS, ...params  };
    return this.client.listItemsInFolder(0, { by: UserSortEnum.ADDED, order: SortOrdersEnum.DESC }, { page: options.page })
      .then(data => data.releases)
  }

  getRecord(id: number) {
    return this.client.getRelease(id)
  }
}

export type MyRecord = any // fix