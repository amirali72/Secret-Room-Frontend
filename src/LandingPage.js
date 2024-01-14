import React from 'react'
import image2 from './imgs/1.jpg';

const LandingPage = () => {
  return (
    <div>
        <div className="content max-width m-auto">
            <div className="con-left">
                <h2>
                Safeguarding Whispers, Unveiling Stories.
                </h2>
                <p>
                Unlock the Vault of Whispers: Where Secrets Find Sanctuary and Stories Remain Unveiled.
                </p>
            </div>
            <div className="con-right">
                <img src={image2} alt="err"/>
            </div>
        </div>
        <div className="article center max-width m-auto">
            <h2> 🤐 SOME SECRETS 🤐 </h2>
        </div>
    </div>
  )
}

export default LandingPage
