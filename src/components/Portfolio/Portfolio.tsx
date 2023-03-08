import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Portfolio.module.scss";
import Post from "../Post/Post";
import { fetchPF } from "../../store/PFSlice";
// import CV from "./components/CV/CV";
// import Modal from "../Modal/Modal";

const Portfolio = ({ title }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    dispatch(fetchPF());
  }, [dispatch]);

  // const handleClick = (value) => setData([value, ...data]);

  // const removePost = (item) => {
  //   const newPost = data.filter((post) => {
  //     return post !== item;
  //   });
  //   setData(newPost);
  // };

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
      <div className="container portfolio">
        {/* <button onClick={openModal} className="portfolio__addbtn">
          Добавить работу
        </button> */}
        <Post />
      </div>
      {/* <Modal arr={handleClick} showModal={showModal} hideModal={hideModal} /> */}
    </>
  );
};

export default Portfolio;
