import React, { useEffect, useState } from "react";
import withListLoading from "../../HOC/withListLoading";
import CVList from "../CVList/CVList";
import "./CV.scss"



function CV ({title}) {    
    const ListLoading = withListLoading(CVList);
    const [readFile, setReadFile] = useState({
    loading: false,
    data: null,
  });
    const [error, SerError] = useState("");
  
  useEffect(() => {
    setReadFile({ loading: true });
    const jsonfile = `./cv.json`;
    fetch(jsonfile)
      .then((res) => res.json())
      .then((data) => {
        setReadFile({ loading: false, data: data });              
      })
      .catch(e => SerError(e))      
  }, [setReadFile]);

  useEffect(()=> {
    document.title = title;
  });
    
    return ( 
      <div>
      {!error ? 
      <ListLoading isLoading={readFile.loading} data={readFile.data} /> : 
      <div className="error__block">
        <div className='error__text'>Ошибка открытия файла</div>
      </div>}  
  
      </div>
    )
}

export default CV;
