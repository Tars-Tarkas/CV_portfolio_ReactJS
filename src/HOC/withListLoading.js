import React from 'react';
import "./withListLoading.scss";

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (     
      <p className='openfile__message'>Идет открытие файла...</p>     
    );
  };
}

export default WithListLoading;