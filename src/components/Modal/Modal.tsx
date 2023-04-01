import * as React from "react";
import { useEffect } from "react";
import "./Modal.scss";
import Icon from "../Icon/Icon";

interface ModalProps {
  visible: boolean;
  content: JSX.Element | JSX.Element[];
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({
  visible = false,
  content = "",
  onClose,
}) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });
  if (!visible) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="container">
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">{content}</div>
          <div className="modal-icon">
            <Icon classname="icon-close" text="Esc" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
