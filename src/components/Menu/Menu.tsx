import React, {useState, useEffect, useCallback} from 'react';

import { 
  MenuOptions, 
  AnchorContainer, 
  MenuContainer, 
  MenuLogo,
  TopBar,
  MenuBtn
} from './styles';

import SvgLogo from './images/logoSm.svg';
import SvgMenu from './images/IconMenu.svg';
import SvgX from './images/IconX.svg';

import { useAppContext } from '../App/App';
import Share from '../Share/Share';

import { IChapterData } from '../../interfaces/Chapter';

import AnchorLink from 'react-anchor-link-smooth-scroll';


interface IMenuProps {
  breakpoint : number,
  children ?: React.ReactNode
}

const Menu : React.FC<IMenuProps> = ({ children, breakpoint }) => {

  const {
    appWidth, tableOfContentsItems
  } = useAppContext();


  const [open, setOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);


  const scrollIsReady = useCallback(() => {
    if (window.pageYOffset > breakpoint) {
      if (!showLogo) setShowLogo(true);
    
    } else {
      if (showLogo) setShowLogo(false);
    }
  }, [showLogo, setShowLogo]);


  useEffect(() => {
    if (appWidth && appWidth < 768) {
      scrollIsReady();
      window.addEventListener("scroll", scrollIsReady);

      return () => {
        window.removeEventListener("scroll", scrollIsReady);
      }
    }
  }, [scrollIsReady, appWidth]);


  return (
    <MenuContainer>
      <TopBar>
        {showLogo && (
          <AnchorLink href="#top">
            <MenuLogo>
              <img src={SvgLogo} alt="Logo Liquid Shape Design" />
            </MenuLogo>
          </AnchorLink>
        )}

        {!open && (
          <MenuBtn onClick={() => {
            setOpen(true);
          }}>
            <img src={SvgMenu} alt="Open menu" />
          </MenuBtn>
        )}

        {open && (
          <MenuBtn onClick={() => {
            setOpen(false);
          }}>
            <img src={SvgX} alt="Close menu" />
          </MenuBtn>
        )}

      </TopBar>

      {open && (
        <MenuOptions>
          <Share />

          <AnchorContainer>
            {tableOfContentsItems && tableOfContentsItems.map((dataVal : IChapterData) => (
              <AnchorLink key={dataVal.id} href={`#${dataVal.id}`}>{dataVal.menuTitle || dataVal.title}</AnchorLink>
            ))}
          </AnchorContainer>
        </MenuOptions>
      )}

    </MenuContainer>
  );
}

export default Menu;