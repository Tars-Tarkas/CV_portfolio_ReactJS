import * as React from "react";
import { useEffect } from "react";
import "./Training.scss";

const Training: React.FC<any> = ({ title }): JSX.Element => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default Training;
