import React, { useReducer, useState } from 'react'
import './Home.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { data } from './Data';
import { reducer } from './Reducers';

export default function Home() {
    const [task, setTask] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const [value, newValue] = useState("")

    //WITH USEREDUCER HOOK
    //initialState
    const initialState = {
        lists: data
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const addTask = () => {
        if (task) {
            const newTask = {
                id: new Date().getTime().toString(),
                task
            }
            dispatch({ type: "ADD", payload: newTask })
            setTask("")
        }
    }

    const handleDelete = (id) => {
        dispatch({ type: "DELETE", payload: id })
    }

    const startUpdate = () => {
        // setUpdateMode(updateMode ? false : true)
    }

    const handleUpdate = (id, value) => {
        dispatch({ type: "UPDATE", payload: id })
    }
    //WITHOUT USING USEREDUCER HOOK
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
                    <input onKeyPress={e => e.key === "Enter" && addTask()}
                        value={task} onChange={e => setTask(e.target.value)}
                        type="text" placeHolder="Enter into todo-list !!!"
                        className="entertodo" name="" id="" />
                    <input onClick={addTask} className="btn" type="button" value="ADD" />
                </div>

                <div className="lists">
                    {
                        state.lists.map((x) => (
                            <div className="listContainer">
                                {updateMode ? (
                                    <input value={x.task}
                                        onChange={e => newValue(e.target.value)} type="text"
                                        name="" id="" />
                                ) : (<div className="message">
                                    {x.task}
                                </div>)}
                                <div className="iconsContainer">
                                    <EditIcon onClick={startUpdate}
                                        className="icons" style={{ color: "teal" }} />
                                    <DeleteOutlinedIcon onClick={() => handleDelete(x.id)}
                                        className="icons" style={{ color: "tomato" }} />
                                    {updateMode && <button onClick={() => handleUpdate(x.id, value)}
                                    >Save</button>}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
