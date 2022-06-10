import React from 'react';
import {__PlayingCard} from "./Interfaces";
import './Style.css';

const PlayingCard: React.FunctionComponent<__PlayingCard> = (props) => {
  return (
    <>
      <div className="playingCard">
        <div className="header">{props.value}</div>
        <div className="body">{props.suite}</div>
        <div className="footer">{props.value}</div>
      </div>
    </>
  )
}

export default PlayingCard;