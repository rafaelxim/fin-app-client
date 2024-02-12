import moment from 'moment';
import { EntryEntity } from '../../types/dbTypes';

export const getMonthTotalValue = (currentEntries: EntryEntity[]) => {
  const res = currentEntries.reduce((prev, curr) => {
    if (curr.attributes) {
      return prev + curr.attributes.value;
    }
    return prev;
  }, 0);

  return res;
};

export const getTotalPatrimony = (
  monthBalances: EntryEntity[],
  referenceDate: string
) => {
  if (monthBalances?.length) {
    let currentEntries = getCurrentEntries(monthBalances, referenceDate);
    let pastEntries = getPastMonthEntries(monthBalances, referenceDate);

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

export const subtractMonthsFromDate = (
  referenceDate: string,
  months: number
) => {
  return moment(referenceDate).subtract(months, 'months').format('YYYY-MM-DD');
};

export const getSummaryByCategory = (
  monthBalances: EntryEntity[],
  referenceDate: string
) => {
  if (monthBalances?.length) {
    const currentEntries = getCurrentEntries(monthBalances, referenceDate);

    const pastEntries = getPastMonthEntries(monthBalances, referenceDate);

    const currentPatrimonyValue = getMonthTotalValue(currentEntries!);
    const pastPatrimonyValue = getMonthTotalValue(pastEntries!);
    const variation =
      (currentPatrimonyValue / pastPatrimonyValue - 1) * 100 || 0;
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

export const getSummaryByStrategy = (
  monthBalances: EntryEntity[],
  strategy: string,
  referenceDate: string
) => {
  if (monthBalances?.length) {
    let currentEntries = monthBalances.filter(
      (e) =>
        e.attributes?.period === subtractMonthsFromDate(referenceDate, 1) &&
        e.attributes.investment?.data?.attributes?.strategy?.data?.attributes
          ?.name === strategy
    );

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

const getCurrentEntries = (
  monthBalances: EntryEntity[],
  referenceDate: string
) => {
  return monthBalances.filter(
    (e) => e.attributes?.period === subtractMonthsFromDate(referenceDate, 1)
  );
};

const getPastMonthEntries = (
  monthBalances: EntryEntity[],
  referenceDate: string
) => {
  return monthBalances.filter(
    (e) => e.attributes?.period === subtractMonthsFromDate(referenceDate, 2)
  );
};

export const getSummaryByInvestment = (
  monthBalances: EntryEntity[],
  referenceDate: string
) => {
  if (monthBalances?.length) {
    let currentEntries = getCurrentEntries(monthBalances, referenceDate);
    let pastEntries = getPastMonthEntries(monthBalances, referenceDate);

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

export const getTotalPatrimonyByMonth = (
  monthBalances: EntryEntity[],
  referenceDate: string
) => {
  const patrimonyByMonth = [];
  for (let i = 0; i < 36; i++) {
    const currentMonthEntries = monthBalances.filter(
      (e) => e.attributes?.period === subtractMonthsFromDate(referenceDate, i)
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

export const getTotalPatrimonyByMonthAndInvestment = (
  monthBalances: EntryEntity[],
  referenceDate: string
) => {
  const patrimonyByMonth = [];
  for (let i = 0; i < 36; i++) {
    const currentMonthEntries = monthBalances.filter(
      (e) => e.attributes?.period === subtractMonthsFromDate(referenceDate, i)
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

export const getRenderData = (balance: BalanceData, referenceDate: string) => {
  const {
    moneyVariation,
    variation,
    currentPatrimonyValue,
    formattedVariation,
  } = getTotalPatrimony(balance.monthBalances, referenceDate);

  const {
    variation: variationRendaFixa,
    moneyVariation: moneyVariationRendaFixa,
    currentPatrimonyValue: currentPatrimonyValueRendaFixa,
    formattedVariation: formattedVariationRendaFixa,
  } = getSummaryByCategory(balance.categoryRendaFixaEntries, referenceDate);

  const {
    variation: variationTD,
    moneyVariation: moneyVariationTD,
    currentPatrimonyValue: currentPatrimonyValueTD,
    formattedVariation: formattedVariationTD,
  } = getSummaryByCategory(balance.categoryTesouro, referenceDate);

  const {
    variation: variationFGTS,
    moneyVariation: moneyVariationFGTS,
    currentPatrimonyValue: currentPatrimonyValueFGTS,
    formattedVariation: formattedVariationFGTS,
  } = getSummaryByInvestment(balance.investmentFGTSBalances, referenceDate);

  const {
    variation: variationNubank,
    moneyVariation: moneyVariationNubank,
    currentPatrimonyValue: currentPatrimonyValueNubank,
    formattedVariation: formattedVariationNubank,
  } = getSummaryByInvestment(balance.investmentContaNuBalances, referenceDate);

  const {
    variation: variationItau,
    moneyVariation: moneyVariationItau,
    currentPatrimonyValue: currentPatrimonyValueItau,
    formattedVariation: formattedVariationItau,
  } = getSummaryByInvestment(
    balance.investmentContaItauBalances,
    referenceDate
  );

  const {
    variation: variationSantander,
    moneyVariation: moneyVariationSantander,
    currentPatrimonyValue: currentPatrimonyValueSantander,
    formattedVariation: formattedVariationSantander,
  } = getSummaryByInvestment(
    balance.investmentContaSantanderBalances,
    referenceDate
  );

  const {
    variation: variationCripto,
    moneyVariation: moneyVariationCripto,
    currentPatrimonyValue: currentPatrimonyValueCripto,
    formattedVariation: formattedVariationCripto,
  } = getSummaryByCategory(balance.categoryCrypto, referenceDate);

  const { currentPatrimonyValue: currentPatrimonyValueCareiras } =
    getSummaryByCategory(balance.categoryCarteiras, referenceDate);
  const { currentPatrimonyValue: currentPatrimonyValueInflacao } =
    getSummaryByStrategy(balance.monthBalances, 'Inflação', referenceDate);
  const { currentPatrimonyValue: currentPatrimonyValuePreFixado } =
    getSummaryByStrategy(balance.monthBalances, 'Pré-Fixado', referenceDate);
  const { currentPatrimonyValue: currentPatrimonyValuePosFixado } =
    getSummaryByStrategy(balance.monthBalances, 'Pós-Fixado', referenceDate);
  const { currentPatrimonyValue: currentPatrimonyValueVariavel } =
    getSummaryByStrategy(
      balance.monthBalances,
      'Renda Variável',
      referenceDate
    );
  const { currentPatrimonyValue: currentPatrimonyValueConta } =
    getSummaryByStrategy(balance.monthBalances, 'Conta', referenceDate);

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
