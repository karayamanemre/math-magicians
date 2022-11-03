import React from 'react';
import useFetch from '../useFetch';

function Joke() {
  const { data, loading, error, reFetch } = useFetch(
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart',
  );
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) console.log(error);
  return (
    <div className="quote-container">
      <section className="quote">
        <p className="quote-text">{data?.setup}</p>
        <p className="quote-author">
          {' '}
          <b>{data?.delivery}</b>
        </p>
      </section>
      <button className="quote-btn" onClick={reFetch}>
        New Joke
      </button>
    </div>
  );
}

export default Joke;
