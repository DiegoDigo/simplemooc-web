import styled, {css} from "styled-components";
import {MdAdd, MdSearch} from "react-icons/md";
import {breakpointsWidth} from "../../styles/variables";

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

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 2%;
  padding-right: 2%;

  @media (max-width: ${breakpointsWidth.sm}) {
    flex-direction: column;
  }

`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: ${breakpointsWidth.sm}) {
    width: 100%;
    padding-left: 4%;
    padding-right: 7%;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--white-color);
  background-color: red;
  width: 150px;
  padding-right: 5px;
  height: 45px;
  border-radius: 45px;
  cursor: pointer;
  font-family: var(--subtitle-font);
  font-weight: bolder;

  @media (max-width: ${breakpointsWidth.sm}) {
    width: 100%;
  }
`;


const iconCss = css`
  width: 25px;
  height: 25px;
  color: var(--white-color);
  padding-right: 2px;

`;


export const IconAdd = styled(MdAdd)`
  ${iconCss}
`;

export const IconSearch = styled(MdSearch)`
  ${iconCss}
`;

export const InputField = styled.input`
  border-top-left-radius : 10px;
  border-bottom-left-radius : 10px;
  height: 45px;
  border: 2px solid var(--black-color);
  padding: 8px;
  font-family: var(--subtitle-font);
  font-size: 18px;
  width: 100%;

  &:focus {
    border: 2px solid var(--primary-color);
  }

  &::placeholder {
    font-size: 18px;
  }

  @media (max-width: ${breakpointsWidth.sm}) {
    width: 100%;
  }
`;


export const ButtonSearch = styled(Button)`
  width: 45px;
  border-radius: 0;
  border-bottom-right-radius : 10px;
  border-top-right-radius : 10px;
`;