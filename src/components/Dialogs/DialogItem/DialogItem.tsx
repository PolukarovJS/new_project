import React, { FC } from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
    avatar: string
}

const DialogItem:FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <img src={props.avatar} alt='avatar' className={s.avatar}/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;