import React, { useState} from "react";
import "./AddForm.scss";

let uId = () => new Date().getTime();

function getObj(){
    let initialValues = {
      id: uId(),       
      title: "",
      page: "",
      linkrep: "",
      description: "",
      date:""    
    }
    return initialValues;    
  } 

function AddForm ({ arr }){
    const [obj, setObj] = useState(getObj)
    const [showPanel, setshowPanel] = useState(false);
    const [btnText, setbtnText] = useState("Добавить работу")
  
    function handleInputChange(prop, e){       
      setObj({ ...obj, [prop]: e.target.value })     
    }

    function handleSubmit(e){
      e.preventDefault();
      arr(obj);           
      setObj(getObj());    
    }    
  
    function viewPanel(e){
      e.preventDefault();
      setshowPanel(!showPanel);  
      showPanel ? setbtnText("Добавить работу") : setbtnText("Скрыть панель")    
    }    

    
    return (        
        <div className = "wrapper">
          
        <form onSubmit={handleSubmit} className = {`form ${showPanel ? 'active' : 'inactive'}`}>          
               <input
                type="text"
                className = "input__title"
                value = {obj.title}
                required="required"
                placeholder = "Добавить заголовок"
                onChange = {(e) => handleInputChange("title", e)}                           
              />         
          <div className = "input__page__link">
              <div>
                  <input
                    type="text"
                    className = "input"
                    value = {obj.page}
                    required="required"
                    placeholder = "Ссылка на страницу"
                    onChange = {(e) => handleInputChange("page", e)}                
                    />
              </div>
              <div>
                  <input
                    type="text"
                    className = "input"
                    value = {obj.linkrep}
                    required="required"
                    placeholder = "Ссылка на репозитарий"
                    onChange = {(e) => handleInputChange("linkrep", e)}                                                        
                  />
              </div>
          </div>                    
              <textarea
                type="text"
                className = "textarea"
                value = {obj.description}
                required="required"
                placeholder = "Добавить описание проекта"
                onChange = {(e) => handleInputChange("description", e)}                
              />   
          <button 
            className = "btn">Добавить
          </button> 

          <button
            onClick={viewPanel} 
            className="btn_add">{btnText}
          </button>
        </form>
        <div className={`box ${showPanel ? 'active' : 'inactive'}`}>dcasddssd</div>
     </div> 

    )

}

export default AddForm