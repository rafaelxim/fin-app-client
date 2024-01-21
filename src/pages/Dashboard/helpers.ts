import moment from 'moment';
import { EntryEntity } from '../../types/dbTypes';

/**
 * Filtra as entries por categoria ou investimentos
 * @param toSubtract se 1, pega entries do mês anterior
 */
export const filterByMonthSubstraction = (
  monthBalances: EntryEntity[],
  toSubtract: number = 0,
  category?: boolean,
  investment?: boolean,
  strategy?: string,
  excludeTransfers: boolean = false
) => {
  return monthBalances?.filter((entry) => {
    if (category) {
      if (excludeTransfers) {
        return (
          entry?.attributes?.period ===
            moment().subtract(toSubtract, 'months').format('YYYY-MM-01') &&
          entry.attributes?.transfer !== true
        );
      } else {
        return (
          entry?.attributes?.period ===
          moment().subtract(toSubtract, 'months').format('YYYY-MM-01')
        );
      }
    } else if (investment) {
      if (excludeTransfers) {
        return (
          entry?.attributes?.period ===
            moment().subtract(toSubtract, 'months').format('YYYY-MM-01') &&
          entry.attributes?.transfer !== true
        );
      } else {
        return (
          entry?.attributes?.period ===
          moment().subtract(toSubtract, 'months').format('YYYY-MM-01')
        );
      }
    } else if (strategy) {
      if (excludeTransfers) {
        return (
          entry?.attributes?.period ===
            moment().subtract(toSubtract, 'months').format('YYYY-MM-01') &&
          entry?.attributes?.investment?.data?.attributes?.strategy?.data
            ?.attributes?.name === strategy &&
          entry.attributes?.transfer !== true
        );
      } else {
        return (
          entry?.attributes?.period ===
            moment().subtract(toSubtract, 'months').format('YYYY-MM-01') &&
          entry?.attributes?.investment?.data?.attributes?.strategy?.data
            ?.attributes?.name === strategy
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

export const getSummaryByCategory = (monthBalances: EntryEntity[]) => {
  if (monthBalances?.length) {
    let currentEntries = filterByMonthSubstraction(monthBalances, 0, true);
    let currentEntriesNoTransfers = filterByMonthSubstraction(
      monthBalances,
      0,
      true,
      false,
      '',
      true
    );
    let pastEntries = filterByMonthSubstraction(monthBalances, 1, true);
    if (currentEntries?.length === 0) {
      currentEntries = filterByMonthSubstraction(monthBalances, 1, true);
      currentEntriesNoTransfers = filterByMonthSubstraction(
        monthBalances,
        1,
        true,
        false,
        '',
        true
      );
      pastEntries = filterByMonthSubstraction(monthBalances, 2, true);
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

export const getSummaryByStrategy = (
  monthBalances: EntryEntity[],
  strategy: string
) => {
  if (monthBalances?.length) {
    let currentEntries = filterByMonthSubstraction(
      monthBalances,
      0,
      false,
      false,
      strategy
    );
    if (currentEntries?.length === 0) {
      currentEntries = filterByMonthSubstraction(
        monthBalances,
        1,
        false,
        false,
        strategy
      );
    }

    const currentPatrimonyValue = getMonthTotalValue(currentEntries!);

    return {
      currentPatrimonyValue,
    };
  } else {
    return {
      currentPatrimonyValue: 0,
    };
  }
};

export const getSummaryByInvestment = (monthBalances: EntryEntity[]) => {
  if (monthBalances?.length) {
    let currentEntries = filterByMonthSubstraction(
      monthBalances,
      0,
      undefined,
      true
    );
    let currentEntriesNoTransfers = filterByMonthSubstraction(
      monthBalances,
      0,
      undefined,
      true,
      '',
      true
    );
    let pastEntries = filterByMonthSubstraction(
      monthBalances,
      1,
      undefined,
      true
    );
    if (currentEntries?.length === 0) {
      currentEntries = filterByMonthSubstraction(
        monthBalances,
        1,
        undefined,
        true
      );
      currentEntriesNoTransfers = filterByMonthSubstraction(
        monthBalances,
        1,
        undefined,
        true,
        '',
        true
      );
      pastEntries = filterByMonthSubstraction(
        monthBalances,
        2,
        undefined,
        true
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
  monthBalances: EntryEntity[]
) => {
  const patrimonyByMonth = [];
  for (let i = 0; i < 36; i++) {
    const currentMonthEntries = filterByMonthSubstraction(
      monthBalances!,
      i,
      false,
      true
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

type BalanceData = {
  monthBalances: EntryEntity[];
  investmentFGTSBalances: EntryEntity[];
  investmentContaNuBalances: EntryEntity[];
  investmentContaItauBalances: EntryEntity[];
  investmentContaSantanderBalances: EntryEntity[];
  categoryRendaFixaEntries: EntryEntity[];
  categoryTesouro: EntryEntity[];
  categoryCrypto: EntryEntity[];
  categoryCarteiras: EntryEntity[];
};

export const getRenderData = (balance: BalanceData) => {
  const {
    moneyVariation,
    variation,
    currentPatrimonyValue,
    formattedVariation,
  } = getTotalPatrimony(balance.monthBalances);

  const {
    variation: variationRendaFixa,
    moneyVariation: moneyVariationRendaFixa,
    currentPatrimonyValue: currentPatrimonyValueRendaFixa,
    formattedVariation: formattedVariationRendaFixa,
  } = getSummaryByCategory(balance.categoryRendaFixaEntries);

  const {
    variation: variationTD,
    moneyVariation: moneyVariationTD,
    currentPatrimonyValue: currentPatrimonyValueTD,
    formattedVariation: formattedVariationTD,
  } = getSummaryByCategory(balance.categoryTesouro);

  const {
    variation: variationFGTS,
    moneyVariation: moneyVariationFGTS,
    currentPatrimonyValue: currentPatrimonyValueFGTS,
    formattedVariation: formattedVariationFGTS,
  } = getSummaryByInvestment(balance.investmentFGTSBalances);

  const {
    variation: variationNubank,
    moneyVariation: moneyVariationNubank,
    currentPatrimonyValue: currentPatrimonyValueNubank,
    formattedVariation: formattedVariationNubank,
  } = getSummaryByInvestment(balance.investmentContaNuBalances);

  const {
    variation: variationItau,
    moneyVariation: moneyVariationItau,
    currentPatrimonyValue: currentPatrimonyValueItau,
    formattedVariation: formattedVariationItau,
  } = getSummaryByInvestment(balance.investmentContaItauBalances);

  const {
    variation: variationSantander,
    moneyVariation: moneyVariationSantander,
    currentPatrimonyValue: currentPatrimonyValueSantander,
    formattedVariation: formattedVariationSantander,
  } = getSummaryByInvestment(balance.investmentContaSantanderBalances);

  const {
    variation: variationCripto,
    moneyVariation: moneyVariationCripto,
    currentPatrimonyValue: currentPatrimonyValueCripto,
    formattedVariation: formattedVariationCripto,
  } = getSummaryByCategory(balance.categoryCrypto);
  const { currentPatrimonyValue: currentPatrimonyValueCareiras } =
    getSummaryByCategory(balance.categoryCarteiras);
  const { currentPatrimonyValue: currentPatrimonyValueInflacao } =
    getSummaryByStrategy(balance.monthBalances, 'Inflação');
  const { currentPatrimonyValue: currentPatrimonyValuePreFixado } =
    getSummaryByStrategy(balance.monthBalances, 'Pré-Fixado');
  const { currentPatrimonyValue: currentPatrimonyValuePosFixado } =
    getSummaryByStrategy(balance.monthBalances, 'Pós-Fixado');
  const { currentPatrimonyValue: currentPatrimonyValueVariavel } =
    getSummaryByStrategy(balance.monthBalances, 'Renda Variável');
  const { currentPatrimonyValue: currentPatrimonyValueConta } =
    getSummaryByStrategy(balance.monthBalances, 'Conta');

  const formatedStrategyPieData = [
    {
      name: 'Inflação',
      value: currentPatrimonyValueInflacao,
      color: '#1e90c4',
    },

    {
      name: 'Pré-Fixado',
      value: currentPatrimonyValuePreFixado,
      color: '#15f4d5',
    },
    {
      name: 'Conta',
      value: currentPatrimonyValueConta,
      color: '#1e90c4',
    },
    {
      name: 'Renda Variável',
      value: currentPatrimonyValueVariavel,
      color: '#15f4d5',
    },
    {
      name: 'Pós-Fixado',
      value: currentPatrimonyValuePosFixado,
      color: '#1e90c4',
    },
  ];

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
    formatedStrategyPieData,
  };
};
