import React, { useEffect, useState } from 'react';
import moment from 'moment';
import * as S from './styles';
import Menu from '../../components/Menu';
import SummaryCard from '../../components/SummaryCard';
import Wallet from '../../assets/Icons/Wallet';
import GraphicCard from '../../components/GraphicCard';
import { useLazyQuery } from '@apollo/client';
import { EntryEntity, GetEntriesByMonthResponse } from '../../types/dbTypes';
import { QUERY_GET_ALL_ENTRIES } from './queries';
import { toReal } from '../../utils/formaters/helpers';

const Dashboard = () => {
  const [monthBalances, setMonthBalances] = useState<EntryEntity[]>();
  const [lazy] = useLazyQuery<GetEntriesByMonthResponse>(QUERY_GET_ALL_ENTRIES);

  useEffect(() => {
    executeQuery();
  }, []);

  const executeQuery = () => {
    void (async () => {
      const res = await lazy();
      setMonthBalances(res.data?.entries.data);
    })();
  };

  const filterByMonthSubstraction = (toSubtract: number = 0) => {
    return monthBalances?.filter((entry) => {
      return (
        entry.attributes.period ===
        moment().subtract(toSubtract, 'months').format('YYYY-MM-01')
      );
    });
  };

  const getMonthTotalValue = (currentEntries: EntryEntity[]) => {
    const res = currentEntries.reduce((prev, curr) => {
      return prev + curr.attributes.value;
    }, 0);

    return res;
  };

  const getTotalPatrimony = () => {
    if (monthBalances?.length) {
      let currentEntries = filterByMonthSubstraction(0);
      let pastEntries = filterByMonthSubstraction(1);
      if (currentEntries?.length === 0) {
        currentEntries = filterByMonthSubstraction(1);
        console.log({ currentEntries });
        pastEntries = filterByMonthSubstraction(2);
      }

      const currentPatrimonyValue = getMonthTotalValue(currentEntries!);

      const pastPatrimonyValue = getMonthTotalValue(pastEntries!);

      const variation = (currentPatrimonyValue / pastPatrimonyValue - 1) * 100;

      const formattedVariation = variation.toFixed(2);

      return {
        currentPatrimonyValue,
        variation,
        formattedVariation,
      };
    } else {
      return {
        currentPatrimonyValue: 0,
        variation: 0,
        formattedVariation: ' ',
      };
    }
  };

  const getTotalPatrimonyByMonth = () => {
    const patrimonyByMonth = [];
    for (let i = 0; i < 36; i++) {
      const currentMonthEntries = filterByMonthSubstraction(i);
      if (currentMonthEntries?.length) {
        const monthObj = {
          period: moment(currentMonthEntries[0].attributes.period)
            .locale('pt-br')
            .format('MMM/YYYY'),
          totalPatrimony: getMonthTotalValue(currentMonthEntries),
        };
        patrimonyByMonth.push(monthObj);
      }
    }

    console.log(patrimonyByMonth);

    return patrimonyByMonth.reverse();
  };

  const { variation, currentPatrimonyValue, formattedVariation } =
    getTotalPatrimony();

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
            icon={<Wallet color="grey100" />}
          />
          <SummaryCard
            title="-"
            elapsedTime="-"
            mainValue="-"
            variation="-"
            negativeVariation
            icon={<Wallet color="grey100" />}
          />
          <SummaryCard
            title="-"
            elapsedTime="-"
            mainValue="-"
            variation="-"
            negativeVariation
            icon={<Wallet color="grey100" />}
          />
        </S.SummaryCardsContainer>

        <S.GraphicCardContainer>
          <GraphicCard
            data={getTotalPatrimonyByMonth()}
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