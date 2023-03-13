import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import Autocomplete from '@mui/material/Autocomplete';
import { useAppDispatch } from '../../app/hooks';
import CardWrapper from '../../components/CardWrapper';
import TextField from '../../components/TextField';
import SendIcon from '@mui/icons-material/Send';
import {
  activateLoader,
  deactivateLoader,
} from '../../features/FullScreenLoader/loaderSlice';
import { Maybe, Query } from '../../types/dbTypes';
import {
  CREATE_ENTRY,
  GET_ENTRY_BY_INVESTMENT_DATE,
  QUERY_GET_ALL_INVESTMENTS,
  UPDATE_ENTRY,
} from '../../api/queries';
import * as S from './styles';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment, { Moment } from 'moment';
import CurrencyField from '../../components/CurrencyField';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import PageBase from '../../components/PageBase';

type AutoCompleteOptions = {
  id?: Maybe<string> | undefined;
  label?: Maybe<string> | undefined;
};

type ErrorStatus = {
  [field: string]: boolean;
};

const TransferRegistration = () => {
  const [investmentsRequest] = useLazyQuery<Pick<Query, 'investments'>>(
    QUERY_GET_ALL_INVESTMENTS
  );
  const [getEntryByInvestmentAndDate] = useLazyQuery<Pick<Query, 'entries'>>(
    GET_ENTRY_BY_INVESTMENT_DATE
  );

  const [updateEntryByID] = useMutation(UPDATE_ENTRY);

  const [investments, setInvestments] =
    useState<AutoCompleteOptions[] | undefined>();
  const [originAccount, setOriginAccount] =
    useState<AutoCompleteOptions | null>();
  const [destinationAccount, setDestinationAccount] =
    useState<AutoCompleteOptions | null>();
  const [dateValue, setDateValue] = useState<Moment | null>();
  const [transferValue, setTransferValue] = useState<number>(0);
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>();
  const { enqueueSnackbar } = useSnackbar();

  const [createEntry] = useMutation(CREATE_ENTRY);
  const dispatch = useAppDispatch();

  useEffect(() => {
    executeQueries();
  }, []);

  const executeQueries = () => {
    void (async () => {
      dispatch(activateLoader());
      const res = await investmentsRequest();
      const formatedInvestments = res.data?.investments?.data.map((i) => ({
        id: i.id,
        label: i.attributes?.name,
      }));
      setInvestments(formatedInvestments);
      dispatch(deactivateLoader());
    })();
  };

  const validateAndSend = async () => {
    if (!originAccount) {
      setErrorStatus({ ...errorStatus, originAccount: true });
      return;
    }
    if (!destinationAccount) {
      setErrorStatus({ ...errorStatus, destinationAccount: true });
      return;
    }

    try {
      dispatch(activateLoader());
      // Encontra id da conta de origem
      const res = await getEntryByInvestmentAndDate({
        variables: {
          period: moment(dateValue).format('YYYY-MM-01'),
          investment: originAccount.id,
        },
      });

      const originID = res.data?.entries?.data[0].id;
      const originValue = res.data?.entries?.data[0].attributes?.value;

      // retira o saldo de da conta de origem
      if (originValue && originID) {
        await updateEntryByID({
          variables: {
            investment: originID,
            amount: Number((originValue - transferValue).toFixed(2)),
          },
        });

        // cria a entry de transfer
        await createEntry({
          variables: {
            period: moment(dateValue).format('YYYY-MM-01'),
            value: transferValue,
            investment: destinationAccount.id,
            published: moment(),
            transfer: true,
          },
        });
        dispatch(deactivateLoader());

        enqueueSnackbar('Transferência realizada com sucesso', {
          variant: 'success',
        });
      }
    } catch (e) {
      enqueueSnackbar('Ocorreu um erro inesperado', {
        variant: 'error',
      });
      dispatch(deactivateLoader());
    }
  };

  console.log({ originAccount, destinationAccount });

  return (
    <PageBase title="Registrar transferência">
      <CardWrapper fullWidth>
        <S.CardContent>
          <S.FormLine>
            <Autocomplete
              fullWidth
              disablePortal
              options={investments ?? []}
              renderInput={(params: any) => (
                <TextField
                  error={errorStatus?.originAccount}
                  {...params}
                  label="Conta de Origem"
                />
              )}
              onChange={(o, newValue) => {
                setOriginAccount(newValue);
                setErrorStatus({ ...errorStatus, originAccount: false });
              }}
            />
            <Autocomplete
              fullWidth
              disablePortal
              options={investments ?? []}
              renderInput={(params: any) => (
                <TextField
                  error={errorStatus?.destinationAccount}
                  {...params}
                  label="Conta de Destino"
                />
              )}
              onChange={(o, newValue) => {
                setDestinationAccount(newValue);
                setErrorStatus({
                  ...errorStatus,
                  destinationAccount: false,
                });
              }}
            />
          </S.FormLine>
          <S.FormLine>
            <DesktopDatePicker
              views={['year', 'month']}
              label="Data"
              minDate={moment('2022-03-01')}
              maxDate={moment('2026-12-01')}
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />

            <CurrencyField
              label="Valor a ser transferido"
              variant="outlined"
              fullWidth
              onValueChange={(v) => setTransferValue(v.floatValue ?? 0)}
              value={transferValue}
            />
          </S.FormLine>
          <S.FormAction>
            <Button
              onClick={validateAndSend}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Registrar
            </Button>
          </S.FormAction>
        </S.CardContent>
      </CardWrapper>
    </PageBase>
  );
};

export default TransferRegistration;
