import React, { useEffect, useState } from "react";
import withListLoading from "./HOC/withListLoading";
import CVList from "./components/CVList/CVList";



function CV(){    
    const ListLoading = withListLoading(CVList);
    const [readFile, setReadFile] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setReadFile({ loading: true });
    const jsonfile = `./cv.json`;
    fetch(jsonfile)
      .then((res) => res.json())
      .then((data) => {
        setReadFile({ loading: false, data: data });    
      });      
  }, [setReadFile]);
   
    return (           
        <ListLoading isLoading={readFile.loading} data={readFile.data} />
    )
}

export default CV