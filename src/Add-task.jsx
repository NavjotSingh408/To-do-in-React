
import './App.css'

function Addt(props){
    return (
        <>
        <div className="show-input">
        <div className="field-style field-style1">Task {props.index+1}: {props.taskval}</div>
        <button className='button1 field-style field-style1' onClick={e=>{
            props.delArray(props.index)}} >Del</button>

        <button className='button1 field-style field-style1' onClick={e=>{
            props.EditA(props.index)}} >Edit</button>
        </div>
        </>
    );
}

export default Addt;