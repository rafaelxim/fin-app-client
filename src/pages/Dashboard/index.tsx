import React, { useEffect, useState, useMemo } from 'react';
import * as S from './styles';
import Menu from '../../components/Menu';
import SummaryCard from '../../components/SummaryCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GraphicCard from '../../components/GraphicCard';
import { toReal } from '../../utils/formaters/helpers';

import PieGraph from '../../components/PieGraph';
import * as H from './helpers';
import { useMonthBalances } from '../../hooks';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import moment, { Moment } from 'moment';
import TextField from '../../components/TextField';

const Dashboard = () => {
  const [referenceDate, setReferenceDate] = useState<string>(
    moment().format('YYYY-MM-01')
  );

  const M = useMonthBalances(referenceDate);

  const D = useMemo(() => {
    return H.getRenderData(M, referenceDate);
  }, [M]);

  const handleChangeData = (d: Moment) => {
    setReferenceDate(d.format('YYYY-MM-01'));
  };

  if (D && M) {
    return (
      <S.Wrapper>
        <S.Grid>
          <S.HeaderContainer>
            <S.PageTitle>Dashboard</S.PageTitle>
            <DesktopDatePicker
              views={['year', 'month']}
              label="Mês de Referência"
              minDate={moment('2022-03-01')}
              maxDate={moment('2026-12-01')}
              value={referenceDate}
              onChange={() => null}
              renderInput={(params) => <TextField {...params} />}
              onAccept={(d) => handleChangeData(d as Moment)}
            />
          </S.HeaderContainer>
          <S.MenuContainer>
            <Menu />
          </S.MenuContainer>
          <S.SummaryCardsContainer>
            <SummaryCard
              title="Patrimônio"
              elapsedTime="do último mês"
              mainValue={toReal(D.currentPatrimonyValue)}
              variation={D.formattedVariation + '%'}
              negativeVariation={D.variation < 0}
              icon={<AccountBalanceWalletIcon />}
              moneyVariation={toReal(D.moneyVariation)}
            />

            <SummaryCard
              title="Renda Fixa"
              elapsedTime="do último mês"
              mainValue={toReal(D.currentPatrimonyValueRendaFixa)}
              variation={D.formattedVariationRendaFixa + '%'}
              negativeVariation={D.variationRendaFixa < 0}
              icon={<AccountBalanceWalletIcon />}
              moneyVariation={toReal(D.moneyVariationRendaFixa)}
            />
            <SummaryCard
              title="Tesouro Direto"
              elapsedTime="do último mês"
              mainValue={toReal(D.currentPatrimonyValueTD)}
              variation={D.formattedVariationTD + '%'}
              negativeVariation={D.variationTD < 0}
              icon={<AccountBalanceWalletIcon />}
              moneyVariation={toReal(D.moneyVariationTD)}
            />
            <SummaryCard
              title="FGTS"
              elapsedTime="do último mês"
              mainValue={toReal(D.currentPatrimonyValueFGTS)}
              variation={D.formattedVariationFGTS + '%'}
              negativeVariation={D.variationFGTS < 0}
              icon={<AccountBalanceWalletIcon />}
              moneyVariation={toReal(D.moneyVariationFGTS)}
            />

            <SummaryCard
              title="Cripto"
              elapsedTime="do último mês"
              mainValue={toReal(D.currentPatrimonyValueCripto)}
              variation={D.formattedVariationCripto + '%'}
              negativeVariation={D.variationCripto < 0}
              icon={<AccountBalanceWalletIcon />}
              moneyVariation={toReal(D.moneyVariationCripto)}
            />
            <SummaryCard
              title="Conta Itaú"
              elapsedTime="do último mês"
              mainValue={toReal(D.currentPatrimonyValueItau)}
              variation={D.formattedVariationItau + '%'}
              negativeVariation={D.variationItau < 0}
              icon={<AccountBalanceWalletIcon />}
              moneyVariation={toReal(D.moneyVariationItau)}
            />
            <SummaryCard
              title="Conta Nubank"
              elapsedTime="do último mês"
              mainValue={toReal(D.currentPatrimonyValueNubank)}
              variation={D.formattedVariationNubank + '%'}
              negativeVariation={D.variationNubank < 0}
              icon={<AccountBalanceWalletIcon />}
              moneyVariation={toReal(D.moneyVariationNubank)}
            />

            <SummaryCard
              title="Conta Santander"
              elapsedTime="do último mês"
              mainValue={toReal(D.currentPatrimonyValueSantander)}
              variation={D.formattedVariationSantander + '%'}
              negativeVariation={D.variationSantander < 0}
              icon={<AccountBalanceWalletIcon />}
              moneyVariation={toReal(D.moneyVariationSantander)}
            />
          </S.SummaryCardsContainer>

          <S.GraphicCardContainer>
            <GraphicCard
              title="Evolução do Patrimônio"
              data={H.getTotalPatrimonyByMonth(M.monthBalances, referenceDate)}
              dataKeyX="period"
              dataKeyY="totalPatrimony"
            />

            <GraphicCard
              title="Evolução Saldo FGTS"
              data={H.getTotalPatrimonyByMonthAndInvestment(
                M.investmentFGTSBalances,
                referenceDate
              )}
              dataKeyX="period"
              dataKeyY="totalPatrimony"
            />

            {/* <GraphicCard /> */}
          </S.GraphicCardContainer>
          <S.PiesContainer>
            <PieGraph
              title="Distribuição"
              subtitle="Como o dinheiro está distribuído?"
              data={D.formatedPieData}
            />
            <PieGraph
              title="Alocação"
              subtitle="O que está investido? "
              data={D.formatedPieAlocationData}
            />
          </S.PiesContainer>
          <S.PiesContainer>
            <PieGraph
              title="Estratégia"
              subtitle="Qual estratégia está sendo utilizada?"
              data={D.formatedStrategyPieData}
            />
            {/* <PieGraph
              title="Alocação"
              subtitle="O que tá e o que não tá investido!? "
              data={D.formatedPieAlocationData}
            /> */}
          </S.PiesContainer>
        </S.Grid>
      </S.Wrapper>
    );
  }
  return <></>;
};

export default Dashboard;
