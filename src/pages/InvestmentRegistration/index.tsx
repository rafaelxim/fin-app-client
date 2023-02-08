import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import CustomStepper, { CustomSteps } from '../../components/CustomStepper';
import Menu from '../../components/Menu';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as S from './styles';
import {
  QUERY_GET_ALL_INVESTMENTS,
  QUERY_GET_ALL_CATEGORIES,
} from '../Dashboard/queries';
import {
  CategoryEntityResponseCollection,
  InvestmentEntityResponseCollection,
  Query,
} from '../../types/dbTypes';
import CurrencyField from '../../components/CurrencyField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
import moment, { Moment } from 'moment';
import TextField from '../../components/TextField';

const InvestmentRegistration = () => {
  const [investmentsRequest] = useLazyQuery<Pick<Query, 'investments'>>(
    QUERY_GET_ALL_INVESTMENTS
  );
  const [categoriesRequest] = useLazyQuery<Pick<Query, 'categories'>>(
    QUERY_GET_ALL_CATEGORIES
  );
  const [investments, setInvestments] =
    useState<InvestmentEntityResponseCollection | null>();
  const [categories, setCategories] =
    useState<CategoryEntityResponseCollection | null>();
  const [currentCategory, setCurrentCategory] = useState<CustomSteps>();
  const [finishModalOpen, setFinishModalOpen] = useState(false);
  const [dateValue, setDateValue] = useState<Moment | null>(
    moment('2023-01-01')
  );

  useEffect(() => {
    executeQueries();
  }, []);

  useEffect(() => {
    if (!currentCategory) {
      handleStepChange(0);
    }
  }, [investments, categories]);

  const executeQueries = () => {
    void (async () => {
      const res = await investmentsRequest();
      setInvestments(res.data?.investments);
      const resCat = await categoriesRequest();
      setCategories(resCat.data?.categories);
    })();
  };

  const formatInvestmentsByCategory = () => {
    if (categories && investments) {
      const data = categories?.data.map((c) => ({
        category: c,
        investments: investments?.data.filter(
          (i) =>
            i.attributes?.category?.data?.attributes?.name ===
            c.attributes?.name
        ),
      }));
      return data;
    }
  };

  const handleStepChange = (n: number) => {
    console.log('----- called ----');
    const categories = formatInvestmentsByCategory();
    console.log({ categories });
    if (categories) {
      setCurrentCategory(categories[n]);
    }
  };

  const handleCloseFinishModal = () => {
    setFinishModalOpen(false);
  };

  const handleDateChange = (newValue: Moment | null) => {
    setDateValue(newValue);
  };

  return (
    <S.Wrapper>
      <Dialog
        open={finishModalOpen}
        onClose={handleCloseFinishModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Data de inserção</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Defina abaixo o mês em que os resultados financeiros foram apurados.
          </DialogContentText>
          <S.DateContainer>
            <DesktopDatePicker
              views={['year', 'month']}
              label="Data"
              minDate={moment('2022-03-01')}
              maxDate={moment('2026-12-01')}
              value={dateValue}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </S.DateContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFinishModal} autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      <S.Grid>
        <S.HeaderContainer>
          <S.PageTitle>Registro de Investimentos</S.PageTitle>
        </S.HeaderContainer>
        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
        <S.PageContent>
          <CustomStepper
            onFinish={() => setFinishModalOpen(true)}
            onChangeStep={(n: number) => handleStepChange(n)}
            steps={formatInvestmentsByCategory()}
          />
          <S.FormContainer>
            {currentCategory?.investments.map((i) => {
              return (
                <S.FormItem key={i.id}>
                  <CurrencyField
                    label={i.attributes?.name}
                    variant="outlined"
                    fullWidth
                    onValueChange={(v) => console.log(v)}
                  />
                </S.FormItem>
              );
            })}
          </S.FormContainer>
        </S.PageContent>
      </S.Grid>
    </S.Wrapper>
  );
};

export default InvestmentRegistration;
