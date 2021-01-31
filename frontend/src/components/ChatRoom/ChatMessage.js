import React from 'react';

const ChatMessage = (props) => {
    const whichUser = () => {
        if (this.props.message.user_id === parseInt(this.props.currentUser.id)) {
            return 'current-user-message'
        } else {
            return 'other-user-message'
        }
    }
    
    return (
        <div id="chat-message" className={whichUser()}>
            <h4>{props.message.body}</h4>
        </div>     
    )
}

export default ChatMessage;