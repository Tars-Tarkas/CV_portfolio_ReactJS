import * as React from "react";
import "./PageNotFound.scss";

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <div className="pagenotfound">
      <p className="pagenotfound-code">404</p>
      <p className="pagenotfound-text">page not found</p>
      <p className="pagenotfound-subtext">запрашиваемая страница не найдена</p>
    </div>
  );
};

export default PageNotFound;
