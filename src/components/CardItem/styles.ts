import styled from "styled-components";
import {Link} from "react-router-dom";
import {MdStars} from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--white-color);
  width: calc(100vw / 5);
  height: calc(100vh / .5);
  margin: 18px;
  flex-grow: 1;
  max-height: 398px;
  max-width: 344px;
  min-width: 288px;
  min-height: 318px;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  width: 100%;
  height: 162px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-family: var(--subtitle-font);
`;

export const DetailWrapper = styled.div`
  margin: 18px;
`;
export const ButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

`;


export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: var(--primary-color);
  color: var(--white-color);
  font-weight: bold;
  font-size: 18px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  text-decoration: none;
`;


export const DataWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  padding: 18px 18px 0px;
`;


export const Data = styled.p`
  font-size: 15px;
`;

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
`;

export const Stars = styled(MdStars)`
  color: orange;
  height: 20px;
  width: 20px;
`;