import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal';
import { ModalProps } from './ModelProps.interface';

let instance!: any;
const domTargetId = 'modal';

export const useModal = (props: ModalProps) => {
  if (!instance) {
    let domTarget = document.getElementById(domTargetId);
    if (!domTarget) {
      domTarget = document.createElement('div');
      domTarget.setAttribute('id', domTargetId);
      document.body.appendChild(domTarget);
    }
    const reactModal = React.createElement(Modal, props, null);
    instance = ReactDOM.render(reactModal, domTarget);
  }
  instance.updateProps(props);
  return instance;
};
