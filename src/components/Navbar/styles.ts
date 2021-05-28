import styled from 'styled-components';
import {breakpointsWidth} from '../../styles/variables';
import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: var(--primary-color);
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: space-between;
`;

export const ItemWrapper = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 3;

  @media all and (max-width: 767px) {
    display: none;
  }
`;

export const Title = styled(Link)`
  margin-left: 18px;
  font-family: var(--title-font);
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  @media (max-width: ${breakpointsWidth.sm}) {
    margin-left: 10px;
  }
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 18px;
  font-family: var(--subtitle-font);
  font-size: 21px;
  color: white;
  margin-right: 10px;
  transition: color .2s;
  height: 100%;
  text-decoration: none;
  
  @media (max-width: ${breakpointsWidth.sm}) {
    margin-left: 10px;
  }
`;


export const Sair = styled.button`

  display: flex;
  align-items: center;
  margin-left: 18px;
  font-family: var(--subtitle-font);
  font-size: 21px;
  color: white;
  margin-right: 10px;
  transition: color .2s;
  width: 95px;
  height: 100%;
  text-decoration: none;
  background-color: transparent;

`;