import { FC, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

type PropTypes = {
url: string;
handleFetchedData:(data:any[]) => void
};

const GetDataFetch: FC<PropTypes> = ({url, handleFetchedData}) => {
  
  const [data, setData]= useState<any[]>([])
  const [loading , setLoading]= useState(false)


  const getData=async(fetchUrl:string)=>{

    try {
      setLoading(true)
        const res = await fetch(fetchUrl);
        const data = await res.json()

        console.log(data)
        setData(data)
        handleFetchedData(data)
        
        
    } catch (error) {
        console.error("getData unsuccessful", error)
    } finally {
      setLoading(false)
    }

  }

  useEffect(()=>{
    if (url) {
        getData(url)
    }
  },[url])

  return (<div className='w-full '>
    {loading ?( <div className='w-full h-screen flex justify-center items-center'>(<TailSpin width={50} height={50} color='purple' />)</div>) : ( <div></div> )}
    
        
 



  </div>)
};

export default GetDataFetch;
