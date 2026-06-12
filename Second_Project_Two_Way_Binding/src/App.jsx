import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);
  const onSubmit=(elem)=>{
    elem.preventDefault();
    
    // console.log(elem.target[0].value);
    const copyTaskArr= [...task];
    copyTaskArr.push({text})
    setTask(copyTaskArr);
    // console.log(copyTaskArr);
    
    setText('');
    // console.log("heelo");
  }
  const deletetask=(index)=>{
    const updatetasks=[...task];
    updatetasks.splice(index,1);
    // console.log(updatetasks);
    setTask(updatetasks);
  }
  return (
    <div className='bg-black text-white'>
      <form onSubmit={onSubmit}>
        <input type="text" className='bg-gray-800 text-white p-2 rounded' placeholder='Enter your text'
        value={text}
        onChange={(e)=>{
          setText(e.target.value);
        }}
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded ml-2'>Submit</button>
      </form>

      <div className="cards mt-4 p-4 bg-gray-800 rounded">
        {task.map((elem,index)=>{
          return (
            <div key={index} className='flex justify-between card bg-gray-700 p-2 rounded mb-2'>
             <div className=""> {elem.text}</div>
            <button className='bg-red-500 rounded p-1 active:scale-95' onClick={()=>{
              deletetask(index);
            }
            }>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
// onClick={() => {
//               const updatedTask = task.filter((_, i) => i !== index);
//               setTask(updatedTask);
//             }}
export default App