import React from 'react'
import './Home.css'

export default function Home() {

    return (
        <>
            <div className="Container">
                <div className="inputContainer">
                    <input type="text" placeHolder="Enter into todo-list !!!"
                        className="entertodo" name="" id="" />
                    <input className="btn" type="button" value="ADD" />
                </div>

            </div>
        </>
    )
}
