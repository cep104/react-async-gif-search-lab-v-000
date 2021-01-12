import React from "react";

class GifSearch extends React.Component {
  state = {
    query: "",
  };

  handleOnChange = (event) => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    //pass the state query component
    this.props.getGifs(this.state.query);
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          name="query"
          //value will be what the query is
          value={this.state.query}
          onChange={this.handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default GifSearch;
