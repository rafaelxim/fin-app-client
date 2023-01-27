import React, { useState } from 'react';
import * as S from './styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel, { StepLabelProps } from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const CustomStepLabel = styled(StepLabel)<StepLabelProps>(({ theme }) => ({
  '.MuiStepIcon-root.Mui-completed': {
    color: theme.colors.green100,
  },
}));

const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const steps = [
    {
      label: 'Renda Fixa',
    },
    {
      label: 'Cripto',
    },
    {
      label: 'Contas',
    },
    {
      label: 'Ações',
    },
    {
      label: 'FII',
    },
  ];

  return (
    <S.StepperCard>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <CustomStepLabel>{step.label}</CustomStepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </S.StepperCard>
  );
};

export default CustomStepper;
