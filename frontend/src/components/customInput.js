import React from "react";
import {NavLink, Link} from "react-router-dom";

const CustomInput = (props) => {
    const {type, name, placeholder, classname, value, onChange, onBlur} = props;
    
    return ( 
    <>
        <div className="mt-1">
            <input 
                className={`form-control ${classname}`} 
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    </>
    )
}

export default CustomInput;