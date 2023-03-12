import * as React from "react";
import { useSelector } from "react-redux";
import "./CVList.scss";
import Icon from "../Icon/Icon";

const CVList: React.FC = (): JSX.Element => {
  const { CV, loading } = useSelector((state: any) => state);

  return (
    <div className="container">
      <div className="cv_main">
        <div className="about__block">
          {CV.CVjson.contacts?.map((item: any, index: any) => {
            return (
              <div key={index} className="about__contacts__block">
                <div className="about__photo">
                  <img alt="" src={item.photo} />
                </div>
                <div className="about__caption">Контакты</div>
                <ul className="about__contacts">
                  <li className="about__contacts-text">
                    <i className="icon-phone" />
                    <a href={item.tel} target="_blank" rel="noreferrer">
                      {item.tel.slice(4)}
                    </a>
                  </li>
                  <li className="about__contacts-text">
                    <Icon classname="email" />
                    <a href={item.mail} target="_blank" rel="noreferrer">
                      {item.mail.slice(7)}
                    </a>
                  </li>
                  <li className="about__contacts-text">
                    <Icon classname="telegram" />
                    <a href={item.telegram} target="_blank" rel="noreferrer">
                      Telegram
                    </a>
                  </li>
                  <li className="about__contacts-text">
                    <Icon classname="github" />
                    <a href={item.github} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </li>
                  <li className="about__contacts-text">
                    <Icon classname="linkedin" />
                    <a href={item.linkedin} target="_blank" rel="noreferrer">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}

          <div className="about__hardskils__block">
            <div className="about__caption">Навыки</div>
            <div className="about__hardskils">
              {CV.CVjson.hardskils?.map((item: any, index: any) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
          </div>

          <div className="about__languages__block">
            <div className="about__caption">Знание языков</div>
            <ul className="about__languages">
              {CV.CVjson.languages?.map((item: any, index: any) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>

          <div className="about__hobby__block">
            <div className="about__caption">Хобби</div>
            <ul className="about__hobby">
              {CV.CVjson.hobby?.map((item: any, index: any) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="info__block">
          <div className="info__description">
            {CV.CVjson.person?.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <div className="info__fio">
                    {item.lastname} {item.firstname} {item.patronymic}
                  </div>
                  <div className="info__city-age">
                    <div>
                      <Icon classname="location" />
                      {item.city}
                    </div>
                    <div>
                      <Icon classname="info" />
                      Возраст: {item.age}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="info__position">
            {CV.CVjson.position?.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <span>Желаемая должность:</span>
                  <span className="info__post">{item.position}</span>
                  <span className="info__employment">{item.employment}</span>
                  <span className="info__schedule">{item.schedule}</span>
                  <p className="info__about">{item.about}</p>
                </div>
              );
            })}
          </div>

          <div className="info__caption">ОПЫТ РАБОТЫ</div>
          <div className="info__experience">
            {CV.CVjson.experience?.map((item: any, index: any) => {
              return (
                <table key={index} className="info__experience__table">
                  <thead>
                    <tr>
                      <td className="info__experience__year">{item.year}</td>
                      <td className="info__experience__organization">
                        {item.organization}
                        <div className="info__experience__position">
                          Должность: {item.position}
                        </div>
                        <div className="info__experience__description">
                          {item.description}
                        </div>
                      </td>
                    </tr>
                  </thead>
                </table>
              );
            })}
          </div>

          <div className="info__caption">ОБРАЗОВАНИЕ</div>
          <div className="info__education">
            {CV.CVjson.education?.map((item: any, index: any) => {
              return (
                <table key={index}>
                  <thead>
                    <tr>
                      <td className="info__education__year">{item.year}</td>
                      <td className="info__education__institution">
                        {item.institution}
                        <div className="info__education__department">
                          Кафедра: {item.department}
                        </div>
                        <div className="info__education__specialization">
                          Специальность: {item.specialization}
                        </div>
                      </td>
                    </tr>
                  </thead>
                </table>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CVList;
