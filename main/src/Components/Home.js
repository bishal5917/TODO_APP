import React, { useReducer, useState } from 'react'
import './Home.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { data } from './Data';

export default function Home() {
    const [task, setTask] = useState("")

    //By Using UseReducer Hook

    //initialState
    const initialState = {
        lists: data,
    }

    //reducers 
    const reducer = (state, action) => {
        if (action.type === "ADD") {
            const newOne = [...state.lists, action.payload]
            return {
                lists: newOne
            }
        }
        return state;
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const addTask = () => {
        if (task) {
            const newTask = {
                id: new Date().getTime().toString(),
                task
            }
            dispatch({ type: "ADD", payload: newTask })
        }
    }

    const handleDelete = () => {

    }
    //if done normally by useState 
    // const addTask = () => {
    //     setArray([...marray,
    //     {
    //         id: new Date().getTime().toString(),
    //         task
    //     }])
    // }

    // const handleDelete = (id) => {
    //  setArray(marray.filter((item) => item.id !== id))
    // }
    return (
        <>
            <div className="Container">
                <div className="inputContainer">
                    <input value={task} onChange={e => setTask(e.target.value)}
                        type="text" placeHolder="Enter into todo-list !!!"
                        className="entertodo" name="" id="" />
                    <input onClick={addTask} className="btn" type="button" value="ADD" />
                </div>

                <div className="lists">
                    {
                        state.lists.map((x) => (
                            <div className="listContainer">
                                <div className="message">
                                    {x.task}
                                </div>
                                <div className="iconsContainer">
                                    <EditIcon className="icons" style={{ color: "teal" }} />
                                    <DeleteOutlinedIcon onClick={() => handleDelete(x.id)}
                                        className="icons" style={{ color: "tomato" }} />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
