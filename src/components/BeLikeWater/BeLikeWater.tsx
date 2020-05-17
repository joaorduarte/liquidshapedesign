import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';

import { useAppContext } from '../App/App';
import { IChapterData } from '../../interfaces/Chapter';
import {
  Page, BlockLeft, Block
} from '../App/styles';

interface IBeLikeWaterProps {
	children ?: React.ReactNode
}

export const data : IChapterData = {
	title : "Be like water",
	id : "be-like-water"
}

const BeLikeWater : React.FC<IBeLikeWaterProps> = ({ children }) => {

	const {
		appWidth, addToTableOfContents
	} = useAppContext();

	const [mounted, setMounted] = useState(false);

	const [showVideo, setShowVideo] = useState(false);
	const [vidWidth, setVidWidth] = useState();
	const [vidHeight, setVidHeight] = useState();
	const [vidMarginTop, setVidMarginTop] = useState();


	useEffect(() => {
    if (!mounted && addToTableOfContents) {
    	addToTableOfContents(data);
      setMounted(true);
    }
  }, [mounted, addToTableOfContents, setMounted]);


	useEffect(() => {
		if (appWidth) {
			const ratio : number = 4/3;
			let widthVal : number = 0;

			if (appWidth < 768) {
				widthVal = appWidth;
				setVidMarginTop("30px");

			} else if (appWidth < 1060) {
				widthVal = appWidth;
				setVidMarginTop("30px");

			} else {
				widthVal = appWidth * 0.84 / 2;
				setVidMarginTop("10px");
			}

			setVidWidth(widthVal);
			setVidHeight(widthVal / ratio);

			if (!showVideo) setShowVideo(true);
		}
	}, [appWidth, setVidWidth, setVidHeight, setVidMarginTop, showVideo, setShowVideo]);

 
	return (
		<Page id={data.id}>
    	<BlockLeft>
    		<h2>{data.title}</h2>
	      <p>Bruce Lee was my childhood hero.<br/>
	        In the 80s, growing up in Portugal, you would see the great Asian masters continuously on the tv. The confidence and precision of his movements were impressive, while his interviews showed a confident man who lived life as he fought, by his code and philosophy. He has plenty of great quotes but this message stayed with me from those days until now.
	      </p>
	      <p>This is the base of <b>how I design.</b></p>
	     </BlockLeft>

      {showVideo && (
      	<Block>
	      	<div style={{ 
	      		margin : "auto",
	      		marginTop : vidMarginTop
	      	}}>
		      	<YouTube
		      		id="vid"
		      		videoId="cJMwBwFj5nQ" 
		    			opts={{
		  					width: vidWidth.toString(),
		    				height: vidHeight.toString()
		  				}} 
		    		/>
	    		</div>
	    	</Block>
      )}

      {children}
    </Page>
	);
}

export default BeLikeWater;