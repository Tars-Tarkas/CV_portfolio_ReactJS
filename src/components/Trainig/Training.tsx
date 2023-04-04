import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTraining } from "../../store/traininSlice";
import "./Training.scss";

const Training: React.FC<any> = ({ title }): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = title;
  });
  useEffect(() => {
    dispatch(fetchTraining());
  }, [dispatch]);

  const { trainingJson, loading } = useSelector((state: any) => state.training);

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default Training;
