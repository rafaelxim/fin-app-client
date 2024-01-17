import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import * as Q from '../api/queries';
import { useAppDispatch } from '../app/hooks';
import * as L from '../features/FullScreenLoader/loaderSlice';
import { EntryEntity, Query } from '../types/dbTypes';

export const useMonthBalances = () => {
  const [monthBalances, setMonthBalances] = useState<EntryEntity[]>([]);
  const [investmentFGTSBalances, setInvestmentFGTSBalances] = useState<
    EntryEntity[]
  >([]);
  const [investmentContaNuBalances, setInvestmentContaNuBalances] = useState<
    EntryEntity[]
  >([]);
  const [investmentContaItauBalances, setInvestmentContaItauBalances] =
    useState<EntryEntity[]>([]);
  const [
    investmentContaSantanderBalances,
    setInvestmentContaSantanderBalances,
  ] = useState<EntryEntity[]>([]);

  const [lazy] = useLazyQuery<Query>(Q.QUERY_GET_ALL_ENTRIES);
  const [lazyFGTS] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_INVESTMENTS, {
    variables: { investment: 'FGTS' },
  });
  const [lazyNu] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_INVESTMENTS, {
    variables: { investment: 'CONTA NUBANK' },
  });
  const [lazyItau] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_INVESTMENTS, {
    variables: { investment: 'CONTA ITAU' },
  });
  const [lazySantander] = useLazyQuery<Query>(
    Q.QUERY_GET_ENTRIES_BY_INVESTMENTS,
    {
      variables: { investment: 'CONTA SANTANDER' },
    }
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(L.activateLoader());
    executeQuery();
  }, []);

  const executeQuery = () => {
    void (async () => {
      const res = await lazy();
      setMonthBalances(res.data?.entries?.data!);

      const resFGTS = await lazyFGTS();
      setInvestmentFGTSBalances(resFGTS.data?.entries?.data!);

      const resContaNu = await lazyNu();
      setInvestmentContaNuBalances(resContaNu.data?.entries?.data!);

      const resContaItau = await lazyItau();
      setInvestmentContaItauBalances(resContaItau.data?.entries?.data!);

      const resContaSantander = await lazySantander();
      setInvestmentContaSantanderBalances(
        resContaSantander.data?.entries?.data!
      );

      dispatch(L.deactivateLoader());
    })();
  };

  return {
    monthBalances,
    investmentFGTSBalances,
    investmentContaNuBalances,
    investmentContaItauBalances,
    investmentContaSantanderBalances,
  };
};
