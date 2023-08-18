import { icon } from '@fortawesome/fontawesome-svg-core';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPenNib, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Task from './task';


const Main = () =>{
    const [task, SetTask] = useState("");
    const [data, SetData] = useState([]);
    const HandleChange =(e) =>{
        SetTask(e.target.value)
    }

    const ChangeTask=(updatedData)=>{
        SetData((data)=>{
            return [...updatedData]
            })
    
    }

    const HandleSubmit = () =>{

        if(task !=''){

        SetData((data)=>{
        return [...data,task]
        })

        console.log(data);
        SetTask("")
        }

    }

    const setdata=(task,key)=>{
        return(
            <Task title = {task} id = {key} data = {data} func = {ChangeTask}/>
        )        
    }


    return(
        
        <>
            <div className="main">
                <h1>To-Do List</h1>
                <div className="form">
                    <input onChange={HandleChange} className="inputfield" type="text" value= {task} name="" />
                    <button onClick={HandleSubmit} className='btn-style' type='submit'><FontAwesomeIcon className='Edit' icon={faPlus} size='s'/></button>
                </div>
           
            {
                


                data? data.map(setdata) : ''

            }
            

            </div>
        </>
    )
}

export default Main;