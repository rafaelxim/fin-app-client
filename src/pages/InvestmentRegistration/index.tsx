import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import CustomStepper, { CustomSteps } from '../../components/CustomStepper';
import TextField from '../../components/TextField';
import Menu from '../../components/Menu';
import * as S from './styles';
import {
  CategoryEntityResponseCollectionQuery,
  InvestmentEntityResponseCollectionQuery,
} from '../../types/dbtypesQueries';
import {
  QUERY_GET_ALL_INVESTMENTS,
  QUERY_GET_ALL_CATEGORIES,
} from '../Dashboard/queries';
import {
  CategoryEntityResponseCollection,
  InvestmentEntityResponseCollection,
} from '../../types/dbTypes';

const InvestmentRegistration = () => {
  const [investmentsRequest] =
    useLazyQuery<InvestmentEntityResponseCollectionQuery>(
      QUERY_GET_ALL_INVESTMENTS
    );
  const [categoriesRequest] =
    useLazyQuery<CategoryEntityResponseCollectionQuery>(
      QUERY_GET_ALL_CATEGORIES
    );
  const [investments, setInvestments] =
    useState<InvestmentEntityResponseCollection>();
  const [categories, setCategories] =
    useState<CategoryEntityResponseCollection>();
  const [currentCategory, setCurrentCategory] = useState<CustomSteps>();

  useEffect(() => {
    executeQueries();
  }, []);

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
      console.log({ data });
      return data;
    }
  };

  const handleStepChange = (n: number) => {
    const categories = formatInvestmentsByCategory();
    if (categories) {
      setCurrentCategory(categories[n]);
    }
  };

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
          <CustomStepper
            onChangeStep={handleStepChange}
            steps={formatInvestmentsByCategory()}
          />
          <S.FormContainer>
            {currentCategory?.investments.map((i) => {
              return (
                <S.FormItem key={i.id}>
                  <TextField
                    label={i.attributes?.name}
                    variant="outlined"
                    fullWidth
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
