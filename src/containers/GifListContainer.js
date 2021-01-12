import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
export default class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  getGifs = (query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((response) => response.json())
      .then((gifData) => {
        // console.log(gifData);
        //map over the gifData.data OR {data} same thing
        this.setState({
          gifs: gifData.data.map((gif) => ({ url: gif.images.original.url })),
        });
        // console.log(this.state.gifs);
        //in read me it shows you what url you want.
        // sets up an array of gif objects with a key of url pointed to the url by going through the api and grabbing that specific URL. to get to the URL go to website in fetch request or look at console.log(gifData) same results.
      });
  };

  componentDidMount() {
    this.getGifs();
  }
  render() {
    return (
      <div>
        <GifSearch getGifs={this.getGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
