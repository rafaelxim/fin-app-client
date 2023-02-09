import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from '../../app/hooks';

const FullScreenLoader = () => {
  const loading = useAppSelector((state) => state.loader.loading);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
      onClick={() => console.log('e')}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default FullScreenLoader;
