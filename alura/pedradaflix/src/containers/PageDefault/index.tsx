import React, { ReactNode } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled, { css } from 'styled-components';
import Loading from '../../components/Loading/Loading';

interface PageDefault {
  children?: ReactNode;
  buttonContent: string;
  buttonLink: string;
  paddingAll?: number;
}

interface IWrapper {
  paddingAll?: number | undefined;
}

const PageDefaultWrapper = styled.div`
  padding-top: 50px;
  padding-right: 5%;
  padding-left: 5%;
  ${({ paddingAll }: IWrapper) => css`
    padding: ${paddingAll};
  `}
`;

export const PageDefault = ({
  children,
  buttonContent,
  buttonLink,
  paddingAll,
}: PageDefault) => {
  return (
    <>
      <PageDefaultWrapper paddingAll={paddingAll}>
        <Menu buttonContent={buttonContent} buttonLink={buttonLink} />
        {children}
      </PageDefaultWrapper>
      <Footer />
    </>
  );
};

export const LoadingPageDefault = ({
  buttonContent,
  buttonLink,
}: PageDefault) => {
  return (
    <>
      <PageDefaultWrapper>
        <Menu buttonContent={buttonContent} buttonLink={buttonLink} />
        <Loading
          color="#2a9d8f"
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        />
      </PageDefaultWrapper>
      <Footer />
    </>
  );
};
