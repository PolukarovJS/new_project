import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} time={m.time} my={m.my} key={m.id}/>);

    let AddMessage = () => {
        props.AddMessage();
    }
    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} placeholder={'Enter your message!'} value={props.dialogsPage.newMessageBody}/>
                </div>
                <div>
                    <button onClick={AddMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;