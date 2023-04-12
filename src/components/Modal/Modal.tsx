import * as React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import "./Modal.scss";
import Icon from "../Icon/Icon";

interface IModalProps {
  visible: boolean;
  content: JSX.Element | JSX.Element[];
  onClose: () => void;
}
const Modal = (props: IModalProps) => {
  const { visible, content, onClose } = props;
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
            <Icon
              classname="icon-close"
              text="Esc"
              onClick={onClose}
              size="iconsize-base"
              color="icons-dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};
export default Modal;
