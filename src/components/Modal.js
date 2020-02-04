import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export default function Modal()
{
  return (
    <Overlay >
      <ModalWindow className="Modal">
        <img src="" alt="" />
      </ModalWindow>
    </Overlay>
  )
}