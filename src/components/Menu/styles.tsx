import styled from 'styled-components';

export const ShareIconSize : number = 40;


export const MenuContainer = styled.menu`
  margin : 0;
  padding : 0;
  position : fixed;
  width : 100%;
  height : 100vh;
  background-color : #FFFFFF;
`;


export const MenuOptions = styled.div`
  margin : 0;
  padding : 0;
  position : fixed;
  width : 100%;
  height : 100vh;
  background-color : #FFFFFF;
`;


export const AnchorContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-between;

  height : 80%;

  margin : 0;
  padding : 0;

  margin-left : 10%;
  margin-right : 10%;

  a {
    font-family : 'Roboto', serif;
    font-weight : 300;
    letter-spacing : 0.05em;
    line-height : 1.5em;
    text-decoration : none;
    font-size : 1.2em;
  }

  @media (min-width: 768px) {
    
  }
`;