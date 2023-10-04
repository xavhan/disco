import { Discojs, SortOrdersEnum, UserSortEnum } from "discojs";

const client: Discojs = new Discojs({
  userToken: process.env.REACT_APP_DISCOGS_TOKEN,
});

export const getRecords = async (params = {}) => {
  const DEFAULTS = { page: 1 };
  const options = { ...DEFAULTS, ...params };
  const list = await client.listItemsInFolder(
    0,
    { by: UserSortEnum.ADDED, order: SortOrdersEnum.DESC },
    { page: options.page }
  );
  return list.releases;
};

export const getRecord = async (id: number) => {
  const record = await client.getRelease(id);
  return record;
};
