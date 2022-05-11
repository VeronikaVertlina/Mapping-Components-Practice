import React from "react";
import Emoji from "./Emoji";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emojiIMG} />
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Term;
