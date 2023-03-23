import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { useSnackbar } from 'notistack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import readXlsxFile, { Row } from 'read-excel-file';
import DividendCard from '../../components/DividendCard';
import PageBase from '../../components/PageBase';
import { realToFloat } from '../../utils/formaters/helpers';
import * as S from './styles';

export type Dividend = {
  date?: Moment;
  description?: string;
  value?: number;
  stock?: string;
};

const STOCK_LIST = ['KNCR11', 'VILG11'];

const DividendsInsertion = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [dividends, setDividends] = useState<Dividend[]>();
  const [selectedFile, setSelectedFile] = useState<File>();

  const getFileContents = (rows: Row[]) => {
    try {
      const formatedValues: Dividend[] = [];

      // for para datas
      let currentExtIndex = 0;
      for (let i = 0; i < rows.length; i = i + 4) {
        formatedValues.push({
          date: moment(rows[i][0] as string),
        });
        currentExtIndex++;
      }

      // for para description
      currentExtIndex = 0;
      for (let i = 1; i < rows.length; i = i + 4) {
        formatedValues[currentExtIndex].description = rows[i][0] as string;
        currentExtIndex++;
      }

      // for para valor
      currentExtIndex = 0;
      for (let i = 2; i < rows.length; i = i + 4) {
        formatedValues[currentExtIndex].value = realToFloat(
          rows[i][0] as string
        );
        currentExtIndex++;
      }

      // for para STOCK
      currentExtIndex = 0;
      for (let i = 3; i < rows.length; i = i + 4) {
        formatedValues[currentExtIndex].stock = rows[i][0] as string;
        currentExtIndex++;
      }

      enqueueSnackbar('Arquivo formatado com sucesso', { variant: 'success' });
      const filtered = formatedValues.filter(
        (v) => v.description !== 'LIQ. PARA A CONTA BCO DIGITAL'
      );
      setDividends(filtered);
    } catch (e) {
      enqueueSnackbar('Houve um erro ao tentar formatar o arquivo', {
        variant: 'error',
      });
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    readXlsxFile(selectedFiles[0])
      .then((rows) => {
        getFileContents(rows);
        setSelectedFile(selectedFiles[0]);
      })
      .catch((e) => {
        console.log(e);
        enqueueSnackbar('Houve um erro ao tentar formatar o arquivo', {
          variant: 'error',
        });
      });
  };

  console.log(selectedFile);

  return (
    <PageBase flexDirection="column" title="Inserção de Dividendos">
      <S.FileLabel>
        <>
          {!selectedFile ? 'Selecione um Arquivo' : selectedFile.name}
          <CloudUploadIcon />
          <input onChange={handleFileSelect} type="file" id="input" />
        </>
      </S.FileLabel>
      <S.CardContainer>
        {dividends?.map((d) => (
          <DividendCard dividend={d} />
        ))}
      </S.CardContainer>
    </PageBase>
  );
};

export default DividendsInsertion;
