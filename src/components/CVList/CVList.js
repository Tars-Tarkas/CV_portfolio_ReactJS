import React from 'react';
const CVList = (props) => {
  const { data } = props;
  if (!data || data.length === 0) return <p>Нет данных</p>;
  
  return (    
    <ul>      
       {data.person.map((item, index) => {
        return (
          <li key={index}>
            <span>{item.firstname} </span>         
            <span>{item.lastname} </span>         
            <span className='repo-description'>{item.hardskils}</span>                       
          </li>          
        );     
      
      })}

      {data.hardskils.map((item, key)=>{
        return(
          <li key={key}>{item}</li>
        )
      })}
    </ul>
  );
};
export default CVList;