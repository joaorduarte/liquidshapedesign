import styled from 'styled-components';

export const TopBarHeight : number = 56;

export const MenuContainer = styled.menu`
  margin : 0;
  padding : 0;
  position : fixed;
  width : 100%;
`;


export const TopBar = styled.div`
  margin : 0;
  padding : 0;
  width : 100%;
  height : ${TopBarHeight.toString()}px;
  background-color : #FFFFFF;
`;


export const MenuLogo = styled.div`
  display : flex;
  flex-direction : row;

  padding-left : 15px;
  padding-top : 7px;
  width : auto;

  img {
    padding : 1px;
  }
`;


export const MenuBtn = styled.button`
  position : absolute;
  border : 0;
  width : 50px;
  height : 50px;
  top : 3px;
  right : 10px;

  display : flex;
  align-items : center;
  justify-content : center;

  background-color : #FFFFFF;
`;


export const MenuOptions = styled.div`
  margin : 0;
  padding : 0;
  width : 100%;
  background-color : #FFFFFF;
  overflow-y: scroll;
`;


export const AnchorContainer = styled.div`
  display : flex;
  flex-direction : column;

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
    margin-bottom : 25px;
  }

  @media (min-width: 768px) {
    
  }
`;