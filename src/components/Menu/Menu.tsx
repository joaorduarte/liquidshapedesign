import React, {useState, useEffect} from 'react';

import { 
  MenuOptions, AnchorContainer
} from './styles';

import { useAppContext } from '../App/App';
import Share from '../Share/Share';

import { IChapterData } from '../../interfaces/Chapter';

import AnchorLink from 'react-anchor-link-smooth-scroll';


interface IMenuProps {
  children ?: React.ReactNode
}

const Menu : React.FC<IMenuProps> = ({ children }) => {

  const {
    appWidth, tableOfContentsItems
  } = useAppContext();

  return (
    <MenuOptions>
      <Share />

      <AnchorContainer>
        {tableOfContentsItems && tableOfContentsItems.map((dataVal : IChapterData) => (
          <AnchorLink key={dataVal.id} href={`#${dataVal.id}`}>{dataVal.menuTitle || dataVal.title}</AnchorLink>
        ))}
      </AnchorContainer>
    </MenuOptions>
  );
}

export default Menu;