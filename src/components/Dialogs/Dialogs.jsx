import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} time={m.time} my={m.my}/>);
    let newMessage = React.createRef();
    let AddMessage = () => {
        let text = newMessage.current.value;
        props.dispatch({type: 'ADD-MESSAGE'});
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={AddMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;