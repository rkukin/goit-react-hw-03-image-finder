import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageGallery = styled.ul`
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

export default function ImageGallery()
{
  return (
    <ImageGallery>
      <!-- Набор <li> с изображениями -->
    </ImageGallery>
  )
}