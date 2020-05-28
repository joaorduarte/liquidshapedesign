import React, {useState, useEffect} from 'react';

import { IChapterData } from '../../interfaces/Chapter';
import { useAppContext } from '../App/App';
import {
  Page, BlockRight, BlockEnd
} from '../App/styles';

import Share from '../Share/Share';

interface IThanksProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "Thank you for reading",
  id : "thanks"
}

const Thanks : React.FC<IThanksProps> = ({ children }) => {

  const {
    addToTableOfContents
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
      <BlockEnd>
        <h2>{data.title}</h2>
        <Share />
      </BlockEnd>

      <BlockRight>
        <p>Thanks <a href="https://www.made.com/"><b>made.com</b></a> for letting me use real projects flows.</p>
        <p><b>Hi, I’m </b><a href="https://www.linkedin.com/in/joão-duarte-7a4a6910"><b>JD,</b></a> a Lead Product Designer at Made Labs, and I have been working with product for almost 20 years. I applied my method in very distinct areas like agency, tv, airlines, social gaming, AI and ecommerce. The method is ever-evolving, it is not rigid, it is still mutating, adapting, learning.</p>
      </BlockRight>

      {children}
    </Page>
  );
}

export default Thanks;