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

    const clearInput = (prop, e) =>{
      e.preventDefault();        
      setObj({ ...obj, [prop]:"" })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      arr(obj);           
      setObj(getObj());  
      e.target.reset();        
    }    
  
    if (!showModal) {
        return null}
    return(    
        <div className="modal" onClick={hideModal} >
        <div className="container">
            <div className="modal__content" onClick = {e => e.stopPropagation() }>          
                
                <form onSubmit={handleSubmit} className = "modal__form"> 
                 
                  <div className="modal__form__title">
                    <input
                      type="text"                      
                      className = "modal__input__title"
                      value = {obj.title || ''}
                      required="required"
                      placeholder = "Добавить заголовок"
                      onChange = {(e) => handleInputChange("title", e)}                           
                    />                     
                    <i onClick={(e) => clearInput("title", e)} className="icon-close clear__btn"></i>
                  </div>
                  <div className = "modal__input__page__link">
                      <div className="modal__form__page">
                          <input
                            type="text"
                            className = "modal__input modal__input__page"
                            value = {obj.page || ''}                            
                            placeholder = "Ссылка на страницу"
                            onChange = {(e) => handleInputChange("page", e)}                
                            />
                           <i onClick={(e) => clearInput("page", e)} className="icon-close clear__btn"></i>
                      </div>
                      <div className="modal__form__linkrep">
                          <input
                            type="text"
                            className = "modal__input"
                            value = {obj.linkrep || ''}                            
                            placeholder = "Ссылка на репозитарий"
                            onChange = {(e) => handleInputChange("linkrep", e)}                                                        
                          />
                          <i onClick={(e) => clearInput("linkrep", e)} className="icon-close clear__btn"></i>
                      </div>
                  </div>
                    <div className="modal__form__textarea">
                        <textarea
                          type="text"
                          className = "modal__textarea"
                          value = {obj.description || ''}
                          required="required"
                          placeholder = "Добавить описание проекта"
                          onChange = {(e) => handleInputChange("description", e)}                
                        />   
                        <i onClick={(e) => clearInput("description", e)} className="icon-close clear__btn"></i>
                      </div>                    
                  <button className = "modal__btn">Добавить</button>                         
                </form> 
                <div className="modal__close">
                    <div className="modal__close__block">
                      <i onClick={hideModal} className="icon-close"></i>
                      <span>Esc</span>
                    </div>
                </div>         
            </div> 
          </div>        
        </div>
    )
}

export default Modal;