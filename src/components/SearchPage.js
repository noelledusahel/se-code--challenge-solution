import React from 'react';


export default class SearchPage extends React.Component {

  state = {
    searchImage: {},
    error: undefined
  }

  handleSearch = (e) => {
    e.preventDefault();
    const input  = e.target.elements.searchInput.value.trim()
    this.fetchSearch(input)
  }

  validateInput = (input) => {
    if(input >= 1 && input <= 2219) {
      this.setState(() => ({ error: undefined }));
      return true
    } else {
      const error = 'please input number between 1-2219'
      this.setState(() => ({ error: error }));
    }
  }

  fetchSearch = (entry) => {
    const isValid = this.validateInput(entry)
    if (isValid) {
      fetch('https://xkcd.now.sh/?comic=' + entry)
        .then(response => response.json())
        .then((data) => {
          this.setState(() => ({
            searchImage: {
              imageUrl: data.img,
              alt: data.title,
              title: data.alt
          }
        }))
      })
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSearch}>
          <input
            type="text" className="searchInput" name="searchInput">
          </input>
          <button className="searchSubmit">Submit</button>
        </form>
        <img
          className="searchImage"
          src={this.state.searchImage.imageUrl}
          title={this.state.searchImage.alt}
          alt={this.state.searchImage.title}/>
        </div>
  )}
}
