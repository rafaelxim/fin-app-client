import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Heading from './components/Heading';

const QUERY_EXAMPLE = gql`
  query GET_CATEGORIES {
    categories {
      data {
        attributes {
          name
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

const App: React.FC = () => {
  const [lazy, { loading, data, refetch }] = useLazyQuery(QUERY_EXAMPLE);

  if (loading) return <>loading</>;
  console.log({ data });

  const executeQuery = () => {
    void (async () => {
      await lazy();
    })();
  };

  const executeRefetch = () => {
    void (async () => {
      await refetch();
    })();
  };

  return (
    <div>
      <Heading />
      <h2>123</h2>
      <button onClick={executeQuery}>Call query</button>
      <button onClick={executeRefetch}>refetch</button>
      <br />
    </div>
  );
};

export default App;
