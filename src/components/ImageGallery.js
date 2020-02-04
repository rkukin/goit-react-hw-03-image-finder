import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ImageGalleryItem from "./ImageGalleryItem";

const ImageGrid = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export default function ImageGallery({images})
{
  return (
    <ImageGrid>
      <ImageGalleryItem images={images} />
    </ImageGrid>
  )
}

ImageGallery.propType = PropTypes.arrayOf(
);