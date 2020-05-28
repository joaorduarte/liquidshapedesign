import React from 'react';

import {
  FacebookIcon,
  FacebookShareButton,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

import {
  ShareContainer,
  ShareIconSize
} from './styles';

import { 
  appUrl, appTitle, appQuote
} from '../App/App';


interface IShareProps {
  children ?: React.ReactNode
}


const Share : React.FC<IShareProps> = ({ children }) => {

  return (
    <ShareContainer>

      <LinkedinShareButton 
        url={appUrl}
        title={appTitle}
        summary={appQuote}
      >
        <LinkedinIcon size={ShareIconSize} round />
      </LinkedinShareButton>

      <FacebookShareButton
        url={appUrl}
        quote={appQuote}
      >
        <FacebookIcon size={ShareIconSize} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={appUrl}
        title={appQuote}
      >
        <TwitterIcon size={ShareIconSize} round />
      </TwitterShareButton>

      <WhatsappShareButton
        url={appUrl}
        title={appQuote}
        separator=":: "
      >
        <WhatsappIcon size={ShareIconSize} round />
      </WhatsappShareButton>

      <EmailShareButton
        url={appUrl}
        subject={appTitle}
        body={appQuote}
        separator={`

`}
      >
        <EmailIcon size={ShareIconSize} round />
      </EmailShareButton>

    </ShareContainer>
  );
}

export default Share;