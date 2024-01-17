import React from 'react';
import * as S from './styles';
import Menu from '../../components/Menu';
import SummaryCard from '../../components/SummaryCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GraphicCard from '../../components/GraphicCard';
import { toReal } from '../../utils/formaters/helpers';

import PieGraph from '../../components/PieGraph';
import * as H from './helpers';
import { useMonthBalances } from '../../hooks';

const Dashboard = () => {
  const M = useMonthBalances();
  const D = H.getRenderData(M);

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
            data={H.getTotalPatrimonyByMonth(M.monthBalances)}
            dataKeyX="period"
            dataKeyY="totalPatrimony"
          />

          <GraphicCard
            title="Evolução Saldo FGTS"
            data={H.getTotalPatrimonyByMonthAndInvestment(
              M.investmentFGTSBalances
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
};

export default Dashboard;
