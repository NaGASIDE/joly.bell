import React, { FC, useMemo } from "react";
import ReactDOM from "react-dom";
import '../Header/ChangeLanguage/style.scss'

interface IModalProps {
  showModal: boolean;
  onClose: () => void;
  children: any;
}

export const Modal: FC<IModalProps> = ( {showModal, onClose, children } ) => {

  const el =  useMemo(() => document.getElementById('portal'), [])!;

  return (
    <>
      { showModal && (
        ReactDOM.createPortal(children, el)
      ) }
    </>
  )
}

