import * as React from "react";
import "./Icon.scss";

interface IconProps {
  classname: string;
  text?: string | null;
  onClick?: (e: any) => {} | void;
}

const Icon: React.FC<IconProps> = ({
  classname,
  text,
  onClick,
}): JSX.Element => {
  return (
    <div className="icon">
      <i className={`icon-${classname}`} onClick={onClick}></i>
      {text ? <span>{text}</span> : null}
    </div>
  );
};

export default Icon;
