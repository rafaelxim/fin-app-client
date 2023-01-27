import React from 'react';
import CustomStepper from '../../components/CustomStepper';
import TextField from '@mui/material/TextField';
import Menu from '../../components/Menu';
import * as S from './styles';

const InvestmentRegistration = () => {
  return (
    <S.Wrapper>
      <S.Grid>
        <S.HeaderContainer>
          <S.PageTitle>Registro de Investimentos</S.PageTitle>
        </S.HeaderContainer>
        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
        <S.PageContent>
          <CustomStepper />
          <S.FormContainer>
            <S.FormItem>
              <TextField
                label="Full width field"
                variant="outlined"
                fullWidth
              />
            </S.FormItem>
          </S.FormContainer>
        </S.PageContent>
      </S.Grid>
    </S.Wrapper>
  );
};

export default InvestmentRegistration;
