import React, { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddForm from "./components/AddForm/AddForm";
import Post from "./components/Post/Post";
import CV from "./components/CV/CV";


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

function App() {  
  const [data, setData] = useState(postList); 

  const handleClick = (value) =>{
    setData([value, ...data]);
  }
    
  return (
    <div>
      <Header />      
      <CV />     
      {/* <AddForm arr={handleClick}/>  
      <Post data={data} /> */}
      <Footer />
    </div>
  )
 
};



export default App;
