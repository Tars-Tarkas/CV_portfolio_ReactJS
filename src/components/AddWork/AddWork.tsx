import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWork } from "../../store/PFSlice";
import "./AddWork.scss";
import Icon from "../Icon/Icon";

const AddPost: React.FC = (): JSX.Element => {
  let uId = () => new Date().getTime();

  const getObj = () => {
    let initialValues = {
      id: uId(),
      title: "",
      page: "",
      linkrep: "",
      description: "",
      date: "",
    };
    return initialValues;
  };

  
  const [obj, setObj] = useState(getObj);

  const dispatch = useDispatch();
  const handleInputChange = (
    prop: string,
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setObj({ ...obj, [prop]: e.target.value });
  };

  const clearInput = (prop: string, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setObj({ ...obj, [prop]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setObj(getObj());
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
    dispatch(addWork(obj));
  };

  return (
    <div className="addwork">
      <form onSubmit={handleSubmit} className="addwork-form">
        <div className="modal__form__title">
          <input
            type="text"
            className="addwork-input addwork-input-title"
            value={obj.title || ""}
            required={true}
            placeholder="Добавить заголовок"
            onChange={(e) => handleInputChange("title", e)}
          />
          <Icon
            classname="close clear-btn"
            text={null}
            onClick={(e) => clearInput("title", e)}
          />
          {/* <i
            onClick={(e) => clearInput("title", e)}
            className="icon-close clear__btn"
          ></i> */}
        </div>
        <div className="addwork-input-pagelink">
          <div className="modal__form__page">
            <input
              type="text"
              className="addwork-input addwork-input-page"
              value={obj.page || ""}
              placeholder="Ссылка на страницу"
              onChange={(e) => handleInputChange("page", e)}
            />
            <i
              onClick={(e) => clearInput("page", e)}
              className="icon-close clear__btn"
            ></i>
          </div>
          <div className="modal__form__linkrep">
            <input
              type="text"
              className="modal__input"
              value={obj.linkrep || ""}
              placeholder="Ссылка на репозитарий"
              onChange={(e) => handleInputChange("linkrep", e)}
            />
            <i
              onClick={(e) => clearInput("linkrep", e)}
              className="icon-close clear__btn"
            ></i>
          </div>
        </div>
        <div className="modal__form__textarea">
          <textarea
            // type="text"
            className="modal__textarea"
            value={obj.description || ""}
            required={true}
            placeholder="Добавить описание проекта"
            onChange={(e) => handleInputChange("description", e)}
          />
          <i
            onClick={(e) => clearInput("description", e)}
            className="icon-close clear__btn"
          ></i>
        </div>
        <button className="modal__btn">Добавить</button>
      </form>
      <div className="modal__close"></div>
    </div>
  );
};

export default AddPost;
