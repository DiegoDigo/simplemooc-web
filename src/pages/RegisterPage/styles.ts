import { Form } from 'formik';
import styled from 'styled-components';
import { breakpointsWidth } from '../../styles/variables';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;    
  width: 100%;  
  height: calc(100vh - 75px);  
`;


export const CardContainer = styled.div`   
    display: flex;
    flex-direction: column;      
    align-items: center;
    background-color: var(--white-color);   
    width: calc(100vw - 30px);
    border-top-left-radius: 75px;
    border-bottom-right-radius: 75px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    @media (min-width: ${breakpointsWidth.sm}){
      width: 40%;        
    }
    
`;

export const TitleCard = styled.h1`
    font-family: 'Supermercado One', cursive;
    font-size: 32px;
`;


export const SubTitleCard = styled.p`    
    font-size: 20px;
    font-weight: lighter;
    font-style: italic;
    margin-bottom: 20px;
`;

export const FormStyle = styled(Form)`

    display: flex;
    flex-direction: column;    
    width: 100%;    
    padding: 20px;
    margin-bottom: 25px;

    @media (min-width: ${breakpointsWidth.sm}){
      padding-left: 15%;        
      padding-right: 15%;        
    }

`;

export const Button = styled.button`
  margin-top: 10px;
  height: 45px;
  border-radius: 16px;
  background-color: var(--primary-color);
  color: var(--white-color);
  font-size: 20px;
  cursor: pointer;
`;



export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;    
    height: 100%;
    margin-top: calc(100% - 300px);

    @media (min-width: ${breakpointsWidth.sm}) {
      margin-top: 8%;
      margin-bottom: 8%;
    }
`;


export const Spacer = styled.hr`
  width: 100%;
  border-top: 1px solid #bbb;
`;

export const CreateCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  height: 100%;  
`;


export const LinkCreate = styled.p`    
    font-size: 20px;
    font-weight: lighter;
    font-style: italic;
    margin-bottom: 20px;
`;
