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
  query GET_ALL_ENTRIES($referenceDate: Date!) {
    entries(
      pagination: { limit: 999999 }
      filters: { period: { lt: $referenceDate } }
    ) {
      data {
        attributes {
          period
          value
          transfer
          investment {
            data {
              attributes {
                name
                strategy {
                  data {
                    attributes {
                      name
                    }
                  }
                }
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

export const QUERY_GET_ENTRIES_BY_INVESTMENTS = gql`
  query GET_ENTRIES_BY_INVESTMENT($investment: String!, $referenceDate: Date!) {
    entries(
      pagination: { limit: 999999 }
      filters: {
        investment: { name: { eq: $investment } }
        period: { lt: $referenceDate }
      }
    ) {
      data {
        attributes {
          period
          value
          transfer
          investment {
            data {
              attributes {
                name
                strategy {
                  data {
                    attributes {
                      name
                    }
                  }
                }
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

export const QUERY_GET_ENTRIES_BY_CATEGORY = gql`
  query GET_ENTRIES_BY_CATEGORY($category: String!, $referenceDate: Date!) {
    entries(
      pagination: { limit: 999999 }
      filters: {
        investment: { category: { name: { eq: $category } } }
        period: { lt: $referenceDate }
      }
    ) {
      data {
        attributes {
          period
          value
          transfer
          investment {
            data {
              attributes {
                name
                strategy {
                  data {
                    attributes {
                      name
                    }
                  }
                }
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
    $transfer: Boolean = false
  ) {
    createEntry(
      data: {
        period: $period
        value: $value
        investment: $investment
        publishedAt: $published
        transfer: $transfer
      }
    ) {
      data {
        id
      }
    }
  }
`;

export const GET_ENTRY_BY_INVESTMENT_DATE = gql`
  query GET_ENTRY_BY_INVESTMENT_DATE($period: Date, $investment: ID) {
    entries(
      filters: {
        period: { eq: $period }
        investment: { id: { eq: $investment } }
      }
    ) {
      data {
        id
        attributes {
          period
          value
          investment {
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

export const UPDATE_ENTRY = gql`
  mutation UPDATE_ENTRY($investment: ID!, $amount: Float) {
    updateEntry(id: $investment, data: { value: $amount }) {
      data {
        id
      }
    }
  }
`;
