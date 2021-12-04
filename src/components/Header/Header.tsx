import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/SportLife1.png";
import s from "./Header.module.css";

type PropsType = {
   isAuth: boolean
   login: () => void
   logout: () => void
}

const Header:FC<PropsType> = (props) => {
   return (
      <header className={s.header}>
         <img src={logo} alt="logo" />
         <div className={s.loginBlock}>
            {props.isAuth ? (
               <div>
                  {props.login} - <button onClick={props.logout}>Log out</button>
               </div>
            ) : (
               <NavLink to="/login">Login</NavLink>
            )}
         </div>
      </header>
   );
};

export default Header;
