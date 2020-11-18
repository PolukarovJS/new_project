import React from 'react';
import s from '../Navbar.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsElements = props.friends.map(f => <Friend id={f.id} name={f.name} avatar={f.avatar} key={f.id}/>);
    return (
        <div>
            <div className={s.friends}>
                <div className={s.title}>
                    <h1>Friends</h1>
                </div>
                <div className={s.friend}>
                    {friendsElements}
                </div>
            </div>
        </div>
    )
}

export default Friends;