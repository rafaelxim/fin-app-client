import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel, { StepLabelProps } from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { CategoryEntity, InvestmentEntity } from '../../types/dbTypes';

const CustomStepLabel = styled(StepLabel)<StepLabelProps>(({ theme }) => ({
  '.MuiStepIcon-root.Mui-completed': {
    color: theme.colors.secondary,
  },
}));

export type CustomSteps = {
  category: CategoryEntity;
  investments: InvestmentEntity[];
};

type Props = {
  steps?: CustomSteps[];
  onChangeStep: (n: number) => void;
  onFinish: () => void;
};

const CustomStepper = ({ steps, onChangeStep, onFinish }: Props) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    onChangeStep(activeStep);
  }, [activeStep]);

  const handleNext = () => {
    if (activeStep === steps!.length - 1) {
      onFinish();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <S.StepperCard>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps?.map((step, index) => (
          <Step key={step.category.attributes?.name}>
            <CustomStepLabel>{step.category.attributes?.name}</CustomStepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finalizar' : 'Continuar'}
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
