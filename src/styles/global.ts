import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--backgroud-color);
  }

  *, input {
    border: 0;
    outline: 0;
  }

  :root {
    --primary-color: #21BFBD;
    --white-color: #FFFFFF;
    --black-color: #000000;
    --error-color: #F44336;
    --backgroud-color: #eeeeee;

    --title-font: 'Fjalla One', sans-serif;
    --subtitle-font: 'Montserrat', sans-serif;

  }
`;