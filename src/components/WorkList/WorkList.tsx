import * as React from "react";
import { useDispatch } from "react-redux";
import { removeWork } from "../../store/PFSlice";
import "./WorkList.scss";
import Icon from "../Icon/Icon";

///** функция возвращает время создание поста */
const dataPost = (timestamp: number) => {
  return ("" + new Date(timestamp).toISOString())
    .replace(/^([^T]+)T(.+)$/, "$1")
    .replace(/^(\d+)-(\d+)-(\d+)$/, "$3.$2.$1");
};

const WorkList = ({ item }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div className="post__item">
        <div className="post__inner">
          <span className="post__date">
            Дата добавления: {!item.date ? dataPost(item.id) : item.date}
          </span>
          <h2>{item.title}</h2>
          <hr />
          <div className="post-page-link-block">
            <div className="post-webpage">
              <Icon classname="icon-webpage-dark" link={item.page}></Icon>
            </div>
            <div className="post-github">
              <Icon classname="icon-github-dark" link={item.linkrep}></Icon>
            </div>
          </div>
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
          classname="icon-trash"
          text="Удалить"
          onClick={() => dispatch(removeWork(item))}
        />
      </div>
    </div>
  );
};

export default WorkList;
