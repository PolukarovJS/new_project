import React from "react";
import iconLoader from '../../../assets/images/preload.gif'

let Preloader = (props) => {
    return <div>
        <img alt='preloader' src={iconLoader}/>
    </div>
}

export default Preloader;