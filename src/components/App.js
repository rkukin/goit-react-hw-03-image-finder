import React, {Component} from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar";

const Application = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

// API_KEY = 14121213-0294698cbddd3de5cddc95af0
// URL = https://pixabay.com/api/?q={SearchQuery}&page={page}&key={API_KEY}&image_type=photo&orientation=horizontal&per_page=12

export default class App extends Component {

  render() {

    return(
      <Application>
        <Searchbar/>
      </Application>
    )
  }


}
