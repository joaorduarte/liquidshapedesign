import React, { 
  createContext, 
  useEffect,
  useContext, 
  useState, 
  useCallback,
  useRef 
} from 'react';

import { createGlobalStyle } from 'styled-components';

import { IChapterData } from '../../interfaces/Chapter';

import BeLikeWater from '../BeLikeWater/BeLikeWater';
import EmptyYourMind from '../EmptyYourMind/EmptyYourMind';
import EnterTheFlows from '../EnterTheFlows/EnterTheFlows';
import ChooseYourTool from '../ChooseYourTool/ChooseYourTool';
import ProblemDeconstruction from '../ProblemDeconstruction/ProblemDeconstruction';
import Hypotheses from '../Hypotheses/Hypotheses';
import BecomingACup from '../BecomingACup/BecomingACup';
import FlowMap from '../FlowMap/FlowMap';
import Prototype from '../Prototype/Prototype';
import Thanks from '../Thanks/Thanks';

import {
  AppContainer,
  AppColors,
  AppTitles,
  AppLogo,
  AppHeader
} from './styles';

import SvgLogo1 from './images/Sq1.svg';
import SvgLogo2 from './images/Sq2.svg';
import SvgLogo3 from './images/Sq3.svg';

import AnchorLink from 'react-anchor-link-smooth-scroll';


export interface IAppContext {
  appWidth ?: number,
  appHeight ?: number,
  tableOfContentsItems ?: IChapterData[],
  addToTableOfContents ?: (dataVal: IChapterData) => void
};

const AppContext = createContext<IAppContext>({});

export const useAppContext = () => {
  return useContext(AppContext);
}

const GlobalStyle = createGlobalStyle`
  html {
    text-rendering: optimizeLegibility;
  }

  body {
    color: #22231E;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Raleway" ,sans-serif;
    font-weight : 400;
  }

  p, li {
    line-height : 1.8em;
    letter-spacing : 0.05em; 
    margin : 0;
    font-weight : 400;
    font-size : 0.9em;
    max-width : 700px;

    b {
      font-weight : 700;
    }

    @media (min-width: 768px) {
      font-size : 1em;
    }
  }

  ul {
    margin : 0;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family : 'Roboto', serif;
    font-weight : 300;
    letter-spacing : 0.05em;
    line-height : 1.5em;
    margin : 0;
    padding-left : -4px;
  }


  h1 {
    font-size : 2.4em;
    line-height : 1em;
    letter-spacing : 0.15em;
    text-transform : uppercase;
    font-weight : 100;
  }


  h2 {
    color: ${AppColors.brand2};
    font-size : 2.3em;

    @media (min-width: 1060px) {
      font-size : 2.4em;
    }
  }


  h3 {
    color: ${AppColors.brand3};
    font-size : 1.9em;

    @media (min-width: 1060px) {
      font-size : 2em;
    }
  }
`;


export const App : React.FC<{}> = () => {

  const [mounted, setMounted] = useState(false);

  const containerDom = useRef<HTMLDivElement>(null);

  const [appWidth, setAppWidth] = useState<number>(0);
  const [appHeight, setAppHeight] = useState<number>(0);
  const [tableOfContentsItems, setTableOfContentsItems] = useState<IChapterData[]>([]);

  const updateAppSize = useCallback(() => {
    if (containerDom && containerDom.current) {
      setAppWidth(containerDom.current.offsetWidth);
      setAppHeight(containerDom.current.offsetHeight);
    }
  }, [setAppWidth, setAppHeight]);


  const addToTableOfContents = useCallback((dataVal : IChapterData) => {
    const tableOfContentsItemsVal = tableOfContentsItems;
    tableOfContentsItemsVal.push(dataVal);
    setTableOfContentsItems(tableOfContentsItemsVal);
  }, [tableOfContentsItems, setTableOfContentsItems]);


  useEffect(() => {
    if (!mounted) {
      updateAppSize();
      setMounted(true);
    }
  }, [mounted, updateAppSize]);


  useEffect(() => {
    if (containerDom && containerDom.current) {
      const domElement = containerDom.current;

      domElement.addEventListener("resize", updateAppSize);
      window.addEventListener("resize", updateAppSize);

      return () => {
        if (domElement) {
          domElement.removeEventListener("resize", updateAppSize);        
          window.removeEventListener("resize", updateAppSize);
        }
      };
    }
  });

  return (

    <AppContext.Provider
      value={{
        appWidth, appHeight,
        tableOfContentsItems, addToTableOfContents
      }}
    >

      <div style={{
        position : "fixed",
        display : "none"
      }}>
        <ul>
          {tableOfContentsItems.map((dataVal : IChapterData) => (
            <li key={dataVal.id}><AnchorLink href={`#${dataVal.id}`}>{dataVal.menuTitle || dataVal.title}</AnchorLink></li>
          ))}
        </ul>
      </div>

      <AppContainer 
        ref={containerDom}
      >

        {(appWidth && appWidth < 768 ) ? (
          <AppHeader>
            <AppLogo>
              <div>
                <img src={SvgLogo1} alt="Logo Liquid" />
                <h1 style={{ color : AppColors.brand1 }}>Liquid</h1>
              </div>
              <div>
                <img src={SvgLogo2} alt="Logo Shape" />
                <h1 style={{ color : AppColors.brand2 }}>Shape</h1>
              </div>
              <div>
                <img src={SvgLogo3} alt="Logo Design" />
                <h1 style={{ color : AppColors.brand3 }}>Design</h1>
              </div>
            </AppLogo>
          </AppHeader>
        ) : (
          <AppHeader>
            <AppLogo>
              <img src={SvgLogo1} alt="Logo Liquid" />
              <img src={SvgLogo2} alt="Logo Shape" />
              <img src={SvgLogo3} alt="Logo Design" />
            </AppLogo>
            <AppTitles>
              <h1 style={{ color : AppColors.brand1 }}>Liquid</h1>
              <h1 style={{ color : AppColors.brand2 }}>Shape</h1>
              <h1 style={{ color : AppColors.brand3 }}>Design</h1>
            </AppTitles>
          </AppHeader>
        )}

        <BeLikeWater />

        <EmptyYourMind />

        <EnterTheFlows />

        <ChooseYourTool />

        <ProblemDeconstruction />

        <Hypotheses />

        <BecomingACup />

        <FlowMap />

        <Prototype />

        <Thanks />

      </AppContainer>

      <GlobalStyle/>

    </AppContext.Provider>
  );
}

export default App;
