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
  max-width : 1400px;
`;


export const AppMenu = styled.menu`
  margin : 0;
  padding : 0;
  position : fixed;
  width : 100%;
  height : 100vh;
  background-color : #FFFFFF;
`;


export const ShareContainer = styled.div`
  display : flex;
  flex-direction : row;
  justify-content : center;

  margin : 0;
  padding : 0;

  * {
    padding : 8px;
  }

  @media (min-width: 768px) {
    
  }
`;


export const AnchorContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-around;

  height : 80%;

  margin : 0;
  padding : 0;

  * {
    padding : 8px;
  }

  @media (min-width: 768px) {
    
  }
`;


export const AppHeader = styled.header`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  width : 100%;
  padding-top : 80px;
  padding-bottom : 80px;

  @media (min-width: 768px) {
    padding-top : 120px;
    padding-bottom : 120px;
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
      padding-top : 30px;
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

  p, li {
    padding-bottom : 1.2em;
    width : 84%;
    margin-left : 10%;
    margin-right : 6%;
  }

  img {
    width : 100%;
  }

  h2 {
    padding-bottom : 0.8em;
    width : 84%;
    margin-left : 10%;
    margin-right : 6%;
  }

  h3 {
    padding-bottom : 0.6em;
    width : 84%;
    margin-left : 10%;
    margin-right : 6%;
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

    img {
      width : 118%;
      margin-left : -9%;
      margin-right : 0;
    }
  }
`;

const imgMarginSettings = `
  img {
    width : 110%;
    margin : 0;
    margin-left : -1%;
  }
`;

export const BlockLeft = styled(BlockFull)`

  @media (min-width : 1060px) {
    width : 39%;
    margin-left : 7%;
    margin-right : 4%;

    ${imgMarginSettings}
  }
`;

export const BlockRight = styled(BlockFull)`

  @media (min-width : 1060px) {
    width : 39%;
    margin-left : 4%;
    margin-right : 7%;

    ${imgMarginSettings}
  }
`;

export const BlockRightFirst = styled(BlockRight)`

  @media (max-width: 991px) {
    order : -1;
  }
`;