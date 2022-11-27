import React, { useState, useEffect, Fragment } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Portfolio.scss";
import Post from "../Post/Post";
// import CV from "./components/CV/CV";
// import NavBar from "./components/NavBar/NavBar";
import Modal from "../Modal/Modal"


let postList = [
  {
    id: 1121324545,
    date: "10.10.2022",    
    title: "Первая опыт создания сайта — приложения на React JS",
    page: "https://tars-tarkas.github.io/CV_portfolio_ReactJS/",
    linkrep: "https://github.com/Tars-Tarkas/CV_portfolio_ReactJS",
    description: "На странице Резюме использовал Fetch для загрузки данных из локального JSON файла. \n В Портфолио классическое исполнение ToDo List`а.\n Данный проект постоянно изменяется по мере освоения новыйх учебных материалов по ReactJS, осваивается на практике тот или иной подход в реализации. Практический опыт в купе с полученными знаниями повышает мой опыт в разработке.\n Буду благодарен любой обратной связи по этому проекту."    
  },
  {
    id: 112542354235,
    date: "22.11.2022",    
    title: "Тестовое задание от Oxem Studio, на позицию Фронтенд-разработчик",
    page: "https://tars-tarkas.github.io/Oxem-calc/",
    linkrep: "https://github.com/Tars-Tarkas/Oxem-calc",
    description: "Задание: сверстать калькулятор лизинга авто Макеты.\n "    
  },
];

const Portfolio = ({title}) => {  
  const [data, setData] = useState(postList); 
  const [showModal, SetShowModal] = useState(false)

 
  // const [editingText, setEditingText] = React.useState("");

  useEffect(() => {
    document.title = title;
  });  

  const handleClick = (value) => setData([value, ...data]);
  
  // function submitEdits(id) {
  //   const updatedTodos = [...data].map((data) => {
  //     if (data.id === id) {
  //       data.text = editingText;
  //     }
  //     return data;
  //   });
  //   setData(updatedTodos);    
  // }

  const removePost = (item) =>{
    const newPost = data.filter((post) =>{
      return post !== item;
    })
    setData(newPost)
  }

  const openModal = () => SetShowModal(true);
  
  const hideModal = () => SetShowModal(false);

  const handleKeyPress = (e) => {
    if (e.keyCode === 27){
      SetShowModal(false)
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, []);
  

  return (
    <Fragment>     
      <div className="container portfolio">
          <button onClick={openModal} className="portfolio__addbtn">Добавить работу</button>
          <Post data={data} removePost={removePost}/>   
      </div>                 
      <Modal arr={handleClick} showModal={showModal} hideModal={hideModal} />          
    </Fragment>
  )
 
};



export default Portfolio;
