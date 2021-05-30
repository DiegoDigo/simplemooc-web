import {ErrorMessage} from 'formik';
import styled from 'styled-components';


export const InputField = styled.input`
  border-radius: 10px;    
  height: 45px;
  border: 2px solid var(--black-color);
  padding: 8px;
  margin-bottom: 10px;
  font-family: var(--subtitle-font);
  font-size: 18px;
  
  &:focus {
    border: 2px solid var(--primary-color);
  }
  &::placeholder {
    font-size: 18px;
  }
`;

export const Label = styled.label`

  font-size: 20px;
  margin-bottom: 5px;
  font-family: var(--title-font);

`;

export const MsgError = styled(ErrorMessage)`
  font-size: 13px;
  margin-bottom: 15px;
  color: var(--error-color);
  font-family: var(--subtitle-font);
`;