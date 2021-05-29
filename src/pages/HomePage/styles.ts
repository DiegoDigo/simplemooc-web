import styled from "styled-components";
import {MdAdd} from "react-icons/md";

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

`;


export const IconAdd = styled(MdAdd)`
  width: 25px;
  height: 25px;
  color: var(--white-color);
  padding-right: 2px;

`;
