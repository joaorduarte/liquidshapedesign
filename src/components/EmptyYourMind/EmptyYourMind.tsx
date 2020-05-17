import React, {useState, useEffect} from 'react';

import { useAppContext } from '../App/App';
import { IChapterData } from '../../interfaces/Chapter';
import {
  Page, BlockLeft, BlockRight
} from '../App/styles';

interface IEmptyYourMindProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "Empty your mind",
  id : "empty-your-mind"
}

const EmptyYourMind : React.FC<IEmptyYourMindProps> = ({ children }) => {

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
      <BlockLeft>
        <h2>{data.title}</h2>
      </BlockLeft>

      <BlockRight style={{ paddingTop : "10px"}}>
        <p><b>Remove yourself from the equation.</b> Erase your problems, what you like or dislike, what drives you, your passion, you don’t exist. You can’t. Every biased decision takes you a step back. All decisions should be made to help the user achieve their goal, with business in mind.</p>
        <p>When you release your project to the world, it is then that you find the truth to what you have made. Then you have projections that are met and real numbers to study. Improvements and optimisations lead to more user research and that’s when you start to anticipate your users moves and what creates impact.</p>
        <p>This happens because you need to be the user, as actors need to be their characters. Use their apps, follow their trends, speak with them, show them your progression, understand their worries and be surprised by them.</p>
       </BlockRight>

      {children}
    </Page>
  );
}

export default EmptyYourMind;