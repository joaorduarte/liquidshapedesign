import React, {useState, useEffect} from 'react';

import { useAppContext } from '../App/App';
import { IChapterData } from '../../interfaces/Chapter';
import {
  Page, 
  BlockLeft, 
  BlockRight,
  BlockFull
} from '../App/styles';

import ImgFlowBasic from './images/FlowBasic.png';

interface IEnterTheFlowsProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "Enter the Flows",
  id : "enter-the-flows"
}

const EnterTheFlows : React.FC<IEnterTheFlowsProps> = ({ children }) => {

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
      <BlockFull>
        <h2>{data.title}</h2>
      </BlockFull>
      <BlockLeft>
        <p><b>Creating a flow can help you take any decision.</b></p>
        <p>Products, websites, apps or games are built around a bundle of user decisions and business decisions. Writing them out, looking at them with different perspectives will give us a clear view of the actual scenario and which direction to take.</p>
        <p>It’s important to write things down. Until an idea is written down it could be anything, it transforms and mutates with other people input and it will be forever amazing because <i>what can be better than your imagination?</i></p>
      </BlockLeft>

      <BlockRight>
        <p>It is when you write the ideas down and define them, that the idea reveals its true ugliness:</p>
        <ul>
          <li>connections we didn’t make</li>
          <li>things we forgot to account for</li> 
          <li>doesn’t make sense</li>
          <li>data that we are missing</li>
        </ul>
       </BlockRight>

      <BlockLeft>
        <h3>Be formless, shapeless</h3>
        <p><b>Remove the creation noise.</b> Abstract from any visual cue, anything that distracts you from the problem. We want to get a clear view of the problem and all its connections.</p>
        <p><b>Like water filling the cracks of a rock,</b> to read a flow start from the left furthest node and move to the top next node. Follow the full flow of each node.<br/>
          Then, move down on the previous interception node and continue.</p>
        <img src={ImgFlowBasic} alt="Screenshot of a basic flow"/>
      </BlockLeft>

       <BlockRight>
        <h3>Anatomy of a flow</h3>
        <p><b>Flow</b> is a hierarchy graph that shows nodes from the left to the right and in order by priority from top to bottom.<br/> 
          We use it to write down what we know, our predictions and decisions. We write our questions and if we don’t know the answers, it will show us what data is missing or that needs to be researched.<br/> 
          Each project will have different types of flows.</p>

        <p><b>Node</b> is an individual element of content in a flow.<br/>
          Moving these nodes around and changing their priority, allows us to experiment quickly and formless.</p>

        <p><b>Priority</b> is always what is more important to the user.<br/>
          A buy button is only important after the user has decided to buy, hence some information like name, size, colour, becomes more important in the first few user sessions.</p>

        <p>When there is no priority, the nodes are equally matched and no order is important, just leave them in the order you like, for instance, all user stories are equally important.</p>
      </BlockRight>

      {children}
    </Page>
  );
}

export default EnterTheFlows;