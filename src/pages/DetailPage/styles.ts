import styled from "styled-components";
import {breakpointsWidth} from "../../styles/variables";

export const Container = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "img desc" "img tt";
  grid-template-rows: 40%;
  grid-gap: 18px;
  height: calc(100vh - 75px);


  @media (max-width: ${breakpointsWidth.sm}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 75px);
    padding: 3%;
  }
`;

export const ImageWrapper = styled.div`
  grid-area: img;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  background-color: var(--white-color);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: ${breakpointsWidth.sm}) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    height: 100%;
  }

`;


export const InfoWrapper = styled.div`

  grid-area: desc;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px;

  @media (max-width: ${breakpointsWidth.sm}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 10px;
`;

export const Data = styled.p`
  font-size: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: var(--title-font);
  margin-bottom: 18px;
`;

export const Description = styled.p`
  font-size: 18px;
  font-family: var(--subtitle-font);
  font-weight: lighter;
`;


export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

`;

export const Button = styled.button`
  font-size: 20px;
  color: var(--white-color);
  background-color: red;
  width: 90%;
  height: 45px;
  border-radius: 45px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Teste = styled.div`
  grid-area: tt;
  display: flex;
  align-items: flex-start;  
  height: 100%;
  width: 100%;
  background-color: red;
  padding: 18px;
`;


