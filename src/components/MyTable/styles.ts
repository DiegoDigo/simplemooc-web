import styled, {css} from 'styled-components';

export const Table = styled.ul`
  width: 100%;
  border: 1px solid #EEEEEE;
`;

const lis = css`
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-self: center;
  justify-content: space-around;

  @media all and (max-width: 767px) {
    display: block;
  }
`;

export const Row = styled.li`
  ${lis};
  background-color: #ffffff;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const Item = styled.div`


`;


const col = css`
  @media all and (max-width: 767px) {
    flex-basis: 100%;
    display: flex;
    padding: 10px 0;

    &:before {
      color: #6C7A89;
      padding-right: 10px;
      content: attr(data-label);
      flex-basis: 50%;
      text-align: right;
    }
  }
`;


export const Col1 = styled.div`
  flex-basis: 10%;
  ${col}
`;

export const Col2 = styled.div`
  flex-basis: 40%;
  ${col}
`;

export const Col3 = styled.div`
  flex-basis: 25%;
  ${col}
`;

export const Col4 = styled.div`
  flex-basis: 25%;
  ${col}
`;


export const Header = styled.li`
  ${lis};
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: capitalize;
  letter-spacing: 0.03em;

  @media all and (max-width: 767px) {
    display: none;
  }
}
`;


export const WrapperRow = styled.div`
  width: 100%;
  max-height: 64%;
  overflow-y: auto;

`;


export const Click = styled.div`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

`;
