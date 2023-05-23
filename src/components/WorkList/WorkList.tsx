import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeWork, editWork } from "../../store/PFSlice";
import Modal from "../Modal/Modal";
import AddWork from "../AddWork/AddWork";
import "./WorkList.scss";
import Icon from "../Icon/Icon";
import { IObject } from "../../types/PFTypes";

/** Функция возвращает время создание поста
 * @param {Date} timestamp
 */
const dataPost = (timestamp: number) => {
  const locale = navigator.language;
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Date(timestamp).toLocaleDateString(locale, dateOptions);
};

interface Iworklist {
  item: IObject;
}

const WorkList = ({ item }: Iworklist) => {
  const { id, title, page, linkrep, description, stack } = item;
  const dispatch = useDispatch();
  const [isModal, setModal] = useState(false);

  const onClose = () => setModal(false);

  const onEdit = () => {
    setModal(true);
    dispatch(editWork({ editedWork: { item } }));
  };

  return (
    <div className="worklist">
      <div className="worklist-item">
        <div className="worklist-inner">
          <div className="worklist-date-block">
            <span className="worklist-date-title">Дата добавления: </span>
            <span className="worklist-date">{dataPost(id)}</span>
          </div>

          <h2 className="worklist-title">{title}</h2>
          <hr />
          <div className="worklist-page-link-block">
            <div className="worklist-webpage">
              <Icon
                classname="icon-webpage"
                link={page}
                size="iconsize-base"
                color="icons-dark"
              ></Icon>
            </div>
            <div className="worklist-github">
              <Icon
                classname="icon-github"
                link={linkrep}
                size="iconsize-base"
                color="icons-dark"
              ></Icon>
            </div>
          </div>
          <div className="worklist-description">
            <details className="worklist-details">
              <summary className="worklist-description-title">
                Описание проекта
              </summary>
              <p>{description}</p>
              <hr />
            </details>
          </div>
          <div className="worklist-stack-block">
            <span className="worklist-stack-title">Стек:</span>
            <ul className="worklist-stack">
              {stack?.map((item: any) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="worklist-icon">
        <Icon
          classname="icon-trash"
          text="Удалить"
          onClick={() => dispatch(removeWork(item))}
          size="iconsize-base"
          color="icons-dark"
        />
        <Icon
          classname="icon-edit"
          text="Правка"
          onClick={onEdit}
          size="iconsize-base"
          color="icons-dark"
        />
        <Modal
          visible={isModal}
          content={
            <AddWork
              title="Редактировать работу"
              textbtn="Изменить"
              mode="Edit"
            />
          }
          onClose={onClose}
        />
      </div>
    </div>
  );
};

WorkList.propTypes = {
  item: PropTypes.object,
};

export default WorkList;
