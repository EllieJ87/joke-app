import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function togglePunchline() {
    setIsShown(prevShow => !prevShow)
  }

  return (
    <div className="joke-container">
      {props.setup && <h3 className="joke-setup">{props.setup}</h3>}
      {isShown && <p className="joke-punchline">"{props.punchline}"</p>}
      <button onClick={togglePunchline} className="joke-button">{isShown ? "Hide" : "Show"} Punchline</button>
      {/* <hr /> */}
    </div>
  )
}