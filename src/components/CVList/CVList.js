// import React, { Fragment } from "react";
// import "./CVList.scss";

// const CVList = (props) => {
//   const { data } = props;
//   if (!data || data.length === 0) return <p>Нет данных</p>;
//   // console.log(props);
//   return (
//     <div className="container">
//       <div className="cv_main">
//         <div className="about__block">
//           <div>
//             {data.contacts.map((item, index) => {
//               return (
//                 <div key={index} className="about__contacts__block">
//                   <div className="about__photo">
//                     <img alt="" src={item.photo} />
//                   </div>
//                   <div className="about__caption">Контакты</div>
//                   <ul className="about__contacts">
//                     <li className="about__contacts-text">
//                       <i className="icon-phone" />
//                       <a href={item.tel} target="_blank" rel="noreferrer">
//                         {item.tel.slice(4)}
//                       </a>
//                     </li>
//                     <li className="about__contacts-text">
//                       <i className="icon-email" />
//                       <a href={item.mail} target="_blank" rel="noreferrer">
//                         {item.mail.slice(7)}
//                       </a>
//                     </li>
//                     <li className="about__contacts-text">
//                       <i className="icon-telegram" />
//                       <a href={item.telegram} target="_blank" rel="noreferrer">
//                         Telegram
//                       </a>
//                     </li>
//                     <li className="about__contacts-text">
//                       <i className="icon-github" />
//                       <a href={item.github} target="_blank" rel="noreferrer">
//                         Github
//                       </a>
//                     </li>
//                     <li className="about__contacts-text">
//                       <i className="icon-linkedin" />
//                       <a href={item.linkedin} target="_blank" rel="noreferrer">
//                         Linkedin
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="about__hardskils__block">
//             <div className="about__caption">Навыки</div>
//             <div className="about__hardskils">
//               {data.hardskils.map((item, index) => {
//                 return <span key={index}>{item}</span>;
//               })}
//             </div>
//           </div>

//           <div className="about__languages__block">
//             <div className="about__caption">Знание языков</div>
//             <ul className="about__languages">
//               {data.languages.map((item, index) => {
//                 return <li key={index}>{item}</li>;
//               })}
//             </ul>
//           </div>

//           <div className="about__hobby__block">
//             <div className="about__caption">Хобби</div>
//             <ul className="about__hobby">
//               {data.hobby.map((item, index) => {
//                 return <li key={index}>{item}</li>;
//               })}
//             </ul>
//           </div>
//         </div>

//         <div className="info__block">
//           <div className="info__description">
//             {data.person.map((item, index) => {
//               return (
//                 <div key={index}>
//                   <div className="info__fio">
//                     {item.lastname} {item.firstname} {item.patronymic}
//                   </div>
//                   <div className="info__city-age">
//                     <div>
//                       <i className="icon-location" /> {item.city}
//                     </div>
//                     <div>
//                       <i className="icon-info" /> Возраст: {item.age}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="info__position">
//             {data.position.map((item, index) => {
//               return (
//                 <div key={index}>
//                   <span>Желаемая должность:</span>
//                   <span className="info__post">{item.position}</span>
//                   <span className="info__employment">{item.employment}</span>
//                   <span className="info__schedule">{item.schedule}</span>
//                   <p className="info__about">{item.about}</p>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="info__caption">ОПЫТ РАБОТЫ</div>
//           <div className="info__experience">
//             {data.experience.map((item, index) => {
//               return (
//                 <table key={index} className="info__experience__table">
//                   <thead>
//                     <tr>
//                       <td className="info__experience__year">{item.year}</td>
//                       <td className="info__experience__organization">
//                         {item.organization}
//                         <div className="info__experience__position">
//                           Должность: {item.position}
//                         </div>
//                         <div className="info__experience__description">
//                           {item.description}
//                         </div>
//                       </td>
//                     </tr>
//                   </thead>
//                 </table>
//               );
//             })}
//           </div>

//           <div className="info__caption">ОБРАЗОВАНИЕ</div>
//           <div className="info__education">
//             {data.education.map((item, index) => {
//               return (
//                 <table key={index}>
//                   <thead>
//                     <tr>
//                       <td className="info__education__year">{item.year}</td>
//                       <td className="info__education__institution">
//                         {item.institution}
//                         <div className="info__education__department">
//                           Кафедра: {item.department}
//                         </div>
//                         <div className="info__education__specialization">
//                           Специальность: {item.specialization}
//                         </div>
//                       </td>
//                     </tr>
//                   </thead>
//                 </table>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CVList;
