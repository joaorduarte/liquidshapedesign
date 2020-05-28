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
import Menu from '../Menu/Menu';
import Share from '../Share/Share';

import {
  AppContainer,
  AppColors,
  AppTitles,
  AppLogo,
  AppHeader,
  AppIntro,
  AppEnd
} from './styles';

import { GlobalStyleCss } from './globalStyle';

import SvgLogo1 from './images/Sq1.svg';
import SvgLogo2 from './images/Sq2.svg';
import SvgLogo3 from './images/Sq3.svg';


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


export const appUrl : string = "https://liquidshapedesign.com/";
export const appTitle : string = "Liquid Shape Design";
export const appQuote : string = "Creating a layer of abstraction in the design process to think the problem through";


const GlobalStyle = createGlobalStyle`
  ${GlobalStyleCss}
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

      <Menu breakpoint={350}/>

      <AppContainer 
        ref={containerDom}
        id="top"
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

        <AppIntro>
          <h2>{ appQuote }</h2>
          <Share />
          <a href="https://www.linkedin.com/in/joão-duarte-7a4a6910">by JD</a>
        </AppIntro>

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

      <AppEnd />

      <GlobalStyle/>

    </AppContext.Provider>
  );
}

export default App;
