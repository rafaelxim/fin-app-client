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

export const QUERY_GET_ALL_INVESTMENTS = gql`
  query GET_ALL_INVESTMENTS {
    investments(pagination: { limit: 999999 }) {
      data {
        id
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
`;

export const QUERY_GET_ALL_CATEGORIES = gql`
  query GET_ALL_CATEGORIES {
    categories(pagination: { limit: 999999 }) {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

export const CREATE_ENTRY = gql`
  mutation createEntry(
    $period: Date
    $value: Float
    $investment: ID
    $published: DateTime
  ) {
    createEntry(
      data: {
        period: $period
        value: $value
        investment: $investment
        publishedAt: $published
      }
    ) {
      data {
        id
      }
    }
  }
`;
