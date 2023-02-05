import {
  CategoryEntityResponseCollection,
  InvestmentEntityResponseCollection,
} from './dbTypes';

export type InvestmentEntityResponseCollectionQuery = {
  investments: InvestmentEntityResponseCollection;
};

export type CategoryEntityResponseCollectionQuery = {
  categories: CategoryEntityResponseCollection;
};
