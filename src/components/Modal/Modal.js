import React from "react";
import "./Modal.scss"
import { useState } from "react";

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


function Modal( {arr, showModal, OnClose} ){
    const [obj, setObj] = useState(getObj) 
  
  
    function handleInputChange(prop, e){       
      setObj({ ...obj, [prop]: e.target.value })     
    }

    function handleSubmit(e){
      e.preventDefault();
      arr(obj);           
      setObj(getObj());    
    }    
  
    if (!showModal) {
        return null}
    return(
    
        <div className="modal">
            <div className="modal__content">          
                <a href="_" onClick={OnClose}><i className="modal__close icon-close"></i></a>
                <form onSubmit={handleSubmit} className = "modal__form">          
                       <input
                        type="text"
                        className = "modal__input__title"
                        value = {obj.title}
                        required="required"
                        placeholder = "Добавить заголовок"
                        onChange = {(e) => handleInputChange("title", e)}                           
                      />         
                  <div className = "input__page__link">
                      <div>
                          <input
                            type="text"
                            className = "modal__input"
                            value = {obj.page}                            
                            placeholder = "Ссылка на страницу"
                            onChange = {(e) => handleInputChange("page", e)}                
                            />
                      </div>
                      <div>
                          <input
                            type="text"
                            className = "modal__input"
                            value = {obj.linkrep}                            
                            placeholder = "Ссылка на репозитарий"
                            onChange = {(e) => handleInputChange("linkrep", e)}                                                        
                          />
                      </div>
                  </div>                    
                      <textarea
                        type="text"
                        className = "modal__textarea"
                        value = {obj.description}
                        required="required"
                        placeholder = "Добавить описание проекта"
                        onChange = {(e) => handleInputChange("description", e)}                
                      />   
                  <button 
                    className = "modal__btn">Добавить
                  </button>             
                </form>                 
            

            </div>
        </div>
    )
}

export default Modal;