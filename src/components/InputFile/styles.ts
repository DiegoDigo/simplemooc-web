import {ErrorMessage} from 'formik';
import styled from 'styled-components';


export const InputField = styled.input`
  border-radius: 10px;    
  height: 45px;
  border: 2px solid var(--black-color);
  font-size: 20px;
  padding: 8px;
  margin-bottom: 10px;
  
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

`;

export const MsgError = styled(ErrorMessage)`
  font-size: 15px;
  margin-bottom: 15px;
  color: var(--error-color);

`;