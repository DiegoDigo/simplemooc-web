import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 75px);
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

export const Title = styled.h1`
  font-size: 35px;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  font-family: var(--title-font);
`;

export const WrapperNoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 150px);  

`;

export const NoDataText = styled.h1`
  font-size: 30px;
  font-family: var(--subtitle-font);
`;
