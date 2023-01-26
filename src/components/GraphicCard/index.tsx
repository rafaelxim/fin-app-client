import React from 'react';
import CardWrapper from '../CardWrapper';
import * as S from './styles';
import Divider from '../Divider';
import UpdateIcon from '../../assets/Icons/Update';
import AreaChartCustom from '../AreaChart';

type GraphicCardProps = {
  data: any;
  dataKeyX: string;
  dataKeyY: string;
};

const GraphicCard = ({ data, dataKeyX, dataKeyY }: GraphicCardProps) => {
  return (
    <CardWrapper topMargin>
      <S.Content>
        <S.Graphic>
          <AreaChartCustom
            data={data}
            dataKeyX={dataKeyX}
            dataKeyY={dataKeyY}
          />
        </S.Graphic>
        <S.CardInfo>
          <S.CardTitle>Evolução do Patrimônio</S.CardTitle>
          <S.CardSubtitle>Mês a Mês</S.CardSubtitle>

          <Divider />
          <S.LastUpdate>
            <UpdateIcon color="grey400" />
            <S.UpdateDescription>atualizado em tempo real</S.UpdateDescription>
          </S.LastUpdate>
        </S.CardInfo>
      </S.Content>
    </CardWrapper>
  );
};

export default GraphicCard;
