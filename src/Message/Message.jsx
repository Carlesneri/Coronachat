import React, { useState } from 'react'
import './message.css'
import dbMessages from '../database'


function saveMessageDb(nickname, text){
    const time = new Date().toString()
    dbMessages.push({nickname, text, time})
}


export default function Message() {
    const textareaPlaceholder = "Cómo llevas la reclusión?"
    const [nickname, setNickame] = useState("")
    const handleChange = (e) => {
        setNickame(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const nickname = e.target.nickname.value
        const textMessage = e.target.textmessage.value
        nickname && textMessage && saveMessageDb(nickname, textMessage);
        e.target.textmessage.value = ""    
    }

    return (
        <div className="message">
            <form name="message" onSubmit={handleSubmit}>
                <input type="text" className="nickname" value={nickname} name="nickname" id="nickname" placeholder="Nickname" onChange={handleChange} required/>
                <textarea name="textmessage" id="text-message" rows="5" placeholder={textareaPlaceholder} required/>
                <input className="button" type="submit" value="Enviar"/>
            </form>
        </div>
    )
}