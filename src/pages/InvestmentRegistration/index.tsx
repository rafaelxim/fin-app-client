import React, { useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import CustomStepper, { CustomSteps } from '../../components/CustomStepper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as S from './styles';
import {
  QUERY_GET_ALL_INVESTMENTS,
  QUERY_GET_ALL_CATEGORIES,
  CREATE_ENTRY,
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
import { useAppDispatch } from '../../app/hooks';
import {
  activate,
  deactivate,
} from '../../features/FullScreenLoader/loaderSlice';
import { NumberFormatValues } from 'react-number-format';
import { useSnackbar } from 'notistack';
import PageBase from '../../components/PageBase';

type InvestmentValues = {
  [key: string]: {
    value: number;
  };
};

const InvestmentRegistration = () => {
  const [investmentsRequest] = useLazyQuery<Pick<Query, 'investments'>>(
    QUERY_GET_ALL_INVESTMENTS
  );
  const [categoriesRequest] = useLazyQuery<Pick<Query, 'categories'>>(
    QUERY_GET_ALL_CATEGORIES
  );
  const [createEntry] = useMutation(CREATE_ENTRY);
  const [investments, setInvestments] =
    useState<InvestmentEntityResponseCollection | null>();
  const [categories, setCategories] =
    useState<CategoryEntityResponseCollection | null>();
  const [currentCategory, setCurrentCategory] = useState<CustomSteps>();
  const [finishModalOpen, setFinishModalOpen] = useState(false);
  const [dateValue, setDateValue] = useState<Moment | null>(
    moment('2023-01-01')
  );
  const [investmentValues, setInvestmentValues] = useState<InvestmentValues>();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(activate());
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
      dispatch(deactivate());
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

  const handleChangeInvestment = (
    val: NumberFormatValues,
    investmentId: string
  ) => {
    setInvestmentValues({
      ...investmentValues,
      [investmentId]: {
        value: val.floatValue!,
      },
    });
  };

  const sendData = async () => {
    setFinishModalOpen(false);
    dispatch(activate());
    const promises = Object.keys(investmentValues!).map((i) => {
      return createEntry({
        variables: {
          period: moment(dateValue).format('YYYY-MM-DD'),
          value: investmentValues![i].value,
          investment: i,
          published: moment(),
        },
      });
    });

    await Promise.all(promises);
    dispatch(deactivate());
    setInvestmentValues(undefined);
    enqueueSnackbar('Dados enviados com sucesso', { variant: 'success' });
  };

  return (
    <PageBase title="Registrar investimentos">
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
          <Button onClick={sendData} autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>

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
                onValueChange={(v) => handleChangeInvestment(v, i.id!)}
                value={
                  investmentValues && investmentValues[i.id!]
                    ? investmentValues[i.id!].value
                    : 0
                }
              />
            </S.FormItem>
          );
        })}
      </S.FormContainer>
    </PageBase>
  );
};

export default InvestmentRegistration;
