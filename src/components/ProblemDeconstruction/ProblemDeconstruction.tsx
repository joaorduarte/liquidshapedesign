import React, {useState, useEffect} from 'react';

import { IChapterData } from '../../interfaces/Chapter';
import { useAppContext } from '../App/App';
import {
  Page, BlockLeft, BlockRight, BlockFull
} from '../App/styles';

import ImgGoals from './images/Goals.png';

interface IProblemDeconstructionProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "Deconstruction of a problem",
  id : "problemDeconstruction"
}

const ProblemDeconstruction : React.FC<IProblemDeconstructionProps> = ({ children }) => {

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
      <BlockFull desktopOrder="0">
        <h2>{data.title}</h2>
      </BlockFull>

      <BlockLeft desktopOrder="1">
        <p><b>Where’s the cup?</b><br/>
          We are analysing a problem, that problem is our cup.</p>
        <p>A problem is made of several flows, all these flows have different goals, that means we are solving different parts of the problem. These are cups as well… </p>
        <p>Do you know what the problem needs?<br/>
          Honestly, depends on the amount of research you have.</p>
      </BlockLeft>

      <BlockRight desktopOrder="2">
        <p><b>What type of cup?</b><br/>
          Our type of cup is what we’re designing.  The solution to the problem relies on what we want to do:</p>
        <ul>
          <li>a product or a feature flow</li>
          <li>an app flow</li>
          <li>a website flow</li>
          <li>other solutions</li>
        </ul>
        <p>Or if you don’t have a solution, a research flow.</p>
       </BlockRight>

       <BlockFull desktopOrder="3">
        <h3>Collaboration</h3>
      </BlockFull>

      <BlockLeft desktopOrder="4">
        <p>By experience, it is much faster to create all these flows with every person involved in this direct problem. We can easily define a flow together between 1 and 2 hours. In the end, everyone agrees with what is written, we know what the next step is and who needs to do what.</p>
        <p><b>Kick-off project meeting,</b> it is the perfect time to do the first flows. Involving different areas of business is very helpful, as we all have different life experiences, we see different things, we have different likes and dislikes. It’s very refreshing thinking of the problem altogether and sharing the flows between all in the end.</p>
      </BlockLeft>

      <BlockRight desktopOrder="5">
        <p>The <b>Product Manager</b> of the project is crucial, as during the project we keep meeting and defining flows to better understand a problem or to take a decision.</p>
        <p>If any department is responsible for the brief they should come, at least, to the kick-off and periodic catchups. The developer and the artist are also important, contributing with great inputs and giving an idea of feasibility or complexity.</p>
        <p>When discussing something specific, no need to involve everyone as we can do a 1v1 and notify the others about the changes.</p>
      </BlockRight>

      <BlockRight desktopOrder="7">
        <img src={ImgGoals} alt="Screenshot of a flow focused on the goals"/>
      </BlockRight>

      <BlockLeft desktopOrder="6">
        <h3>Goal-driven design</h3>
        <p>Do we know what the goals are? Number one question!<br/>
          Every decision we make should be aligned with our goals, so we need to have them present and defined since the beginning. But be fluid if you need to pivot and change them, go for it and adapt.</p>
        <p>My first step is to define the goals of the project. We are writing what we already know of this project until this moment. No need to worry if you don’t know the answer yet, just leave it blank and come back to it.</p>
        <p>If instead of an answer you have a question, write it and continue, the answer might be in the flow, otherwise, we know where we need to start looking.<br/>
          Usually, I use these goals, but add or remove for your purpose:</p>
        <p><b>User goals,</b> why are they using your solution? What is the problem you are solving? Mostly assumptions.</p>
        <p><b>Business goals,</b> what are the predictions and expectations of the business? Having some clear KPIs helps.</p>
        <p><b>Document goals,</b> what do you expect to solve with this document?</p>
      </BlockLeft>

      {children}
    </Page>
  );
}

export default ProblemDeconstruction;