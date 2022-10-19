import { gql } from '@apollo/client';

export const QUERY_GET_ENTRIES_BY_MONTH = gql`
  query GET_ENTRIES_BY_MONTH($period: Date!) {
    entries(
      filters: { period: { eq: $period } }
      pagination: { limit: 999999 }
    ) {
      data {
        attributes {
          period
          value
          investment {
            data {
              attributes {
                name
                category {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const QUERY_GET_ALL_ENTRIES = gql`
  query GET_ALL_ENTRIES {
    entries(pagination: { limit: 999999 }) {
      data {
        attributes {
          period
          value
          investment {
            data {
              attributes {
                name
                category {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
