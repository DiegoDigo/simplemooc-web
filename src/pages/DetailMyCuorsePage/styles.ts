import styled from "styled-components";
import {breakpointsWidth} from "../../styles/variables";
import {MdAdd} from "react-icons/md";


export const Container = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-areas: "img vd" "img tt";
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
  max-height: calc(100vh - 240px);
  border-radius: 15px;
  background-color: var(--white-color);


  @media (max-width: ${breakpointsWidth.sm}) {
    max-height: 100%;
  }
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

  grid-area: vd;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

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
  margin-top: 10px;
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
  font-size: 20px;
  color: var(--white-color);
  background-color: red;
  width: 90%;
  height: 45px;
  border-radius: 45px;
  margin-top: 20px;
  cursor: pointer;
`;

export const WrapperLesson = styled.div`
  grid-area: tt;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 18px;
`;

export const TitleWrapper = styled.div`
  grid-area: tt;
  display: flex;
  flex-direction: column;
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

export const IconAdd = styled(MdAdd)`
  width: 45px;
  height: 45px;
  color: var(--white-color);

`;

export const ButtonAdd = styled(Button)`
  width: 45px;
  border-radius: 18px;
  margin-top: 0;
`;

export const SubTitle = styled(Title)`
  margin-bottom: 0;
`;


export const Video = styled.video`

  width: 100%;
  height: 100%;
`;
