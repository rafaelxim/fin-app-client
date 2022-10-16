import React from 'react';

import CardWrapper from '../CardWrapper';
import * as S from './styles';
import Divider from '../Divider';
import UpdateIcon from '../../assets/Icons/Update';
import AreaChartCustom, { data } from '../AreaChart';

const GraphicCard = () => {
  return (
    <CardWrapper topMargin>
      <S.Content>
        <S.Graphic>
          <AreaChartCustom data={data} dataKeyX="name" dataKeyY="uv" />
        </S.Graphic>
        <S.CardInfo>
          <S.CardTitle>Evolução do Patrimônio</S.CardTitle>
          <S.CardSubtitle>Mês a Mês</S.CardSubtitle>

          <Divider />
          <S.LastUpdate>
            <UpdateIcon color="grey400" />
            <S.UpdateDescription>atualizado há uma hora</S.UpdateDescription>
          </S.LastUpdate>
        </S.CardInfo>
      </S.Content>
    </CardWrapper>
  );
};

export default GraphicCard;
