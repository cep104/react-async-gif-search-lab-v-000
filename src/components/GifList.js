import React from "react";
//pass in the props you can either deconstruct it like {gifs} OR you can pass it through as GifList(props) then use this.props.gifs.
function GifList({ gifs }) {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.url}>
          <img src={gif.url} alt="gif" />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
