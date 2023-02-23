import React, { useEffect, useState } from "react";
import withListLoading from "../../HOC/withListLoading";
import CVList from "../CVList/CVList";
import "./CV.module.scss";

const CV = ({ title }) => {
  const ListLoading = withListLoading(CVList);
  const [readFile, setReadFile] = useState({
    loading: false,
    data: null,
  });
  const [error, SetError] = useState(false);

  useEffect(() => {
    setReadFile({ loading: true, error: true });
    const jsonfile = "./cv.json";
    fetch(jsonfile)
      .then((res) => res.json())
      .then((data) => {
        setReadFile({ loading: false, data: data });
      })
      .catch((e) => SetError(e));
  }, [setReadFile]);

  useEffect(() => {
    document.title = title;
  });

  return (
    <ListLoading
      error={error}
      isLoading={readFile.loading}
      data={readFile.data}
    />
  );
};

export default CV;
