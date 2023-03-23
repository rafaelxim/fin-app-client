import moment from 'moment';
import React from 'react';
import { Dividend } from '../../pages/DividendsInsertion';
import { toReal } from '../../utils/formaters/helpers';
import CardWrapper from '../CardWrapper';
import DeleteIcon from '@mui/icons-material/Delete';
import * as S from './styles';

type Props = {
  dividend: Dividend;
};

const DividendCard = ({ dividend }: Props) => (
  <CardWrapper>
    <S.Content>
      <S.Infos>
        <S.Title>
          <p>{dividend.stock}</p> {dividend.description}
        </S.Title>
        <S.Date>{moment(dividend.date).format('DD/MM/YYYY')}</S.Date>
        <S.Value>{toReal(dividend.value!)}</S.Value>
      </S.Infos>
      <S.Actions>
        <DeleteIcon />
      </S.Actions>
    </S.Content>
  </CardWrapper>
);

export default DividendCard;
