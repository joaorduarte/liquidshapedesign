import styled, {keyframes} from 'styled-components';

export const TopBarHeight = () => {
  if (window.innerHeight < 768) {
    return 56;
  
  } else {
    return 64;
  }
};

export const MenuContainer = styled.menu`
  margin : 0;
  padding : 0;
  position : fixed;
  width : 100%;
  margin : auto;
`;


export const hideMoveAnimation = keyframes`
  0% {
    transform : translateY(0);
    opacity : 1;
  }
  100% {
    transform : translateY(-50%);
    opacity : 0;
  }
`;

export const showMoveAnimation = keyframes`
  0% {
    transform : translateY(-50%);
    opacity : 0;
  }
  100% {
    transform : translateY(0);
    opacity : 1;
  }
`;

export const hideAnimation = keyframes`
  0% {
    opacity : 1;
  }
  100% {
    opacity : 0;
  }
`;

export const showAnimation = keyframes`
  100% {
    opacity : 1;
  }
`;

interface IElementProps {
  show : boolean
}

export const TopBar = styled.div<IElementProps>`
  margin : 0;
  padding : 0;
  width : 100%;
  height : ${TopBarHeight().toString()}px;
  background-color : #FFFFFF;

  opacity : 0;
  animation: ${props => props.show ? showMoveAnimation : hideMoveAnimation} 300ms ease-out forwards;
  pointer-events : ${props => props.show ? "all" : "none"};

  a {
    width : auto;
  }
`;


export const MenuLogo = styled.div<IElementProps>`
  display : flex;
  flex-direction : row;

  width : 100%;
  height : 100%;

  pointer-events : none;

  justify-content : center;
  align-items : center;

  a {
    pointer-events : ${props => props.show ? "all" : "none"};
  }

  img {
    width : 80%;
    padding-left : 10%;
    padding-top : 3px;
    margin : auto;
  }

  animation: ${props => props.show ? showAnimation : hideAnimation} 300ms ease-out forwards;

  @media (min-width: 768px) {
    img {
      width : 100%;
    }
  }
`;


export const MenuBtn = styled.button<IElementProps>`
  position : absolute;
  border : 0;
  width : 50px;
  height : 50px;
  top : 3px;
  left : 10px;

  display : flex;
  align-items : center;
  justify-content : center;

  background-color : #FFFFFF;

  animation: ${props => props.show ? showAnimation : hideAnimation} 300ms ease-out forwards;
  pointer-events : ${props => props.show ? "all" : "none"};

  @media (min-width: 768px) {
    width : 60px;
    height : 60px;
  }

  cursor: pointer;
`;


export const MenuShareBtn = styled(MenuBtn)`
  left : unset;
  right : 10px;

  img {
    padding-bottom : 5px;
  }
`;


export const MenuOptions = styled.div<IElementProps>`
  position : fixed;
  margin : 0;
  padding : 0;
  width : 100%;
  background-color : #FFFFFF;
  opacity : 0;

  animation: ${props => props.show ? showAnimation : hideAnimation} 500ms ease-out forwards;
  pointer-events : ${props => props.show ? "all" : "none"};
`;


export const MenuShare = styled(MenuOptions)`
  display : flex;
  flex-direction : row;
  justify-content : flex-end;
  align-items : center;

  p {
    display : none;
  }

  div {
    margin : 0;
    margin-top : 10px;
    margin-bottom : 10px;
    margin-right : 7px;
  }

  @media (min-width: 768px) {
    justify-content : flex-end;
    align-items : center;

    p {
      display : block;
      margin : 0;
      padding : 0;
      width : auto;
      line-height : 1em;
      margin-right : 15px;
    }
  }
`;


export const AnchorContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-around;

  height : calc(100vh - ${TopBarHeight().toString()}px - 40px - 20px);

  margin : 0;
  padding : 0;

  margin-left : 10%;
  margin-right : 10%;

  padding-bottom : 40px;
  padding-top : 20px;

  a {
    font-family : 'Roboto', serif;
    font-size : 1.2em;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    
  }
`;