import React, {Component} from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar";

const Application = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export default class App extends Component {

  state = {
    searchQuery: '',
    images: [
      // {id, webformatURL, previewURL}
      ],
    page: 1,
    isLoading: false,
    isModalOpened: false
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
      window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onSearchFormSubmit(query){
    this.setState({
      images: [],
      searchQuery: query,
      page: 1,
    });
  };

  onLoadMore(){};

  onModalOpened(){};

  onModalClose(){};

  render() {

    return(
      <Application>
        <Searchbar onFormSubmit = {this.onSearchFormSubmit}/>
      </Application>
    )
  }


}
