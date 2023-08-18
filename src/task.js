import { icon } from '@fortawesome/fontawesome-svg-core';
import './task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFile, faPen, faPenNib, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Task = (props) =>{
    const [st,Setst] = useState(0);
    const [val,SetVal] = useState(props.title)
    const [id,SetId] = useState('')
    


    const HandleChanging = (e) =>{
        SetVal(e.target.value);
    }
    const HandleEdit=()=>{
        Setst(1)
    }

    const HandleUpdate = (e) =>{
        props.data[+props.id] =val
        props.func(props.data)
        Setst(0);
    }

    const HandleDelete = () =>{
        props.data.splice(props.id, 1);
        props.func(props.data);
    }

    return(
        <>
        <div className='Tasks'>
                    <div className='oneTask'>
                            <p >{st==0? props.title: ''}</p>
                            <input onChange={HandleChanging} className="inputfield edit" type='text' value={val} style={{display :  st==1? 'block': 'none'}} />
                            <button  onClick = {HandleUpdate} id={id} value={props.id} style={{display :  st==1? 'inline': 'none'}} className="btn-style btn-edit btn-edit"> <FontAwesomeIcon className='Edit' icon={faCheck} size='s'/></button>
                            <div className='buttons'>
                            <button onClick={HandleEdit} style={{display :  st==0? 'inline': 'none'}} className="btn-style btn-edit"> <FontAwesomeIcon className='Edit' icon={faPen} size='s'/></button>
                            <button onClick = {HandleDelete} className="btn-style btn-edit"> <FontAwesomeIcon className='Edit' icon={faTrash} size='s'/></button>
                            </div>
                    </div>
                    

                </div>
        </>
    )
}


export default Task;