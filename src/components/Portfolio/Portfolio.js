import React, { useState } from "react";
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

function Portfolio() {  
  const [data, setData] = useState(postList); 
  const [showModal, SetShowModal] = useState(false)

  const handleClick = (value) =>{
    setData([value, ...data]);
    SetShowModal(false)
  }
  
  function OnOpen(){
    SetShowModal(true)
  }
  
  function OnClose(){
    SetShowModal(false)
  }
  

  return (
    <div>
        <div className="portfolio">
        <button onClick={OnOpen} className="portfolio__addbtn">Добавить работу</button>
        </div>
      {/* <Router>
      <NavBar />
        <Switch>
          <Route path='/' exact component={CV} />
          <Route path='/portfolio' component={Post} />        
          <Route path='/addform' component = {{AddForm arr={handleClick}/}} />        
        </Switch>
      </Router> */}
         
      {/* <CV />      */}
      <Modal arr={handleClick} showModal={showModal} OnClose={OnClose}/>    
      <Post data={data} />
      
    </div>
  )
 
};



export default Portfolio;
