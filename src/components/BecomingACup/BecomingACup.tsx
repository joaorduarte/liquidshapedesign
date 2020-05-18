import React, {useState, useEffect} from 'react';

import { useAppContext } from '../App/App';
import { IChapterData } from '../../interfaces/Chapter';
import {
  Page, 
  BlockLeft, 
  BlockRight, 
  BlockFull
} from '../App/styles';

import ImgUserFlow from './images/User Flow.png';
import ImgUserStories from './images/User Stories.png';

interface IBecomingACupProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "How can someone become a cup?",
  id : "becoming-a-cup"
}

const BecomingACup : React.FC<IBecomingACupProps> = ({ children }) => {

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
        <p>Let’s get our natural bias out of the way, you cannot be a 60-year-old woman if that is your user base. Also, even if you happen to be one, your user base is made up of thousands of 60-year-old women, all with different things they like, different interests, different memories and different lives.</p>
        <p>So, now that we know that we can't become our user base, what can we do to become a cup? User Research!</p>
        <p><b>Interviews,</b> talk with different users, ask them questions about life, choices, goals. What they like or hate, how do they react to different issues. How do they use your product or your competitor’s product. What do they expect from it, their problems with it and what is missing?</p>
      </BlockLeft>

      <BlockRight desktopOrder="2">
        <p><b>Surveys,</b>  with them you get huge amounts of data to play with. Ask them what you want (respectfully) and also, ask them questions that will drive the results that you can later segment to have different perspectives.<br/>
          Don’t take it as the absolute truth, as a survey represents the perception that the users have of themselves, it may also be that they can lie or be in a hurry.</p>
        <p><b>Analytics data,</b> the real numbers recorded straight from our product. We can get usage time, type of user and device, number of sessions and session duration, per segment, quite easily. But you need to have a good understanding of data science or have a scientist in your team to have valuable and unexpected insights.</p>
      </BlockRight>

      <BlockFull desktopOrder="3">
        <img src={ImgUserFlow} alt="User flow"/>
      </BlockFull>

      <BlockFull desktopOrder="4">
        <h3>User flow</h3>
      </BlockFull>

      <BlockLeft desktopOrder="5">
        <p>Represents the several paths the users take to reach their goals. We don’t need to add too many details at this moment, we need to focus on the essential and keep it simple.</p>
        <p>To create a user flow we keep questioning, how do they get to that point, why are they there, what are they seeing and where do they go from there. The nodes are the answers to those questions.</p>
        <p><b>Entry nodes,</b> what are the ways from which the user gets to our feature or product. In this case “google search“, could be “homepage”, “banner“, “email“.</p>
        <p><b>Action nodes,</b> what is the action that takes the user to the next node. In this case “Land on the page“, could be “click button”, “scroll down”, “closes popup“.</p>
      </BlockLeft>

      <BlockRight desktopOrder="6">
        <p><b>State nodes,</b> what are the users looking for, what is their state of mind? In this case “I’m decorating a room“ or “I’m looking for a specific product“.</p>
        <p><b>Info nodes</b> these are notes that don’t belong in the flow but give us context to understand the same level nodes. Usually, I use an info icon to differentiate from the other nodes. In this case “Room styling tips“.</p>
        <p><b>Content nodes</b> are indications to the type of content that the user needs to achieve their goal. In this case “Buying assistant“, “Find your style“, “Search“, etc…</p>
      </BlockRight>

      <BlockRight desktopOrder="8">
        <img src={ImgUserStories} alt="User stories"/>
      </BlockRight>

      <BlockLeft desktopOrder="7">
        <h3>User stories</h3>
        <p>There is reasoning to our user goals and we need to give some context as to why the user has them. We are trying to individualise the users and turn them to humans with a life.</p>
        <p><b>User type,</b> what’s their age, gender, name, picture. In this case “Female 30 year old“, could be “Jessie, a 30-year-old woman“.</p>
        <p><b>History,</b> what is their life story that makes sense to us. In this case “just moved into a new house“ or “interior designer“.</p>
        <p><b>Goal,</b> why are they here, what are they looking for? In this case “wants to know how the products are made and…“ or the final bit of every node here.</p>
      </BlockLeft>

      {children}
    </Page>
  );
}

export default BecomingACup;