import * as React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Portfolio.scss";
import WorkList from "../WorkList/WorkList";
import Modal from "../Modal/Modal";
import { fetchPF } from "../../store/PFSlice";
import AdWork from "../AddWork/AddWork";
import Loader from "../Loader/Loader";

interface IPortfolio {
  title: string;
}
const Portfolio = (props: IPortfolio): JSX.Element => {
  const { title } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    dispatch(fetchPF());
  }, [dispatch]);

  const { PFjson, loading, error } = useSelector((state: any) => state.PF);

  const onClose = () => setModal(false);
  const [isModal, setModal] = useState(false);

  return (
    <>
      <div className="portfolio">
        <button className="portfolio-btn" onClick={() => setModal(true)}>
          Добавить работу
        </button>
        <Modal
          visible={isModal}
          content={<AdWork title="Добавить работу" textbtn="Добавить" />}
          onClose={onClose}
        />

        <div className="container">
          {loading ? (
            <Loader />
          ) : error ? (
            <p>{error}</p>
          ) : (
            PFjson.map((item: any, index: any) => (
              <WorkList key={index} item={item} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Portfolio;
