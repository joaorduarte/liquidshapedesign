import React, {useState, useEffect} from 'react';

import { useAppContext } from '../App/App';
import { IChapterData } from '../../interfaces/Chapter';
import {
  Page, 
  BlockLeft, 
  BlockRight, 
  BlockFull
} from '../App/styles';

import ImgFlowListing from './images/Flow Listing.png';
import ImgFlowMap from './images/Flow Map.png';
import ImgShowroom from './images/made-design-showroom.jpg';

interface IFlowMapProps {
  children ?: React.ReactNode
}

export const data : IChapterData = {
  title : "Flow map",
  id : "flow-map"
}

const FlowMap : React.FC<IFlowMapProps> = ({ children }) => {

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

      <BlockRight>
        <p><b>It is a map of the product or the feature we are creating.</b> Not every feature needs a map, but it can help to avoid some mistakes and simplify the next step of creation (Wireframes/UI).</p>
        <p>With the user flow, we have some tram lines for the several paths that the user can take, but it isn’t detailed enough on the content and interaction specifics. By copying the user flow and expanding in detail each node, we end up with a blueprint of our product/feature.</p>
      </BlockRight>

      <BlockLeft>
        <h3>Content</h3>
        <p>What the user needs to read or to do, to complete a goal. A page or a screen is made of content, page title, pictures, text, buttons and navigation. We aim to add all the possible nodes required by the user, even if that means we have too much content for one context. No need to worry because, in every step of the design process (wireframes, UI, prototype), we aim to simplify and cut every unnecessary item and since we are following the rules of the flow, we put in order all content from top to bottom by the level of importance, which will help us to decide what is important in the next design step.</p>
      </BlockLeft>

      <BlockRight>
        <h3>Context</h3>
        <p>What is the current goal of the user at that stage? A page or screen is a context. When we use a popup, for example, we don’t want the user to lose the context they are currently in, the page underneath the popup.</p>
        <p>When the user arrives at a product page, they expect to get all the information on the product. But too much information is not helpful, it gets confusing to a user, so we divide the context by using tabs or some sort of navigation, that will allow simplifying the amount of content we show to the user.</p>
      </BlockRight>

      <BlockLeft>
        <img src={ImgFlowMap} alt="Screenshot of a flow map"/>
        <h3>The bones</h3>
        <p><b>Like a sculptor working on a new piece,</b> the size of the sculpture is dependent on the size of the original rock and by trimming down the excessive parts of the rock, the sculptor starts to define the shape and volume of the art piece, leaving the details to the end, which will turn a rock to art. The rock is our flow map, the trimming is our wireframes and the detailing is the UI.</p>
        <p>Our goal at this point is to create a big enough rock for us to trim it down, so we aim to get all the info the user needs: pictures, videos, texts, titles, buttons, banners, etc...</p>
      </BlockLeft>

      <BlockRight>
        <img src={ImgShowroom} alt="A made.com person using the large screen app at the soho showroom"/>
        <h3>The skin</h3>
        <p>The visual and interaction processes will become quicker and smarter. By abstracting content from visual, we have a period where we think about the the problem and after, we have a period to evaluate what works well together and what makes sense visually. We always cut things down at each stage of designing and the last step is always the absolute truth. As soon as we have wireframes, we don’t need to update the map with changes, because the wireframes are the truth, we only use the map to help us make decisions. Always move forward!</p>
      </BlockRight>

      <BlockFull>
        <img src={ImgFlowListing} alt="Flow of a listing page"/>
        <h3>Type of nodes</h3>
      </BlockFull>

      <BlockLeft>
        <p>The goal of a node is to quickly deliver a message with a mere glance.<br/>
          When it makes sense, I use icons to easily identify specific items like actions or information. Also, I use bold on main nodes or components and I write the type in capitals before important nodes like SCREEN, PAGE, ACTION.</p>
        <p>This is were things get messy, it gets huge and redundant quickly.</p>
      </BlockLeft>

      <BlockRight>
        <p>I tend to create at the first level, the main screens/pages and components that are used in multiple places like a menu.</p>
        <p><b>“…” node,</b> is a way to declutter and simplify. It means that the flow continues but it was already defined in a different place.</p>
      </BlockRight>

      {children}
    </Page>
  );
}

export default FlowMap;