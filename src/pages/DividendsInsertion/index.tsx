import moment, { Moment } from 'moment';
import { useSnackbar } from 'notistack';
import React from 'react';
import readXlsxFile, { Row } from 'read-excel-file';
import PageBase from '../../components/PageBase';
import { realToFloat } from '../../utils/formaters/helpers';

type FormatedRow = {
  date?: Moment;
  description?: string;
  value?: number;
};

const DividendsInsertion = () => {
  const { enqueueSnackbar } = useSnackbar();

  const formatFileContent = (rows: Row[]) => {
    try {
      const formatedValues: FormatedRow[] = [];

      // for para datas
      let currentExtIndex = 0;
      for (let i = 0; i < rows.length; i = i + 3) {
        formatedValues.push({
          date: moment(rows[i][0] as string),
        });
        currentExtIndex++;
      }

      // for para description
      currentExtIndex = 0;
      for (let i = 1; i < rows.length; i = i + 3) {
        formatedValues[currentExtIndex].description = rows[i][0] as string;
        currentExtIndex++;
      }

      // for para valor
      currentExtIndex = 0;
      for (let i = 2; i < rows.length; i = i + 3) {
        formatedValues[currentExtIndex].value = realToFloat(
          rows[i][0] as string
        );
        currentExtIndex++;
      }

      enqueueSnackbar('Arquivo formatado com sucesso', { variant: 'success' });
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
        formatFileContent(rows);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <PageBase title="Inserção de Dividendos">
      <input onChange={handleFileSelect} type="file" id="input" />
    </PageBase>
  );
};

export default DividendsInsertion;
