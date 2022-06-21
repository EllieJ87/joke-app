import React from "react";
import Joke from "./Joke";

import jokesData from "../jokesData"

export default function JokeApp() {
  const jokeElement = jokesData.map(joke => {
    return (
      <Joke 
        key={joke.id}
        id={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )
  })
  return (
    <div className="container">
      <h1 className="header">The Jokes Data</h1>
        {jokeElement}
    </div>
  )
}