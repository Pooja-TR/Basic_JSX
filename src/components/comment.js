import React, { Component } from 'react';

const comment =(props) => {
        return(
            <div className="comment">
        <a href="/" className="avatar">
          < img alt="avatar" style={{backgroundColor:"grey"}} src={props.userDp}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="data">{props.timeAgo}</span>
          </div>
          <div className="text">{props.commentDesc}</div>
        </div>
      </div>
    );
}

export default comment;