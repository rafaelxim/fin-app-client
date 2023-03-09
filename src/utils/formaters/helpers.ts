export const toReal = (val: number) => {
  if (val) {
    const with2Decimals = val.toString().match(/^-?\d+(?:\.\d{0,2})?/)![0];
    return parseFloat(with2Decimals).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return 0;
};

export const realToFloat = (val: string) => {
  return parseFloat(val.replace('R$ ', '').replace('.', '').replace(',', '.'));
};
