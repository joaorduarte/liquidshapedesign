import React, {useState, useEffect, useCallback, useRef} from 'react';

import { 
  MenuOptions, 
  AnchorContainer, 
  MenuContainer, 
  MenuLogo,
  TopBar,
  MenuBtn,
  MenuShareBtn,
  MenuShare
} from './styles';

import SvgLogo from './images/logoSm.svg';
import SvgMenu from './images/IconMenu.svg';
import SvgShare from './images/IconShare.svg';
import SvgX from './images/IconX.svg';

import { useAppContext } from '../App/App';
import Share from '../Share/Share';

import { IChapterData } from '../../interfaces/Chapter';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { TopBarHeight } from '../Menu/styles';


const scrollOffset : number = 10;


interface IMenuProps {
  breakpoint : number,
  children ?: React.ReactNode
}


const Menu : React.FC<IMenuProps> = ({ children, breakpoint }) => {

  const {
    tableOfContentsItems
  } = useAppContext();


  const [open, setOpen] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  const prevScrollPos = useRef(window.pageYOffset);

  const scrollIsReady = useCallback(() => {
    if (open) setOpen(false);
    if (openShare) setOpenShare(false);

    if (window.pageYOffset < breakpoint + 100) {
      if (!showBar) setShowBar(true);
      prevScrollPos.current = window.pageYOffset;

    } else {

      if (window.pageYOffset < prevScrollPos.current - scrollOffset) {
        if (!showBar) setShowBar(true);
        prevScrollPos.current = window.pageYOffset;

      
      } else if (window.pageYOffset > prevScrollPos.current + scrollOffset) {
        if (showBar) setShowBar(false);
        prevScrollPos.current = window.pageYOffset;
      }
    }

    if (window.pageYOffset > breakpoint - TopBarHeight() ) {
      if (!showLogo) setShowLogo(true);

    } else {
      if (showLogo) setShowLogo(false);
    }
  }, [
    breakpoint,
    showBar, setShowBar, 
    showLogo, setShowLogo, 
    open, setOpen,
    openShare, setOpenShare
  ]);


  useEffect(() => {
    window.addEventListener("scroll", scrollIsReady);

    return () => {
      window.removeEventListener("scroll", scrollIsReady);
    }
  }, [scrollIsReady]);

  return (
    <MenuContainer>
      <TopBar show={showBar}>

        <MenuBtn show={!open}
          onClick={() => {
            setOpen(true);
            if (openShare) setOpenShare(false);
          }}>

          <img src={SvgMenu} alt="Open menu" />
        </MenuBtn>

        <MenuBtn show={open}
          onClick={() => {
            setOpen(false);
          }}>

          <img src={SvgX} alt="Close menu" />
        </MenuBtn>

        <MenuShareBtn show={!openShare}
          onClick={() => {
            setOpenShare(true);
            if (open) setOpen(false);
          }}>

          <img src={SvgShare} alt="Share menu" />
        </MenuShareBtn>

        <MenuShareBtn show={openShare}
          onClick={() => {
            setOpenShare(false);
          }}>

          <img src={SvgX} alt="Close share" />
        </MenuShareBtn>

        <MenuLogo show={showLogo}>
          <AnchorLink href="#top" offset={TopBarHeight() + 20}>
            <img src={SvgLogo} alt="Logo Liquid Shape Design" />
          </AnchorLink>
        </MenuLogo>

      </TopBar>

      <MenuOptions show={open}>
        <AnchorContainer>
          {tableOfContentsItems && tableOfContentsItems.map((dataVal : IChapterData) => (
            <AnchorLink 
              key={dataVal.id} 
              href={`#${dataVal.id}`}
              offset={TopBarHeight() + 20}
            >
              {dataVal.menuTitle || dataVal.title}
            </AnchorLink>
          ))}
        </AnchorContainer>
      </MenuOptions>

      <MenuShare show={openShare}>
        <p>Share:</p>
        <Share />
      </MenuShare>

    </MenuContainer>
  );
}

export default Menu;