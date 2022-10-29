import React from "react";
import "./Modal.scss"
import { useState } from "react";

let uId = () => new Date().getTime();

const getObj = () => {
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


const Modal = ( {arr, showModal, hideModal} ) => {
    const [obj, setObj] = useState(getObj) 
  
  
    const handleInputChange = (prop, e) => {       
      setObj({ ...obj, [prop]: e.target.value })     
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      arr(obj);           
      setObj(getObj());    
    }    
  
    if (!showModal) {
        return null}
    return(    
        <div className="modal" onClick={hideModal} >
            <div className="modal__content" onClick = {e => e.stopPropagation() }>          
                <div className="modal__close">
                  <i onClick={hideModal} className="icon-close"></i>
                  <span>Esc</span>
                </div>
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
                  <button className = "modal__btn">Добавить</button>             
                </form>        
            </div>
        </div>
    )
}

export default Modal;