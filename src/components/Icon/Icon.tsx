import * as React from "react";
import PropTypes from "prop-types";
import "./Icon.scss";

interface IconProps {
  classname: stylename;
  size: iconsize;
  color: iconcolor;
  text?: string | null;
  onClick?: (e: any) => void;
  link?: string;
}
type iconsize = "iconsize-xs" | "iconsize-sm" | "iconsize-base" | "iconsize-lg";
type iconcolor = "icons-white" | "icons-dark";

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
  | "icon-webpage"
  | "icon-circle-right"
  | "icon-circle-down"
  | "clear-btn";

/**
 * Компонент Иконки
 * @param props
 * @returns
 */

const Icon = (props: IconProps) => {
  const { classname, text, size, color, onClick, link } = props;
  return (
    <div className="icon">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <i className={`${classname} ${size} ${color}`} onClick={onClick} />
        </a>
      ) : (
        <>
          <i className={`${classname} ${size} ${color}`} onClick={onClick} />
          {text ? <span className="icon-text">{text}</span> : null}
        </>
      )}
    </div>
  );
};

Icon.propTypes = {
  classname: PropTypes.oneOf<stylename>([
    "clear-btn",
    "icon-circle-down",
    "icon-circle-right",
    "icon-close",
    "icon-edit",
    "icon-email",
    "icon-github",
    "icon-home",
    "icon-info",
    "icon-linkedin",
    "icon-location",
    "icon-telegram",
    "icon-trash",
    "icon-webpage",
    "icon-phone",
  ]).isRequired,
  text: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf<iconsize>([
    "iconsize-base",
    "iconsize-lg",
    "iconsize-sm",
    "iconsize-xs",
  ]).isRequired,
  color: PropTypes.oneOf<iconcolor>(["icons-white", "icons-dark"]).isRequired,
};
Icon.defaultProps = {
  classname: "icon-close",
  text: "",
  link: "",
  size: "iconsize-xs",
  color: "icons-white",
};

export default Icon;
