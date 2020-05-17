import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';

import { useAppContext } from '../App/App';
import { IChapterData } from '../../interfaces/Chapter';
import {
  Page, 
  Block,
  BlockLeft, 
  BlockRight, 
  BlockFull
} from '../App/styles';

import ImgFluid from './images/HypothesesFluid.png';
import ImgStructured from './images/HypothesesStructured.png';
// import ImgFlowMap from './images/Flow Map.png';
// import ImgShowroom from './images/made-design-showroom.jpg';

interface IHypothesesProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "Hypotheses",
  id : "hypotheses"
}

const Hypotheses : React.FC<IHypothesesProps> = ({ children }) => {

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
        <p>These are the assumptions that express what we believe in, they are the users expectations of the solution. They are written as an affirmation to validate a single problem and they evaluate to be either true or false.</p>
        <p>If our goals are defined, we then work backwards to create the hypotheses that will validate our goals. If our hypotheses represent our problem, probably if we validate our hypotheses, we also validate our problem. It also leaves us with a very good indication that what we are building will solve the problem.</p>
        <p>Otherwise, work backwards from the idea and keep asking, how  does the user do it and why?</p>
      </BlockLeft>

      <BlockRight>
        <p><b>Creating is like shooting in the dark.</b> You have no clue to where you are aiming, you might be successful but the smaller the target, the harder it is.</p>
        <p><b>With user research, you have a flashlight.</b> Still hard to be successful but with more research, the light is stronger and the target is clearer.</p>
        <p>The user is directly involved in the product and it is the main driver for creating a product that meets your users’ expectation.</p>
       </BlockRight>

       <BlockLeft>
        <img src={ImgStructured} alt=""/>
        <h3>User + Goal + Because</h3>
        <p>Usually, I use this structure for my hypothesis, as it is clear which agent is at play on which moment.</p>
        <p><b>User</b> is the target that has the goal that we are defining.<br/>
          In this case “Sofa buyers“, could be “50+ males” or “millennial couples“ or whatever it makes sense to that goal.</p>
        <p><b>Goal</b> is the essence of your hypothesis, it is why the user is using your solution, broken down to a single action.<br/>
          In this case “want the option to choose a different colour leg”.</p>
        <p><b>Because</b> it is the reason why we believe the user has the goal we defined.<br/>
          In this case, “they want it to match their antique furniture“.</p>
        <p><b>Validation</b> is the method we are using to validate the hypothesis. How can we prove if the hypothesis is right or wrong (true or false). This is usually the node next to our hypothesis.<br/>
          In this case, we can prove this hypothesis by asking a few questions in a “survey”, it could be a “fake door test“, “interview”, “prototype“, “A/B test“ or any other user research technic.</p>
      </BlockLeft>

      <BlockRight>
        <img src={ImgFluid} alt=""/>
        <h3>Fluid</h3>
        <p>Brainstorm meetings or any kind of creative meetings bring lots of ideas to the project, we need a quick way to write and discuss them, we also need to define how we can validate them or prove them wrong. Since the time for a meeting is fixed, I usually take shortcuts to avoid stopping the creative momentum of the team. The person who is writing should be the one who will look at this in the end, otherwise we risk not understanding what is written.</p>
        <p>I focus mainly on getting the user goal right, with overall agreement with what was written.</p>
        <p>Then, I try to get the max info I can about the goal and how to validate it.<br/>
          If there are different options we write a few together. If the testing is not straightforward, I push to define how can we prove that the idea works.</p>
        <p>I usually spend time after the meeting, cleaning up and making things clearer. We don’t want to look at the flow tomorrow and not getting what it means.<br/>
          It wouldn’t be a first to me :D</p>
      </BlockRight>

      {children}
    </Page>
  );
}

export default Hypotheses;