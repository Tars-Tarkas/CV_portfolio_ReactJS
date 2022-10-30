import React from "react";
import "./Post.scss";

const dataPost = (timestamp) => {
  return ("" + (new Date(timestamp)).toISOString())
  .replace(/^([^T]+)T(.+)$/,'$1')
  .replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1')
};

const Post = ({ data, removePost}) => {    
    return(
    <div className="container">         
        {data.map((item) => {                            
          return(              
          <div key={item.id} className="post">
            <div className="post__icon">
              {/* <i onClick={submitEdits} className="post__edit icon-edit"></i> */}
              <i onClick = {() => {removePost(item)}} className="post__delete icon-trash"></i>
            </div>
            <div className="post__item" >          
              <div className="post__inner">                            
                <span className="post__date">Дата добавления: {!item.date ? dataPost(item.id): item.date}</span>
                <h2>{item.title}</h2>
                <hr />             
                <ul className={!item.page ? "post__page__link__none" : "post__page__link"}>
                  <li>
                    <a href={item.page} target="_blank" rel="noreferrer">
                      Ссылка на страницу
                    </a>                                  
                  </li>
                  <li>
                    <a href={item.linkrep} target="_blank" rel="noreferrer">
                      Ссылка на репозитарий
                    </a>                  
                  </li>                
                </ul>
                <details>
                  <summary className="post__description__title">Описание проекта</summary>
                  <p>{item.description}</p>
                  <hr />   
                </details>                
              </div>        
            </div>           
          </div>                                         
        )
      })}
    </div>
    )   
}

export default Post;