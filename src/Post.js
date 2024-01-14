import React from 'react'
import './css/mobile.css';

const Post = ({_id, title, summary}) => {
  return (
    <>
    <div className="article main-box max-width m-auto">
        <div className="box">
            <div className="boxtext">
                <h3> {title} </h3>
                <span className='summary'>
                {summary}
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Post
