import styled from "styled-components";
import {breakpointsWidth} from "../../styles/variables";

interface Props {
    show?: boolean
}


export const Container = styled.div`
  background-color: white;
  width: 40%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 15px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  display: ${(props: Props) => props.show ? "block" : "none"} !important;

  @media (max-width: ${breakpointsWidth.sm}) {
    width: 70%;
    height: 60%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--white-color);

`;

export const Title = styled.h1`
  font-family: var(--title-font);
  color: var(--black-color);
`;

export const Description = styled.p`
  font-family: var(--subtitle-font);
  color: var(--black-color);
`;


export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 50%;
  height: 45px;
  font-size: 18px;
  border-radius: 15px;
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--white-color);
  font-family: var(--subtitle-font);
  font-weight: bolder;

`;

export const ButtonClose = styled(Button)`
  background-color: #eeeeee;
  color: var(--baclk-color);
  margin-left: 10px;
`;

