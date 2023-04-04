import * as React from "react";
import { useDispatch } from "react-redux";
import { removeWork } from "../../store/PFSlice";
import "./WorkList.scss";
import Icon from "../Icon/Icon";

///** функция возвращает время создание поста */
const dataPost = (timestamp: any) => {
  return ("" + new Date(timestamp).toISOString()).replace(
    /^([^T]+)T(.+)$/,
    "$1"
  );
};

// function formatDate(d: any) {
//   const date = new Date(d);
//   let dd = String(date.getDate());
//   var mm = String(date.getMonth() + 1);
//   var yyyy = date.getFullYear();
//   if (dd < 10) {
//     dd = "0" + dd;
//   }
//   if (mm < 10) {
//     mm = "0" + mm;
//   }
//   return (d = dd + "/" + mm + "/" + yyyy);
// }

// function formatDate(input: any) {
//   var datePart = input.match(/\d+/g),
//     year = datePart[0].substring(2), // get only two digits
//     month = datePart[1],
//     day = datePart[2];

//   return day + "/" + month + "/" + year;
// }
// function ChangeFormateDate(oldDate: any) {
//   var p = dateString.split(/\D/g);
//   return [p[2], p[1], p[0]].join("/");
// }
const WorkList: React.FC<any> = ({ item }): JSX.Element => {
  const dispatch = useDispatch();

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
      </div>
    </div>
  );
};

export default WorkList;
