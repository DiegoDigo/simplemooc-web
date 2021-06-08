import styled, {css} from "styled-components";
import {breakpointsWidth} from "../../styles/variables";
import {MdAdd, MdEdit, MdImportantDevices, MdDelete} from "react-icons/md";


export const Container = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-areas: "img desc" 
                       "img desc";
  grid-auto-rows: 50%;
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
  max-height: 675px;
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
`;

export const Description = styled.p`
  font-size: 20px;
  font-family: var(--subtitle-font);
  font-weight: 300;
`;


export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--white-color);
  background-color: red;
  width: 90%;
  height: 45px;
  border-radius: 45px;
  margin-top: 20px;
  cursor: pointer;
  font-family: var(--subtitle-font);
  font-weight: bolder;
`;


export const TitleWrapper = styled.div`
  grid-area: tt;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 18px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px;
`;


const Icon = css`
  width: 20px;
  height: 20px;
  color: var(--white-color);
  margin-right: 5px;
`;

export const IconAdd = styled(MdAdd)`
  ${Icon};
`;

export const IconEdit = styled(MdEdit)`
  ${Icon};
`

;export const IconDelete = styled(MdDelete)`
  ${Icon};
`;

export const IconCourse = styled(MdImportantDevices)`
  ${Icon};
  width: 25px;
  height: 25px;
  color: var(--black-color);
`;


export const InfoAdminWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 18px;
`;

export const Number = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
`;
