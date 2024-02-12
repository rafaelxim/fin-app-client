import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import * as Q from '../api/queries';
import { useAppDispatch } from '../app/hooks';
import * as L from '../features/FullScreenLoader/loaderSlice';
import { EntryEntity, Query } from '../types/dbTypes';

export const useMonthBalances = (referenceDate: string | undefined) => {
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
  const [categoryRendaFixaEntries, setCategoryRendaFixaEntries] = useState<
    EntryEntity[]
  >([]);

  const [categoryTesouro, setCategoryTesouro] = useState<EntryEntity[]>([]);

  const [categoryCrypto, setCategoryCrypto] = useState<EntryEntity[]>([]);

  const [categoryCarteiras, setCategoryCarteiras] = useState<EntryEntity[]>([]);

  // ---------------------- // -------------------- // -----------------------------------

  const [lazy] = useLazyQuery<Query>(Q.QUERY_GET_ALL_ENTRIES, {
    variables: { referenceDate },
  });
  const [lazyFGTS] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_INVESTMENTS, {
    variables: { investment: 'FGTS', referenceDate },
  });
  const [lazyNu] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_INVESTMENTS, {
    variables: { investment: 'CONTA NUBANK', referenceDate },
  });
  const [lazyItau] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_INVESTMENTS, {
    variables: { investment: 'CONTA ITAU', referenceDate },
  });
  const [lazySantander] = useLazyQuery<Query>(
    Q.QUERY_GET_ENTRIES_BY_INVESTMENTS,
    {
      variables: { investment: 'CONTA SANTANDER', referenceDate },
    }
  );

  const [lazyRendaFixa] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_CATEGORY, {
    variables: { category: 'Renda Fixa', referenceDate },
  });

  const [lazyTesouro] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_CATEGORY, {
    variables: { category: 'Tesouro Direto', referenceDate },
  });

  const [lazyCrypto] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_CATEGORY, {
    variables: { category: 'Crypto', referenceDate },
  });

  const [lazyCarteiras] = useLazyQuery<Query>(Q.QUERY_GET_ENTRIES_BY_CATEGORY, {
    variables: { category: 'Carteiras', referenceDate },
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(L.activateLoader());
    executeQuery();
  }, [referenceDate]);

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

      const resRendaFixaCategory = await lazyRendaFixa();
      setCategoryRendaFixaEntries(resRendaFixaCategory.data?.entries?.data!);

      const resTesouroCategory = await lazyTesouro();
      setCategoryTesouro(resTesouroCategory.data?.entries?.data!);

      const resCrypto = await lazyCrypto();
      setCategoryCrypto(resCrypto.data?.entries?.data!);

      const resCarteiras = await lazyCarteiras();
      setCategoryCarteiras(resCarteiras.data?.entries?.data!);

      dispatch(L.deactivateLoader());
    })();
  };

  return {
    monthBalances,
    investmentFGTSBalances,
    investmentContaNuBalances,
    investmentContaItauBalances,
    investmentContaSantanderBalances,
    categoryRendaFixaEntries,
    categoryTesouro,
    categoryCrypto,
    categoryCarteiras,
  };
};
