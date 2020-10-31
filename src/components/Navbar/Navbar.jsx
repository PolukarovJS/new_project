import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = (props) => {

    let friendsElements = props.state.friends.map(f => <Friend id={f.id} name={f.name} avatar={f.avatar}/>);

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
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

export default Navbar;