import React, { useState } from "react";

const MenuItem = (props) => {
    const { name, subMenus, iconClassName } = props;
    const [ expand, setExpand ] = useState(false);
    return (
        <div className="main-menu">
            <li>
            <a onClick={() => setExpand(!expand)} className="menu-item" href="/#">
                    <div className="menu-icon">
                        <i className={iconClassName}></i>
                    </div> 
                    <span>{name}</span>
                </a>
                { subMenus && subMenus.length > 0 ?  <ul className={`sub-menu ${expand ? "active" : ""}`}>
                    {subMenus.map((menu , index) =>(
                        <li key={index}><a href="/#" onClick={(e) => e.preventDefault()}>{menu.name}</a></li>
                    ))}
                </ul> : null }
            </li>
        </div>
    );
}

export default MenuItem;
