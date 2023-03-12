import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Portfolio.scss";
import WorkList from "../WorkList/WorkList";
import Modal from "../Modal/Modal";
import { fetchPF } from "../../store/PFSlice";
import AdWork from "../AddWork/AddWork";

const Portfolio: React.FC<any> = ({ title }): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    dispatch(fetchPF());
  }, [dispatch]);

  const onClose = () => setModal(false);
  const [isModal, setModal] = useState(false);

  // const handleClick = (value) => setData([value, ...data]);

  // const openModal = () => SetShowModal(true);

  // const hideModal = () => SetShowModal(false);

  // const handleKeyPress = (e) => {
  //   if (e.keyCode === 27) {
  //     SetShowModal(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyPress, false);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress, false);
  //   };
  // }, []);

  return (
    <>
      <div className="portfolio">
        <button className="portfolio__addbtn" onClick={() => setModal(true)}>
          Добавить работу
        </button>
        <Modal visible={isModal} content={<AdWork />} onClose={onClose} />
        <div className="container">
          <WorkList />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
