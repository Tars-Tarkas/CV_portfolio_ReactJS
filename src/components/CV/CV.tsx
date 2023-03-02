import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCV } from "../../store/CVSlice";
import CVList from "../CVList/CVList";
import "./CV.module.scss";

const CV: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCV());
  }, [dispatch]);

  return (
    <>
      <CVList />
    </>
  );
};

export default CV;
