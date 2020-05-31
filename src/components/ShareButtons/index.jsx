import React from 'react'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, PinterestIcon, PinterestShareButton } from 'react-share';
import './styles.scss'

const ShareButtons = ({ url = "http://google.com", quizImage = "", iconSize = 45, pinterest = true }) => {
  return (
    <div className="share-buttons">
      <FacebookShareButton url={url}>
        <span>
          <FacebookIcon size={iconSize} round={true} />
        </span>
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <span>
          <TwitterIcon size={iconSize} round={true} />
        </span>
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <span>
          <WhatsappIcon size={iconSize} round={true} />
        </span>
      </WhatsappShareButton>
      {
        pinterest && (
          <PinterestShareButton url={url} media={quizImage}>
            <span>
              <PinterestIcon size={iconSize} round={true} />
            </span>
          </PinterestShareButton>
        )
      }

    </div>
  )
}
export default ShareButtons;