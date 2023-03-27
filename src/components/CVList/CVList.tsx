import * as React from "react";
import "./CVList.scss";
import Icon from "../Icon/Icon";

const CVList = ({ data }: any) => {
  const {
    contacts,
    hardskils,
    languages,
    hobby,
    person,
    position,
    experience,
    education,
  } = data;
  return (
    <div className="container">
      <div className="cv_main">
        <div className="about__block">
          {contacts?.map((item: any, index: any) => {
            return (
              <div key={index} className="about__contacts__block">
                <div className="about__photo">
                  <img alt="" src={item.photo} />
                </div>
                <div className="about__caption">Контакты</div>
                <ul className="about__contacts">
                  <li className="about__contacts-text">
                    <Icon classname="icon-phone" />
                    <a href={item.tel} target="_blank" rel="noreferrer">
                      {item.tel.slice(4)}
                    </a>
                  </li>
                  <li className="about__contacts-text">
                    <Icon classname="icon-email" />
                    <a href={item.mail} target="_blank" rel="noreferrer">
                      {item.mail.slice(7)}
                    </a>
                  </li>
                  <li className="about__contacts-text">
                    <Icon classname="icon-telegram" />
                    <a href={item.telegram} target="_blank" rel="noreferrer">
                      Telegram
                    </a>
                  </li>
                  <li className="about__contacts-text">
                    <Icon classname="icon-github" />
                    <a href={item.github} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </li>
                  <li className="about__contacts-text">
                    <Icon classname="icon-linkedin" />
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
              {hardskils?.map((item: any, index: any) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
          </div>

          <div className="about__languages__block">
            <div className="about__caption">Знание языков</div>
            <ul className="about__languages">
              {languages?.map((item: any, index: any) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>

          <div className="about__hobby__block">
            <div className="about__caption">Хобби</div>
            <ul className="about__hobby">
              {hobby?.map((item: any, index: any) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="info__block">
          <div className="info__description">
            {person?.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <div className="info__fio">
                    {item.lastname} {item.firstname} {item.patronymic}
                  </div>
                  <div className="info__city-age">
                    <div>
                      <Icon classname="icon-location" />
                      {item.city}
                    </div>
                    <div>
                      <Icon classname="icon-info" />
                      Возраст: {item.age}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="info__position">
            {position?.map((item: any, index: any) => {
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
            {experience?.map((item: any, index: any) => {
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
            {education?.map((item: any, index: any) => {
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
