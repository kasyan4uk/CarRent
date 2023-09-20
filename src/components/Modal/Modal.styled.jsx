import styled from 'styled-components';
import closeModal from '../../img/CloseModal.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 45px 37px 40px 32px;
  max-width: 472px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const CloseModalIcon = styled.div`
  background-image: url(${closeModal});
  width: 24px;
  height: 24px;
  cursor: pointer;
`;