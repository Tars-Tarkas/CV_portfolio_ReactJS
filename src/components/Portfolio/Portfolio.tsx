import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Portfolio.scss";
import WorkList from "../WorkList/WorkList";
import Modal from "../Modal/Modal";
import { fetchPF } from "../../store/PFSlice";
import AdWork from "../AddWork/AddWork";
import Loader from "../Loader/Loader";

const Portfolio: React.FC<any> = ({ title }): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    dispatch(fetchPF());
  }, [dispatch]);

  const { PFjson, loading } = useSelector((state: any) => state.PF);

  const onClose = () => setModal(false);
  const [isModal, setModal] = useState(false);

  return (
    <>
      <div className="portfolio">
        <button className="portfolio__addbtn" onClick={() => setModal(true)}>
          Добавить работу
        </button>
        <Modal
          visible={isModal}
          content={<AdWork title="Добавить работу" />}
          onClose={onClose}
        />

        <div className="container">
          {loading ? (
            <Loader />
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

export default Portfolio;
