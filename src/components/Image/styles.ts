import styled from "styled-components";
import {breakpointsWidth} from "../../styles/variables";

interface Props {
    isHome: boolean
}

export const ImageStyle = styled.img`
  width: 100%;
  height: ${(props: Props) => props.isHome ? "162px" : "auto"};
  max-height: 250px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  object-fit: fill;

  @media (max-width: ${breakpointsWidth.sm}) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    height: 100%;
  }

`;