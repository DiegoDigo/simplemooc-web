import styled from "styled-components";
import {MdStars} from "react-icons/md";

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