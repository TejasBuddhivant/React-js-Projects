import Photos from './Components/Photos'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [count, setcount] = useState(1);
    const [UserData, setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [count]);

    const fetchData=async()=>{
    const response =await axios.get(`https://picsum.photos/v2/list?page=${count}&limit=8`);
    // console.log(response.data);
    setUserData(response.data);
    
    }


  let printUserData = <h3 className='text-gray-300 text-xs '>Loading...</h3>

  if (UserData.length > 0) {
    printUserData = UserData.map(function (elem, idx) {

      return <div key={idx}>
        <Photos props={elem}  key={idx}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-full w-full text-white'> 
    <div className="flex flex-wrap justify-center">
    {printUserData}

    </div>
<div className='flex justify-center  gap-5 mt-23 '> 
<button className='bg-gray-500 px-4 py-2 rounded' onClick={() => { setUserData([]); setcount(count - 1); }} disabled={count===1}>Previous</button>
<span>Page: {count}</span>
<button className='bg-gray-500 px-4 py-2 rounded' onClick={()=>{setcount(count+1); setUserData([])}} >Next</button>
</div>
    </div>
  )
}

export default App