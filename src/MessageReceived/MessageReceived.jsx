import React from 'react'
import './messageReceived.css'

export default function MessageReceived(props){
    const time = new Date(Date.parse(props.message.time))
    
    return (
        <div className="message-received">
            <div className="nickname-text">
                <p>
                    <span>
                        <strong>
                            {props.message.nickname}:
                        </strong>
                    </span>
                    <span>
                        {props.message.text}
                    </span>
                </p>
            </div>
            <div className="time">
                <div>
                    {time.toLocaleString()}
                </div>
            </div>
        </div>
    )
}