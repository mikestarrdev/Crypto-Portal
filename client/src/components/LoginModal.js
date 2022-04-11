import React from "react";
import styled from "styled-components";
import Login from "./Login";

const Modal = styled.div`
  display: ${(props) => (props.displayLoginModal ? "block" : "none")};
  /* display: block; */
  position: fixed;
  background: rgb(240 240 240);
  align-items: center;
  width: 50%;
  margin: auto;
  padding: 1rem;
  border: solid lightgray 1px;
  border-radius: 3px;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 50%);
  filter: blur(0px);
`;

const ModalComponents = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem;
`;

const CloseBtn = styled.div`
  display: block;
  align-items: right;
  float: right;
`;

function LoginModal({ user, displayLoginModal, setDisplayLoginModal }) {
  function handleCloseModal(e) {
    e.preventDefault();
    setDisplayLoginModal(false);
  }

  return (
    <Modal displayLoginModal={displayLoginModal}>
      <CloseBtn onClick={handleCloseModal}>🅇</CloseBtn>
      <ModalComponents>
        <Login />
      </ModalComponents>
    </Modal>
  );
}

export default LoginModal;
