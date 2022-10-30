import React from 'react';
import "./withListLoading.scss";

function WithListLoading(Component) {
  return function WihLoadingComponent({ error, isLoading, ...props }) {     
    if (error){ return (
      <div>
        <p className='message__error'>Файл не найден! </p>     
      </div>
    );} 
    if (isLoading){ return (
      <div>
        <p className='message__warn'>Идет открытие файла...</p>     
      </div>
    )} 
    if (!error || !isLoading) return <Component {...props} />;

  };
}

export default WithListLoading;