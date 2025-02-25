import { FC, useEffect, useState } from 'react';

type PropTypes = {
url: string;
handleFetchedData:(data:any[]) => void
};

const GetDataFetch: FC<PropTypes> = ({url, handleFetchedData}) => {
  
  const [data, setData]= useState<any[]>([])


  const getData=async(fetchUrl:string)=>{

    try {
        const res = await fetch(fetchUrl);
        const data = await res.json()

        console.log(data)
        setData(data)
        handleFetchedData(data)
        
        
    } catch (error) {
        console.error("getData unsuccessful", error)
    }

  }

  useEffect(()=>{
    if (url) {
        getData(url)
    }
  },[url])

  return (<div>
    
        
 



  </div>)
};

export default GetDataFetch;
