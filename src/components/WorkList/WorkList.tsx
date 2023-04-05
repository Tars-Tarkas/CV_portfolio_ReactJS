import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeWork } from "../../store/PFSlice";
import Modal from "../Modal/Modal";
import AddWork from "../AddWork/AddWork";
import "./WorkList.scss";
import Icon from "../Icon/Icon";

///** функция возвращает время создание поста */
const dataPost = (timestamp: any) => {
  return ("" + new Date(timestamp).toISOString()).replace(
    /^([^T]+)T(.+)$/,
    "$1"
  );
};

const WorkList: React.FC<any> = ({ item }): JSX.Element => {
  const dispatch = useDispatch();
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  return (
    <div className="worklist">
      <div className="worklist-item">
        <div className="worklist-inner">
          <span className="worklist-date">
            Дата добавления: {dataPost(item.id)}
          </span>
          <h2 className="worklist-title">{item.title}</h2>
          <hr />
          <div className="worklist-page-link-block">
            <div className="worklist-webpage">
              <Icon classname="icon-webpage-dark" link={item.page}></Icon>
            </div>
            <div className="worklist-github">
              <Icon classname="icon-github-dark" link={item.linkrep}></Icon>
            </div>
          </div>
          <div className="worklist-description">
            <details className="worklist-details">
              <summary className="worklist-description-title">
                Описание проекта
              </summary>
              <p>{item.description}</p>
              <hr />
            </details>
          </div>
          <ul className="worrlist-stack">
            Стек:
            {item.stack.map((item: any) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="worklist-icon">
        <Icon
          classname="icon-trash"
          text="Удалить"
          onClick={() => dispatch(removeWork(item))}
        />
        <Icon
          classname="icon-edit"
          text="Правка"
          onClick={() => setModal(true)}
        />
        <Modal
          visible={isModal}
          content={<AddWork title="Редактировать работу" textbtn="Изменить" />}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default WorkList;
