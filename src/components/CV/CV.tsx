import React, { useEffect, useState } from "react";
import { WithListLoading } from "../../HOC/withListLoading";
import { CVList } from "../CVList/CVList";
import "./CV.module.scss";
import { ICV } from "../../types/data";

function CV({ title }: { title: string }) {
  const ListLoading = WithListLoading(CVList);
  const [readFile, setReadFile] = useState<ICV>({
    loading: false,
    data: null,
    error: false,
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
}

export { CV };
