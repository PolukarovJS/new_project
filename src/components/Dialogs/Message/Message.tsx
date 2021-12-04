import React, { FC } from 'react';
import { MessageType } from '../../../types/types';
import s from './Message.module.css';

const Message:FC<MessageType> = (props) => {
    if (!props.my) {
        return (
            <div className={s.message}>
                <div className={s.messageTime}>{props.time}</div>
                <div className={s.messageContent}>{props.message}</div>
            </div>
        )
    } else {
        return (
            <div className={s.messageResponder + " " + s.message}>
                <div className={s.messageTime}>{props.time}</div>
                <div className={s.messageContent}>{props.message}</div>
            </div>
        )
    }
}

export default Message;