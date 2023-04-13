import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCV } from "../../store/CVSlice";
import CVList from "../CVList/CVList";
import Loader from "../Loader/Loader";
import "./CV.module.scss";

// const CV: React.FC = (): JSX.Element => {

const CV: React.FC<any> = ({ title }): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCV());
  }, [dispatch]);

  useEffect(() => {
    document.title = title;
  });

  const { CVjson, loading, error } = useSelector((state: any) => state.CV);
  return (
    <>
      {loading ? <Loader /> : error ? <p>{error}</p> : <CVList data={CVjson} />}
    </>
  );
};

export default CV;
