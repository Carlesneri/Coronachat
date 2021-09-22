import React, { Component } from 'react'
import MessageReceived from '../MessageReceived/MessageReceived'
import dbMessages from '../database'

class Messages extends Component{
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
    }
    
    async componentDidMount(){
        const {messages} = this.state
        dbMessages.on('child_added', snapshot => {
            messages.push(snapshot.val())
            this.setState({messages})
        })
    }
    
    render() {
        const {messages} = this.state
        const sortedMessages = messages.sort((a, b) => {
            return Date.parse(b.time) - Date.parse(a.time)
        })        
        return (
            sortedMessages.length > 0 ? sortedMessages.map((message, index) => {
                return (
                    <MessageReceived message={message} key={index}/>
                )
            })
            :
            <div className="messages-container">
                <h2>Cargando mensajes</h2>
            </div>
        )
    }
}

export default Messages