import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const[text,setText]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder]=useState(true)
    
    const onSubmit =(e)=>{
        e.preventDefault()
        
        onAdd({text,day,reminder})
        
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>task</label>
                <input type='text' placeholder='add task' value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date n time</label>
                <input type='text' placeholder='Add date and time' value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='save task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
