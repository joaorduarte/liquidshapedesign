import styled from 'styled-components';


export interface IAppColors {
  text : string,
  brand1 : string,
  brand2 : string,
  brand3 : string
}


export const AppColors : IAppColors = {
  text : "#22231E",
  brand1 : "#2CB4F7",
  brand2 : "#2E80FD",
  brand3 : "#5F5CF2"
}


export const ShareIconSize : number = 40;


export const AppContainer = styled.div`
  display : flex;
  flex-direction : column;
  margin : auto;

  width : 100%;
`;


export const AppHeader = styled.header`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  width : 100%;
  padding-top : 140px;
  padding-bottom : 140px;

  @media (min-width: 768px) {
    padding-top : 180px;
    padding-bottom : 180px;
  }
`;


export const AppTitles = styled.div`
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;

  h1 {
    margin : 0;
    padding : 0;
    width : auto;
    margin-left : 20px;
  }

  @media (min-width: 768px) {

    h1 {
      padding-top : 50px;
    }
  }
`;


export const AppLogo = styled.div`
  display : flex;
  flex-direction : column;

  div {
    display : flex;
    flex-direction : row;
    justify-content : flex-start;
    align-items : center;
  }

  img {
    padding : 5px;
  }

  h1 {
    margin : 0;
    padding : 0;
    width : auto;
    padding-left : 9%;
    padding-right : 4%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;


export const Page = styled.section`
  display : flex;
  flex-direction : column;
  justify-content : left;
  flex-wrap : wrap;
  padding-bottom : 100px;

  width : 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;


interface IBlockProps {
  desktopOrder ?: string
}

export const Block = styled.div<IBlockProps>`
  display : flex;
  flex-direction : column;
  flex-wrap : wrap;
  
  width : 100%;
  margin-bottom : 0;

  img {
    width : 100%;
  }

  @media (min-width : 1060px) {
    order : ${props => props.desktopOrder || "initial"};
    width : 50%;

    img {
      width : 84%;
    }
  }
`;


export const BlockFull = styled(Block)`

  width : 100%;


  p, li, h2, h3 {
    padding-bottom : 1.2em;
    width : 84%;
    margin-left : 10%;
    margin-right : 6%;
  }

  h2 {
    padding-bottom : 35px;
  }

  h3 {
    padding-bottom : 20px;
  }

  img {
    width : 100%;
    padding-bottom : 30px;
  }

  @media (min-width : 850px) {
    width : 86%;
    margin-left : 12%;
    margin-right : 12%;

    img {
      width : 132%;
      margin-left : -16%;
      margin-right : -16%;
    }
  }

  @media (min-width : 1060px) {
    width : 86%;
    margin-left : 7%;
    margin-right : 7%;

    p, li, h2, h3 {
      padding-bottom : 1.2em;
      width : 100%;
      margin-left : 0;
      margin-right : 0;
    }

    img {
      width : 102%;
      margin : 0;
      margin-left : -1%;
      padding-bottom : 30px;
    }
  }
`;

const imgMarginSettings = `
  padding-bottom : 40px;

  img {
    width : 110%;
    margin : 0;
    margin-left : -1%;
  }
`;

export const BlockLeft = styled(BlockFull)`

  padding-bottom : 0;

  @media (min-width : 1060px) {
    width : 37%;
    margin-left : 7%;
    margin-right : 5%;

    ${imgMarginSettings}
  }
`;

export const BlockRight = styled(BlockFull)`

  padding-bottom : 40px;

  @media (min-width : 1060px) {
    width : 37%;
    margin-left : 5%;
    margin-right : 7%;

    ${imgMarginSettings}
  }
`;

export const BlockRightFirst = styled(BlockRight)`

  @media (max-width: 1060px) {
    order : -1;
  }
`;


export const AppIntro = styled(BlockLeft)`
  display : flex;
  flex-direction : column;
  flex-wrap : wrap;  

  margin-bottom : 100px;

  h2 {
    padding-bottom : 20px;
    order : 0;

    font-size : 2em;
  }

  a {
    width : auto;
    padding : 0;
    margin-left : 10%;
    order : 1;
  }

  div {
    margin : 0;
    margin-left : calc(10% - 10px);
    margin-top : 30px;
    order : 2;
  }


  @media (min-width: 768px) {
    flex-direction : row;

    h2 {
      padding-bottom : 30px;
      order : 0;
      font-size : 2.1em;
    }

    a {
      margin-left : 20px;
      padding-top : 14px;
      order : 2;
      font-size : 1.1em;
    }

    div {
      margin-left : calc(10% - 10px);
      margin-top : 0;
      order : 1;
    }
  }


  @media (min-width: 1060px) {
    div {
      margin-left : -10px;
    }
  }
`;


export const BlockEnd = styled(AppIntro)`

  div {
    margin-top : 0;
  }
`;


export const AppEnd = styled.div`

  width : 100vw;
  height : 120px;
  background-color : ${AppColors.brand1};
`;