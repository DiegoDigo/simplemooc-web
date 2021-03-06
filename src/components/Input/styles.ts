import {ErrorMessage, Field} from 'formik';
import styled from 'styled-components';


interface Prop {
    isvalid: string
}

export const InputField = styled(Field)`
  border-radius: 10px;
  height: 45px;
  border: 2px solid ${(prop: Prop) => prop.isvalid === 'true' ? "var(--black-color)" : "var(--error-color)"};
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