import { useEffect, useState } from "react";
import * as React from "react";
import withListLoading from "../../HOC/withListLoading";
import CVList from "../CVList/CVList";
import "./CV.module.scss";

interface ICV {
  loading?: boolean;
  data?: [] | null;
  error?: boolean;
  isLoading?: boolean;
  title?: string;
}

const CV: React.FunctionComponent = ({ title }: ICV) => {
  // const { title }: { title: string } = props;

  const ListLoading = withListLoading(CVList);
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
    document.title = "ddd";
    // document.title = title;
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
