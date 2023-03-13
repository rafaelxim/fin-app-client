import moment from 'moment';
import { EntryEntity } from '../../types/dbTypes';

export /**
 * Filtra as entries por categoria ou investimentos
 * @param toSubtract se 1, pega entries do mês anterior
 */
const filterByMonthSubstraction = (
  monthBalances: EntryEntity[],
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

export const getMonthTotalValue = (currentEntries: EntryEntity[]) => {
  const res = currentEntries.reduce((prev, curr) => {
    if (curr.attributes) {
      return prev + curr.attributes.value;
    }
    return prev;
  }, 0);

  return res;
};

export const getTotalPatrimony = (monthBalances: EntryEntity[]) => {
  if (monthBalances?.length) {
    let currentEntries = filterByMonthSubstraction(monthBalances, 0);
    let pastEntries = filterByMonthSubstraction(monthBalances, 1);
    if (currentEntries?.length === 0) {
      currentEntries = filterByMonthSubstraction(monthBalances, 1);
      pastEntries = filterByMonthSubstraction(monthBalances, 2);
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

export const getSummaryByCategory = (
  monthBalances: EntryEntity[],
  category: string
) => {
  if (monthBalances?.length) {
    let currentEntries = filterByMonthSubstraction(monthBalances, 0, category);
    let currentEntriesNoTransfers = filterByMonthSubstraction(
      monthBalances,
      0,
      category,
      '',
      true
    );
    let pastEntries = filterByMonthSubstraction(monthBalances, 1, category);
    if (currentEntries?.length === 0) {
      currentEntries = filterByMonthSubstraction(monthBalances, 1, category);
      currentEntriesNoTransfers = filterByMonthSubstraction(
        monthBalances,
        1,
        category,
        '',
        true
      );
      pastEntries = filterByMonthSubstraction(monthBalances, 2, category);
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

export const getSummaryByInvestment = (
  monthBalances: EntryEntity[],
  investment: string
) => {
  if (monthBalances?.length) {
    let currentEntries = filterByMonthSubstraction(
      monthBalances,
      0,
      undefined,
      investment
    );
    let currentEntriesNoTransfers = filterByMonthSubstraction(
      monthBalances,
      0,
      undefined,
      investment,
      true
    );
    let pastEntries = filterByMonthSubstraction(
      monthBalances,
      1,
      undefined,
      investment
    );
    if (currentEntries?.length === 0) {
      currentEntries = filterByMonthSubstraction(
        monthBalances,
        1,
        undefined,
        investment
      );
      currentEntriesNoTransfers = filterByMonthSubstraction(
        monthBalances,
        1,
        undefined,
        investment,
        true
      );
      pastEntries = filterByMonthSubstraction(
        monthBalances,
        2,
        undefined,
        investment
      );
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

export const getTotalPatrimonyByMonth = (monthBalances: EntryEntity[]) => {
  const patrimonyByMonth = [];
  for (let i = 0; i < 36; i++) {
    const currentMonthEntries = filterByMonthSubstraction(monthBalances!, i);
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

export const getTotalPatrimonyByMonthAndInvestment = (
  monthBalances: EntryEntity[],
  investment?: string
) => {
  const patrimonyByMonth = [];
  for (let i = 0; i < 36; i++) {
    const currentMonthEntries = filterByMonthSubstraction(
      monthBalances!,
      i,
      '',
      investment
    );
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

export const getRenderData = (monthBalances: EntryEntity[]) => {
  const {
    moneyVariation,
    variation,
    currentPatrimonyValue,
    formattedVariation,
  } = getTotalPatrimony(monthBalances);

  const {
    variation: variationRendaFixa,
    moneyVariation: moneyVariationRendaFixa,
    currentPatrimonyValue: currentPatrimonyValueRendaFixa,
    formattedVariation: formattedVariationRendaFixa,
  } = getSummaryByCategory(monthBalances, 'Renda Fixa');

  const {
    variation: variationTD,
    moneyVariation: moneyVariationTD,
    currentPatrimonyValue: currentPatrimonyValueTD,
    formattedVariation: formattedVariationTD,
  } = getSummaryByCategory(monthBalances, 'Tesouro Direto');

  const {
    variation: variationFGTS,
    moneyVariation: moneyVariationFGTS,
    currentPatrimonyValue: currentPatrimonyValueFGTS,
    formattedVariation: formattedVariationFGTS,
  } = getSummaryByInvestment(monthBalances, 'FGTS');

  const {
    variation: variationNubank,
    moneyVariation: moneyVariationNubank,
    currentPatrimonyValue: currentPatrimonyValueNubank,
    formattedVariation: formattedVariationNubank,
  } = getSummaryByInvestment(monthBalances, 'CONTA NUBANK');

  const {
    variation: variationItau,
    moneyVariation: moneyVariationItau,
    currentPatrimonyValue: currentPatrimonyValueItau,
    formattedVariation: formattedVariationItau,
  } = getSummaryByInvestment(monthBalances, 'CONTA ITAU');

  const {
    variation: variationSantander,
    moneyVariation: moneyVariationSantander,
    currentPatrimonyValue: currentPatrimonyValueSantander,
    formattedVariation: formattedVariationSantander,
  } = getSummaryByInvestment(monthBalances, 'CONTA SANTANDER');

  const {
    variation: variationCripto,
    moneyVariation: moneyVariationCripto,
    currentPatrimonyValue: currentPatrimonyValueCripto,
    formattedVariation: formattedVariationCripto,
  } = getSummaryByCategory(monthBalances, 'Crypto');

  const { currentPatrimonyValue: currentPatrimonyValueCareiras } =
    getSummaryByCategory(monthBalances, 'Carteiras');

  const formatedPieData = [
    {
      name: 'FGTS',
      value: currentPatrimonyValueFGTS,
      color: '#1e90c4',
    },
    {
      name: 'Carteiras',
      value: currentPatrimonyValueCareiras - currentPatrimonyValueFGTS,
      color: '#15f4d5',
    },

    {
      name: 'Renda Fixa',
      value: currentPatrimonyValueRendaFixa,
      color: '#1e90c4',
    },
    {
      name: 'Tesouro Direto',
      value: currentPatrimonyValueTD,
      color: '#15f4d5',
    },
    {
      name: 'Crypto',
      value: currentPatrimonyValueCripto,
      color: '#1e90c4',
    },
  ];

  const formatedPieAlocationData = [
    {
      name: 'Não alocado',
      value: currentPatrimonyValueCareiras - currentPatrimonyValueFGTS,
      color: '#141c22',
    },
    {
      name: 'Alocado',
      value:
        currentPatrimonyValue -
        (currentPatrimonyValueCareiras - currentPatrimonyValueFGTS),
      color: '#15f4d5',
    },
  ];

  return {
    moneyVariation,
    variation,
    currentPatrimonyValue,
    formattedVariation,
    variationRendaFixa,
    moneyVariationRendaFixa,
    currentPatrimonyValueRendaFixa,
    formattedVariationRendaFixa,
    variationTD,
    moneyVariationTD,
    currentPatrimonyValueTD,
    formattedVariationTD,
    variationFGTS,
    moneyVariationFGTS,
    currentPatrimonyValueFGTS,
    formattedVariationFGTS,
    variationNubank,
    moneyVariationNubank,
    currentPatrimonyValueNubank,
    formattedVariationNubank,
    variationItau,
    moneyVariationItau,
    currentPatrimonyValueItau,
    formattedVariationItau,
    variationSantander,
    moneyVariationSantander,
    currentPatrimonyValueSantander,
    formattedVariationSantander,
    variationCripto,
    moneyVariationCripto,
    currentPatrimonyValueCripto,
    formattedVariationCripto,
    currentPatrimonyValueCareiras,
    formatedPieData,
    formatedPieAlocationData,
  };
};
