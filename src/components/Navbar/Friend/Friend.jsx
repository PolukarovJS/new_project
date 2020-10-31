import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    let path = '/friend/' + props.id;

    return (
        <span className={s.friend}>
            <div>
                <img src={props.avatar} alt='avatar' className={s.avatar}/>
            </div>
            <div>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </span>
    )
}

export default Friend;