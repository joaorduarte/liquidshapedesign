import React, {useState, useEffect} from 'react';

import { IChapterData } from '../../interfaces/Chapter';
import {
  Page, BlockLeft, BlockFull, BlockRight
} from '../App/styles';

import { useAppContext } from '../App/App';

import ImgDevFlow from './images/Dev Flow.png'
import ImgDevFlowHorz from './images/Dev Flow Horz.png'

interface IPrototypeProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "Prototype",
  id : "prototype"
}

const Prototype : React.FC<IPrototypeProps> = ({ children }) => {

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

      <BlockFull>
        {(appWidth && appWidth < 768 ) ? (
          <img src={ImgDevFlow} />
        ) : (
          <img src={ImgDevFlowHorz} />
        )}
      </BlockFull>

      <BlockLeft>
        <h2>{data.title}</h2>
        <p>The final result of the next design process is a prototype that we can show to the users and get feedback. Wireframes and UI are part of the process of creating a proxy for the user to interact and show their problems and positive points of what we are building.</p>
        <p>My design process is very fluid and I’m always between these stages: flows, prototype and user testing. In the beginning, there is a bigger investment in building the main prototype, but if we built it with iterations in mind, we can do weekly user testing sessions and implement the user feedback between them. Also, we can try any new ideas that come out of user testing.</p>
        <p>I follow the <b><a href="https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/">guidelines from Nielsen Norman Group</a></b> that say, that by testing 5 users you find 80% of the problems. I believe that getting the prototype close to reality gets you the most viable results in user testing. I also believe that we should get feedback from the user often, so I try to implement the UI changes or any other aspect in the prototype to be user-tested.</p>
        <p>I might create several prototypes to get feedback quickly. For instance, when I get the wireframes ready, I can create a screen-by-screen prototype with a single flow. From there, I build a proper prototype with actual data. I used to use framer to do this, but lately, I’m working with react as I get more freedom to do what I want and I’m getting faster at it. Any tool is good, it is the content that is important :)</p>
      </BlockLeft>

      <BlockRight>
        {(appWidth && appWidth < 1060 ) ? (
          <h3>Live</h3>
        ) : (
          <h2>Live</h2>
        )}
        <p>I love real data, I honestly do... Big numbers and big impact.</p>
        <p>A/B test, trying different ways to show the content, trying different flows, following the numbers, segmenting users. In my opinion, having different versions and letting an AI system decide which version the user sees, will be the best way to optimise the system, designers will work on optimising each version and define the flow for each one of the user types.</p>
        <p>Changing and optimising, brings us back to the beginning of the process, but with most of the assets already created and our knowledge of the problem, it will be very fast to iterate, create and test new versions.</p>
      </BlockRight>

      {children}
    </Page>
  );
}

export default Prototype;