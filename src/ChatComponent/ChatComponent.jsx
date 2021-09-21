import React from 'react'
import Messages from '../Messages/Messages'
import Message from '../Message/Message'
import './chatComponent.css'

export default function ChatComponent(){
    return(
        <div className="chat">
            <h2 className="info-bar">
                Chat monográfico del COVID-19.
            </h2>
            <div className="message-container">
                <Message />
            </div>
            <div className="messages-container">
                <Messages />
            </div>
        </div>
    )
}