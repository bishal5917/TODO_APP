import React from 'react'
import './Home.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Home() {

    return (
        <>
            <div className="Container">
                <div className="inputContainer">
                    <input type="text" placeHolder="Enter into todo-list !!!"
                        className="entertodo" name="" id="" />
                    <input className="btn" type="button" value="ADD" />
                </div>

                <div className="lists">
                    <div className="listContainer">
                        <div className="message">
                            My first list
                        </div>
                        <div className="iconsContainer">
                            <EditIcon className="icons" style={{ color: "teal" }} />
                            <DeleteOutlinedIcon className="icons" style={{ color: "tomato" }} />
                        </div>
                    </div>

                    <div className="listContainer">
                        <div className="message">
                            My first list
                        </div>
                        <div className="iconsContainer">
                            <EditIcon className="icons" style={{ color: "teal" }} />
                            <DeleteOutlinedIcon className="icons" style={{ color: "tomato" }} />
                        </div>
                    </div>

                    <div className="listContainer">
                        <div className="message">
                            My first list
                        </div>
                        <div className="iconsContainer">
                            <EditIcon className="icons" style={{ color: "teal" }} />
                            <DeleteOutlinedIcon className="icons" style={{ color: "tomato" }} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
