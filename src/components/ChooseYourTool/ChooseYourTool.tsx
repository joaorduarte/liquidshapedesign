import React, {useState, useEffect} from 'react';

import { useAppContext } from '../App/App';
import { IChapterData } from '../../interfaces/Chapter';
import {
  Page, BlockLeft, BlockRightFirst
} from '../App/styles';

import ImgTool from './images/mindmeister.png';

interface IChooseYourToolProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "Choose your tool wisely",
  id : "choose-your-tool"
}

const ChooseYourTool : React.FC<IChooseYourToolProps> = ({ children }) => {

  const {
    appWidth, addToTableOfContents
  } = useAppContext();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted && addToTableOfContents) {
      addToTableOfContents(data);
      setMounted(true);
    }
  }, [mounted, addToTableOfContents, setMounted]);

  return (
    <Page id={data.id}>

      <BlockLeft>
        <h3>{data.title}</h3>
        <p>I have tried many different applications to create the flows, however, I didn’t find any tool that are perfect for what we want to do… My main goals are:</p>
        <ul>
          <li>Needs to display a hierarchy graph starting from the left and be easy to share.</li>
          <li>We don’t want to worry with alignment and style, content is the main focus here</li>
          <li>Needs to be fast to move things around, we want to drag nodes, delete them, create new ones, without much hassle</li>
        </ul>
        <p>My favourite tool at the moment is <b><a href="https://www.mindmeister.com/">mindmeister</a></b>. Just align right and you're good to go.</p>
      </BlockLeft>

      <BlockRightFirst>
        <img src={ImgTool} alt=""/>
      </BlockRightFirst>

      {children}
    </Page>
  );
}

export default ChooseYourTool;