import * as React from "react";
import "./Icon.scss";

interface IconProps {
  classname: stylename;
  text?: string | null;
  onClick?: (e: any) => void;
  link?: string;
}

type stylename =
  | "icon-close"
  | "icon-trash"
  | "icon-email"
  | "icon-github"
  | "icon-github-dark"
  | "icon-linkedin"
  | "icon-info"
  | "icon-location"
  | "icon-phone"
  | "icon-telegram"
  | "icon-home"
  | "icon-edit"
  | "icon-webpage"
  | "icon-webpage-dark"
  | "icon-circle-right"
  | "icon-circle-down"
  | "clear-btn";

const Icon: React.FC<IconProps> = ({
  classname,
  text,
  onClick,
  link,
}): JSX.Element => {
  return (
    <div className="icon">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <i className={classname} onClick={onClick} />
        </a>
      ) : (
        <>
          <i className={classname} onClick={onClick} />
          {text ? <span className="icon-text">{text}</span> : null}
        </>
      )}
    </div>
  );
};

export default Icon;
