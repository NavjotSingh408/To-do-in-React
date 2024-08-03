import { useRef, useState } from 'react'
import './App.css'
import Addt from './Add-task'

function App() {
 const [tasklist,setTaskArray] = useState([]);
 const [task,setTask] = useState('');
 const [Eindex,setEindex] = useState(0);
 const EditRef = useRef();
 const AddRef = useRef();
 

 function addToArray(){
  setTaskArray([...tasklist,task])
  setTask('')
 }

 function delFromArray(index) {
    let newTaskArray = [...tasklist]
    newTaskArray.splice(index,1)
    setTaskArray([...newTaskArray])
 }
 
 function EditToArray() {
  let Tlist= [...tasklist];
  Tlist[Eindex] =  document.getElementsByTagName('input')[0].value;
  setTaskArray([...Tlist]);
  setTask('')
  document.getElementsByTagName('input')[0].value = task
  setEindex(null)
 }

 function EditArray(index){
   document.getElementsByTagName('input')[0].value = tasklist[index]
   setEindex(index);
   EditRef.current.style.display = "initial";
   AddRef.current.style.display = "none";
 }
  return (
    <>
      <h1>To do List</h1>
      <div  className="get-input">
        <input type="text" className='field-style'  placeholder="Enter Task to Add " value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button className='button1 field-style' onClick={addToArray} ref={AddRef} >Add</button>
        <button className='button1 field-style Edit1' onClick={EditToArray} ref={EditRef} >Edit</button>
      </div>
      { tasklist.map((taskitem,i)=>{
        return(
         <Addt key={i} index={i} taskval={taskitem} delArray={delFromArray} EditA={EditArray}/>
        )
      })}
    </>
  )

}

export default App
