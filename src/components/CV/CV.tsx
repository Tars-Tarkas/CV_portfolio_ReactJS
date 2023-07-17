import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCV } from "../../store/CVSlice";
import CVList from "../CVList/CVList";
import Loader from "../Loader/Loader";
import "./CV.module.scss";
import PropTypes from "prop-types";

interface Ititle {
  title: string;
}

const CV = ({ title }: Ititle) => {
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
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <CVList props={CVjson} />
      )}
    </>
  );
};

CV.propTypes = {
  title: PropTypes.string.isRequired,
};
export default CV;
