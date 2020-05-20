import { AppColors } from './styles';

export const GlobalStyleCss : string = `
  html {
    text-rendering: optimizeLegibility;
  }

  body {
    color: ${AppColors.text};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Raleway" ,sans-serif;
    font-weight : 400;
  }

  p, li {
    line-height : 1.8em;
    letter-spacing : 0.05em; 
    margin : 0;
    font-weight : 400;
    font-size : 0.9em;
    max-width : 700px;

    b {
      font-weight : 700;
    }

    @media (min-width: 768px) {
      font-size : 1em;
    }
  }

  ul {
    margin : 0;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family : 'Roboto', serif;
    font-weight : 300;
    letter-spacing : 0.05em;
    line-height : 1.5em;
    margin : 0;
    padding-left : -4px;
  }


  h1 {
    font-size : 2.4em;
    line-height : 1em;
    letter-spacing : 0.15em;
    text-transform : uppercase;
    font-weight : 100;
  }


  h2 {
    color: ${AppColors.brand2};
    font-size : 2.3em;

    @media (min-width: 1060px) {
      font-size : 2.4em;
    }
  }


  h3 {
    color: ${AppColors.brand3};
    font-size : 1.9em;

    @media (min-width: 1060px) {
      font-size : 2em;
    }
  }
`;