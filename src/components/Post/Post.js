import React from "react";
import "./Post.scss";
import Header from "../Header/Header";


function dataPost (timestamp){
  return ("" + (new Date(timestamp)).toISOString())
  .replace(/^([^T]+)T(.+)$/,'$1')
  .replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1')
};

function Post ({ data }) {
    return(
    <div>     
        {data.map((item) =>{                            
          return(   
       
        <div className="wrapper post">
          <div className="post__item" key={item.id}>          
            <div className="post__inner">                            
              <span className="post__date">Дата добавления: {item.date = "" ? dataPost(item.id) : item.date}</span>
              <h2>{item.title}</h2>
              <hr />             
              <ul className="post__page__link">
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
                <summary className="description__title">Показать</summary>
                <p>{item.description}</p>
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