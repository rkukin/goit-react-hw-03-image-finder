import React, {Component} from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Modal from "./Modal";

import getImagesAPI from "../api/getImages"

const Application = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export default class App extends Component {

  state = {
    searchQuery: '',
    images: [],
    page: 0,
    isLoading: false,
    imgURL: null,
    error: null
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    const prevSearchQuery = prevState.searchQuery;
    const currentSearchQuery = this.state.searchQuery;

    if (prevSearchQuery !== currentSearchQuery) {
      this.fetchImages();
    }
  }

  onSearchFormSubmit = (query) => {
    this.setState({
      images: [],
      searchQuery: query,
      page: 1,
    });
  };

  onModalOpened = (imageURL) => {
  };

  onModalClose = () => {
  };

  fetchImages = () => {
    const {searchQuery, page} = this.state;

    this.setState({isLoading: true});

    getImagesAPI
      .fetchImages(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1
        })))
      .catch(error => this.setState({error}))
      .finally(() => this.setState({isLoading: false}));
  };

  render() {

    const {images, isLoading, error, imgURL} = this.state;

    return (
      <Application>
        <Searchbar onFormSubmit={this.onSearchFormSubmit}/>

        {error && (<p>{`Whoops, something went wrong: ${error.message}`}</p>)}

        {images.length > 0 && <ImageGallery images={images}/>}
        {isLoading && <Loader/>}
        {images.length > 0 && !isLoading && (
          <button type="button" onClick={this.fetchImages}>
            Load more
          </button>
        )}
        {imgURL && <Modal imageURL={imgURL}/>}
      </Application>
    )
  }


}
