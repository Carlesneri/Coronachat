import React from 'react'
import Messages from '../Messages/Messages'
import Message from '../Message/Message'

export default function ChatComponent(){
    return(
        <div className="chat">
            <div className="message-container">
                <Message />
            </div>
            <div className="messages-container">
                <Messages />
            </div>
        </div>
    )
}