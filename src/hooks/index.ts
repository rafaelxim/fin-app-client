import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_GET_ALL_ENTRIES } from '../api/queries';
import { useAppDispatch } from '../app/hooks';
import {
  activateLoader,
  deactivateLoader,
} from '../features/FullScreenLoader/loaderSlice';
import { EntryEntity, Query } from '../types/dbTypes';

export const useMonthBalances = () => {
  const [monthBalances, setMonthBalances] = useState<EntryEntity[]>([]);
  const [lazy] = useLazyQuery<Query>(QUERY_GET_ALL_ENTRIES);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(activateLoader());
    executeQuery();
  }, []);

  const executeQuery = () => {
    void (async () => {
      const res = await lazy();
      setMonthBalances(res.data?.entries?.data!);
      dispatch(deactivateLoader());
    })();
  };

  return monthBalances;
};
