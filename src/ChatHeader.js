import React, { Component } from 'react'

class ChatHeader extends Component{
    render(){
        return(
            <div className="ChatHeader">
                <header className="ChatHeader">
                    <div className="roomInfo">
                    <h2>#general</h2>
                    <p>Announcements and general chat</p>
                    </div>
                </header>
            </div>
        )
    }
}
export default ChatHeader