import * as React from "react";
import "./Icon.scss";

interface IconProps {
  classname: stylename;
  text?: string | null;
  onClick?: (e: any) => void;
}

type stylename =
  | "icon-close"
  | "icon-trash"
  | "icon-email"
  | "icon-github"
  | "icon-linkedin"
  | "icon-info"
  | "icon-location"
  | "icon-phone"
  | "icon-telegram"
  | "icon-home"
  | "icon-edit"
  | "icon-circle-right"
  | "icon-circle-down"
  | "clear-btn";

const Icon: React.FC<IconProps> = ({
  classname,
  text,
  onClick,
}): JSX.Element => {
  return (
    <div className="icon">
      <i className={classname} onClick={onClick}></i>
      {text ? <span>{text}</span> : null}
    </div>
  );
};

export default Icon;
