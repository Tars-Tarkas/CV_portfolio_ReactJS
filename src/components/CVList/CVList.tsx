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
        <div className="about-block">
          {contacts?.map((item: any, index: any) => {
            return (
              <div key={index} className="about-contacts-block">
                <div className="about-photo">
                  <img alt="" src={item.photo} />
                </div>
                <div className="about-caption">Контакты</div>
                <ul className="about__contacts">
                  <li className="about-contacts-text">
                    <Icon classname="icon-phone" />
                    <a href={item.tel} target="_blank" rel="noreferrer">
                      {item.tel.slice(4)}
                    </a>
                  </li>
                  <li className="about-contacts-text">
                    <Icon classname="icon-email" />
                    <a href={item.mail} target="_blank" rel="noreferrer">
                      {item.mail.slice(7)}
                    </a>
                  </li>
                  <li className="about-contacts-text">
                    <Icon classname="icon-telegram" />
                    <a href={item.telegram} target="_blank" rel="noreferrer">
                      Telegram
                    </a>
                  </li>
                  <li className="about-contacts-text">
                    <Icon classname="icon-github" />
                    <a href={item.github} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </li>
                  <li className="about-contacts-text">
                    <Icon classname="icon-linkedin" />
                    <a href={item.linkedin} target="_blank" rel="noreferrer">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}

          <div className="about-hardskils-block">
            <div className="about-caption">Навыки</div>
            <div className="about-hardskils">
              {hardskils?.map((item: any, index: any) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
          </div>

          <div className="about-languages-block">
            <div className="about-caption">Знание языков</div>
            <ul className="about-languages">
              {languages?.map((item: any, index: any) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>

          <div className="about__hobby__block">
            <div className="about-caption">Хобби</div>
            <ul className="about-hobby">
              {hobby?.map((item: any, index: any) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="info-block">
          <div className="info-description">
            {person?.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <h1 className="info-fio">
                    {item.lastname} {item.firstname} {item.patronymic}
                  </h1>
                  <div className="info-location-age">
                    <div className="info-location">
                      <Icon classname="icon-location" />
                      {item.city}
                    </div>
                    <div className="info-age">
                      <Icon classname="icon-info" />
                      Возраст: {item.age}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="info-position">
            {position?.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <span>Желаемая должность:</span>
                  <span className="info-postion-post">{item.position}</span>
                  <span className="info-position-employment">
                    {item.employment}
                  </span>
                  <span className="info-postion-schedule">{item.schedule}</span>
                  <p className="info-about">{item.about}</p>
                </div>
              );
            })}
          </div>

          <h1 className="info-caption">ОПЫТ РАБОТЫ</h1>
          <div className="info-experience">
            {experience?.map((item: any, index: any) => {
              return (
                <div key={index} className="info-experience-table">
                  <div className="info-experience-year">{item.year}</div>
                  <div className="info-experience-organization">
                    {item.organization}
                    <div className="info-experience-position">
                      Должность: {item.position}
                    </div>
                    <div className="info-experience-description">
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h1 className="info-caption">ОБРАЗОВАНИЕ</h1>
          <div className="info-education">
            {education?.map((item: any, index: any) => {
              return (
                <div key={index} className="info-education-table">
                  <div className="info-education-year">{item.year}</div>
                  <div className="info-education-institution">
                    {item.institution}
                    <div className="info-education-department">
                      Кафедра: {item.department}
                    </div>
                    <div className="info-education-specialization">
                      Специальность: {item.specialization}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CVList;
