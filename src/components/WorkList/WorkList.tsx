import * as React from "react";
import { useSelector } from "react-redux";
import "./WorkList.scss";
import Icon from "../Icon/Icon";

const dataPost = (timestamp: number) => {
  return ("" + new Date(timestamp).toISOString())
    .replace(/^([^T]+)T(.+)$/, "$1")
    .replace(/^(\d+)-(\d+)-(\d+)$/, "$3.$2.$1");
};

const Post = () => {
  const { PF, loading } = useSelector((state: any) => state);

  const removePost = (item: any) => {
    const newPost = PF.PFjson.filter((post: any) => {
      return post !== item;
    });
    // setData(newPost);
  };

  return (
    <>
      <div className="container">
        {PF.PFjson.map((item: any) => {
          return (
            <div key={item.id} className="post">
              <div className="post__item">
                <div className="post__inner">
                  <span className="post__date">
                    Дата добавления:{" "}
                    {!item.date ? dataPost(item.id) : item.date}
                  </span>
                  <h2>{item.title}</h2>
                  <hr />
                  <ul className="post__page__link__block">
                    <li
                      className={
                        !item.page
                          ? "post__page__link__none"
                          : "post__page__link"
                      }
                    >
                      <a href={item.page} target="_blank" rel="noreferrer">
                        Ссылка на страницу
                      </a>
                    </li>
                    <li
                      className={
                        !item.linkrep
                          ? "post__page__link__none"
                          : "post__page__link"
                      }
                    >
                      <a href={item.linkrep} target="_blank" rel="noreferrer">
                        Ссылка на репозитарий
                      </a>
                    </li>
                  </ul>
                  <details>
                    <summary className="post__description__title">
                      Описание проекта
                    </summary>
                    <p>{item.description}</p>
                    <hr />
                  </details>
                </div>
              </div>
              <div className="post__icon">
                <Icon
                  classname="trash"
                  text="Удалить"
                  onClick={() => removePost(item)}
                />
                {/* <div className="post__icon__block">
                  <i
                    onClick={() => {
                      removePost(item);
                    }}
                    className="post__delete icon-trash"
                  ></i>
                  <span>Удалить</span>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Post;
