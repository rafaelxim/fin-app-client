export type Entry = {
  period: string;
  value: number;
  investment: InvestmentEntityResponse;
};

export type EntryEntity = {
  attributes: Entry;
};

export type EntryEntityResponse = {
  data: EntryEntity;
};

type EntryEntityResponseCollection = {
  data: EntryEntity[];
};

type InvestmentEntityResponse = {
  data: InvestmentEntity;
};

type InvestmentEntity = {
  id: number;
  attributes: Investment;
};

type Investment = {
  name: string;
  category: CategoryEntityResponse;
};

type CategoryEntityResponse = {
  data: CategoryEntity;
};

type CategoryEntity = {
  id: number;
  attributes: Category;
};

type Category = {
  name: string;
};

export type GetEntriesByMonthResponse = {
  entries: EntryEntityResponseCollection;
};
