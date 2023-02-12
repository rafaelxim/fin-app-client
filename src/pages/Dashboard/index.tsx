import React, { useEffect, useState } from 'react';
import moment from 'moment';
import * as S from './styles';
import Menu from '../../components/Menu';
import SummaryCard from '../../components/SummaryCard';
import Wallet from '../../assets/Icons/Wallet';
import GraphicCard from '../../components/GraphicCard';
import { useLazyQuery } from '@apollo/client';
import { EntryEntity, Query } from '../../types/dbTypes';
import { QUERY_GET_ALL_ENTRIES } from './queries';
import { toReal } from '../../utils/formaters/helpers';
import { useAppDispatch } from '../../app/hooks';
import {
  activate,
  deactivate,
} from '../../features/FullScreenLoader/loaderSlice';

const Dashboard = () => {
  const [monthBalances, setMonthBalances] = useState<EntryEntity[]>();
  const [lazy] = useLazyQuery<Query>(QUERY_GET_ALL_ENTRIES);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(activate());
    executeQuery();
  }, []);

  const executeQuery = () => {
    void (async () => {
      const res = await lazy();
      setMonthBalances(res.data?.entries?.data);
      dispatch(deactivate());
    })();
  };

  /**
   * Filtra as entries por categoria ou investimentos
   * @param toSubtract se 1, pega entries do mês anterior
   */
  const filterByMonthSubstraction = (
    toSubtract: number = 0,
    category?: string,
    investment?: string,
    excludeTransfers: boolean = false
  ) => {
    return monthBalances?.filter((entry) => {
      if (category) {
        if (excludeTransfers) {
          return (
            entry?.attributes?.period ===
              moment().subtract(toSubtract, 'months').format('YYYY-MM-01') &&
            entry?.attributes?.investment?.data?.attributes?.category?.data
              ?.attributes?.name === category &&
            entry.attributes?.transfer !== true
          );
        } else {
          return (
            entry?.attributes?.period ===
              moment().subtract(toSubtract, 'months').format('YYYY-MM-01') &&
            entry?.attributes?.investment?.data?.attributes?.category?.data
              ?.attributes?.name === category
          );
        }
      } else if (investment) {
        if (excludeTransfers) {
          return (
            entry?.attributes?.period ===
              moment().subtract(toSubtract, 'months').format('YYYY-MM-01') &&
            entry?.attributes?.investment?.data?.attributes?.name ===
              investment &&
            entry.attributes?.transfer !== true
          );
        } else {
          return (
            entry?.attributes?.period ===
              moment().subtract(toSubtract, 'months').format('YYYY-MM-01') &&
            entry?.attributes?.investment?.data?.attributes?.name === investment
          );
        }
      } else {
        return (
          entry.attributes?.period ===
          moment().subtract(toSubtract, 'months').format('YYYY-MM-01')
        );
      }
    });
  };

  const getMonthTotalValue = (currentEntries: EntryEntity[]) => {
    const res = currentEntries.reduce((prev, curr) => {
      if (curr.attributes) {
        return prev + curr.attributes.value;
      }
      return prev;
    }, 0);

    return res;
  };

  const getTotalPatrimony = () => {
    if (monthBalances?.length) {
      let currentEntries = filterByMonthSubstraction(0);
      let pastEntries = filterByMonthSubstraction(1);
      if (currentEntries?.length === 0) {
        currentEntries = filterByMonthSubstraction(1);
        pastEntries = filterByMonthSubstraction(2);
      }

      const currentPatrimonyValue = getMonthTotalValue(currentEntries!);

      const pastPatrimonyValue = getMonthTotalValue(pastEntries!);

      const variation = (currentPatrimonyValue / pastPatrimonyValue - 1) * 100;

      const moneyVariation = currentPatrimonyValue - pastPatrimonyValue;

      const formattedVariation = variation.toFixed(2);

      return {
        currentPatrimonyValue,
        variation,
        formattedVariation,
        moneyVariation,
      };
    } else {
      return {
        currentPatrimonyValue: 0,
        variation: 0,
        formattedVariation: ' ',
        moneyVariation: 0,
      };
    }
  };

  const getSummaryByCategory = (category: string) => {
    if (monthBalances?.length) {
      let currentEntries = filterByMonthSubstraction(0, category);
      let currentEntriesNoTransfers = filterByMonthSubstraction(
        0,
        category,
        '',
        true
      );
      let pastEntries = filterByMonthSubstraction(1, category);
      if (currentEntries?.length === 0) {
        currentEntries = filterByMonthSubstraction(1, category);
        currentEntriesNoTransfers = filterByMonthSubstraction(
          1,
          category,
          '',
          true
        );
        pastEntries = filterByMonthSubstraction(2, category);
      }

      const currentPatrimonyValue = getMonthTotalValue(currentEntries!);

      const currentPatrimonyValueNoTransfers = getMonthTotalValue(
        currentEntriesNoTransfers!
      );

      const pastPatrimonyValue = getMonthTotalValue(pastEntries!);

      const variation =
        (currentPatrimonyValueNoTransfers / pastPatrimonyValue - 1) * 100;

      const moneyVariation =
        currentPatrimonyValueNoTransfers - pastPatrimonyValue;

      const formattedVariation = variation.toFixed(2);

      return {
        currentPatrimonyValue,
        variation,
        formattedVariation,
        moneyVariation,
      };
    } else {
      return {
        currentPatrimonyValue: 0,
        variation: 0,
        formattedVariation: ' ',
        moneyVariation: 0,
      };
    }
  };

  const getSummaryByInvestment = (investment: string) => {
    if (monthBalances?.length) {
      let currentEntries = filterByMonthSubstraction(0, undefined, investment);
      let currentEntriesNoTransfers = filterByMonthSubstraction(
        0,
        undefined,
        investment,
        true
      );
      let pastEntries = filterByMonthSubstraction(1, undefined, investment);
      if (currentEntries?.length === 0) {
        currentEntries = filterByMonthSubstraction(1, undefined, investment);
        currentEntriesNoTransfers = filterByMonthSubstraction(
          1,
          undefined,
          investment,
          true
        );
        pastEntries = filterByMonthSubstraction(2, undefined, investment);
      }

      const currentPatrimonyValue = getMonthTotalValue(currentEntries!);

      const currentPatrimonyValueNoTransfers = getMonthTotalValue(
        currentEntriesNoTransfers!
      );

      const pastPatrimonyValue = getMonthTotalValue(pastEntries!);

      const variation =
        (currentPatrimonyValueNoTransfers / pastPatrimonyValue - 1) * 100;

      const moneyVariation =
        currentPatrimonyValueNoTransfers - pastPatrimonyValue;

      const formattedVariation = variation.toFixed(2);

      return {
        currentPatrimonyValue,
        variation,
        formattedVariation,
        moneyVariation,
      };
    } else {
      return {
        currentPatrimonyValue: 0,
        variation: 0,
        formattedVariation: ' ',
        moneyVariation: 0,
      };
    }
  };

  const getTotalPatrimonyByMonth = () => {
    const patrimonyByMonth = [];
    for (let i = 0; i < 36; i++) {
      const currentMonthEntries = filterByMonthSubstraction(i);
      if (currentMonthEntries?.length) {
        const monthObj = {
          period: moment(currentMonthEntries[0].attributes?.period)
            .locale('pt-br')
            .format('MMM/YYYY'),
          totalPatrimony: getMonthTotalValue(currentMonthEntries),
        };
        patrimonyByMonth.push(monthObj);
      }
    }

    return patrimonyByMonth.reverse();
  };

  const getTotalPatrimonyByMonthAndInvestment = (investment?: string) => {
    const patrimonyByMonth = [];
    for (let i = 0; i < 36; i++) {
      const currentMonthEntries = filterByMonthSubstraction(i, '', investment);
      if (currentMonthEntries?.length) {
        const monthObj = {
          period: moment(currentMonthEntries[0].attributes?.period)
            .locale('pt-br')
            .format('MMM/YYYY'),
          totalPatrimony: getMonthTotalValue(currentMonthEntries),
        };
        patrimonyByMonth.push(monthObj);
      }
    }

    return patrimonyByMonth.reverse();
  };

  const {
    moneyVariation,
    variation,
    currentPatrimonyValue,
    formattedVariation,
  } = getTotalPatrimony();

  const {
    variation: variationRendaFixa,
    moneyVariation: moneyVariationRendaFixa,
    currentPatrimonyValue: currentPatrimonyValueRendaFixa,
    formattedVariation: formattedVariationRendaFixa,
  } = getSummaryByCategory('Renda Fixa');

  const {
    variation: variationTD,
    moneyVariation: moneyVariationTD,
    currentPatrimonyValue: currentPatrimonyValueTD,
    formattedVariation: formattedVariationTD,
  } = getSummaryByCategory('Tesouro Direto');

  const {
    variation: variationFGTS,
    moneyVariation: moneyVariationFGTS,
    currentPatrimonyValue: currentPatrimonyValueFGTS,
    formattedVariation: formattedVariationFGTS,
  } = getSummaryByInvestment('FGTS');

  const {
    variation: variationCripto,
    moneyVariation: moneyVariationCripto,
    currentPatrimonyValue: currentPatrimonyValueCripto,
    formattedVariation: formattedVariationCripto,
  } = getSummaryByCategory('Crypto');

  return (
    <S.Wrapper>
      <S.Grid>
        <S.HeaderContainer>
          <S.PageTitle>Dashboard</S.PageTitle>
        </S.HeaderContainer>
        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
        <S.SummaryCardsContainer>
          <SummaryCard
            title="Patrimônio"
            elapsedTime="do último mês"
            mainValue={toReal(currentPatrimonyValue)}
            variation={formattedVariation + '%'}
            negativeVariation={variation < 0}
            icon={<Wallet color="primary" />}
            moneyVariation={toReal(moneyVariation)}
          />
          <SummaryCard
            title="Renda Fixa"
            elapsedTime="do último mês"
            mainValue={toReal(currentPatrimonyValueRendaFixa)}
            variation={formattedVariationRendaFixa + '%'}
            negativeVariation={variationRendaFixa < 0}
            icon={<Wallet color="primary" />}
            moneyVariation={toReal(moneyVariationRendaFixa)}
          />
          <SummaryCard
            title="Tesouro Direto"
            elapsedTime="do último mês"
            mainValue={toReal(currentPatrimonyValueTD)}
            variation={formattedVariationTD + '%'}
            negativeVariation={variationTD < 0}
            icon={<Wallet color="primary" />}
            moneyVariation={toReal(moneyVariationTD)}
          />
        </S.SummaryCardsContainer>

        <S.SummaryCardsContainer>
          <SummaryCard
            title="FGTS"
            elapsedTime="do último mês"
            mainValue={toReal(currentPatrimonyValueFGTS)}
            variation={formattedVariationFGTS + '%'}
            negativeVariation={variationFGTS < 0}
            icon={<Wallet color="primary" />}
            moneyVariation={toReal(moneyVariationFGTS)}
          />

          <SummaryCard
            title="Cripto"
            elapsedTime="do último mês"
            mainValue={toReal(currentPatrimonyValueCripto)}
            variation={formattedVariationCripto + '%'}
            negativeVariation={variationCripto < 0}
            icon={<Wallet color="primary" />}
            moneyVariation={toReal(moneyVariationCripto)}
          />
          {/* Todo: Pensar num novo summary card */}
          <SummaryCard
            title="Cripto"
            elapsedTime="do último mês"
            mainValue={toReal(currentPatrimonyValueCripto)}
            variation={formattedVariationCripto + '%'}
            negativeVariation={variationCripto < 0}
            icon={<Wallet color="primary" />}
            moneyVariation={toReal(moneyVariationCripto)}
          />
        </S.SummaryCardsContainer>

        <S.GraphicCardContainer>
          <GraphicCard
            title="Evolução do Patrimônio"
            data={getTotalPatrimonyByMonth()}
            dataKeyX="period"
            dataKeyY="totalPatrimony"
          />

          <GraphicCard
            title="Evolução Saldo FGTS"
            data={getTotalPatrimonyByMonthAndInvestment('FGTS')}
            dataKeyX="period"
            dataKeyY="totalPatrimony"
          />

          {/* <GraphicCard /> */}
        </S.GraphicCardContainer>
      </S.Grid>
    </S.Wrapper>
  );
};

export default Dashboard;
