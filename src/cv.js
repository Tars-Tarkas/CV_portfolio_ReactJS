import React, { useEffect, useState } from "react";

function CV(){
    const [readfile, setReadfile] = useState([]);

    useEffect(() => {
        getAPI("./cv.json")
    }, []);

    const getAPI = (data) => {       
        fetch(data, {
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {                
                setReadfile(data);
            })
            .catch(()=> console.log(Error))
    }
   
    return (
        <>    
        {/* {console.log(readfile)}     */}
       {/* {readfile.map((item, index)=><ul key={index}><li>{}</li></ul>)} */}
        </>
    )
}

export default CV