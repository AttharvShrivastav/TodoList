import { icon } from '@fortawesome/fontawesome-svg-core';
import './task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFile, faPen, faPenNib, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Task = (props) =>{
    const [st,Setst] = useState(0);
    const [val,SetVal] = useState(props.title)
    


    const HandleChanging = (e) =>{
        SetVal(e.target.value);
    }
    const HandleEdit=()=>{
        alert(props.title + " "+ props.id)
        Setst(1)
    }

    const HandleUpdate = (e) =>{
        alert(e.target.id)
        props.updat(val, e.target.id)
        Setst(0);
        
    }
    return(
        <>
        <div className='Tasks'>
                    <div className='oneTask'>
                            <p >{st==0? props.title: ''}</p>
                            <input onChange={HandleChanging} type='text' value={val} style={{display :  st==1? 'block': 'none'}} />
                            <button  onClick = {HandleUpdate} id={props.id} style={{display :  st==1? 'inline': 'none'}} className="btn-style"> <FontAwesomeIcon className='Edit' icon={faCheck} size='s'/></button>
                            <div className='buttons'>
                            <button onClick={HandleEdit} style={{display :  st==0? 'inline': 'none'}} className="btn-style"> <FontAwesomeIcon className='Edit' icon={faPen} size='s'/></button>
                            <button className="btn-style"> <FontAwesomeIcon className='Edit' icon={faTrash} size='s'/></button>
                            </div>
                    </div>
                    

                </div>
        </>
    )
}


export default Task;