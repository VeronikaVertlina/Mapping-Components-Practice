import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";
import Heading from "./Heading";

function createTerm(emojipedia) {
  return (
    <Term
      key={emojipedia.id}
      emojiIMG={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{emojipedia.map(createTerm)}</dl>
    </div>
  );
}

export default App;
