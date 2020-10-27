import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>Sasha</div>
                <div className={s.dialog}>Masha</div>
                <div className={s.dialog}>Pasha</div>
                <div className={s.dialog}>Glasha</div>
                <div className={s.dialog}>Kasha</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Ok!!!</div>
                <div className={s.message}>Hi!!!</div>
                <div className={s.message}>By!!!</div>
                <div className={s.message}>Sy!!!</div>
            </div>
        </div>
    )
}

export default Dialogs;