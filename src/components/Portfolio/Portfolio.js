import React, { useState, useEffect } from "react";
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
    title: "Портфолио",
    page: "https://www.page.page",
    linkrep: "https://www.link.rep",
    description: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."    
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
    <div>
      <div className="portfolio">
          <button onClick={openModal} className="portfolio__addbtn">Добавить работу</button>
      </div>        
      <Modal arr={handleClick} showModal={showModal} hideModal={hideModal} />    
      <Post data={data} removePost={removePost}/>      
    </div>
  )
 
};



export default Portfolio;
