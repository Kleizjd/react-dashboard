import React, { useEffect, useState } from 'react';
import world from '../assets/world.png';//logo
import user from '../assets/user.png';//logo
import MenuItem from './MenuItem';

const menuItem = [
    { name: "Dashboard", exact: true, to: "/", iconClassName: "bi bi-speedometer2" }, 
    {name: "Content",exact: true, to: `/content`,iconClassName: "bi bi-newspaper",
    subMenus: [{ name: "Courses", to: "/content/courses" },
               { name: "Videos", to: "/content/videos" },],},
               { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
               { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
               { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const Sidebar = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
    if (inactive) {
        document.querySelectorAll(".sub-menu").forEach((element) => {
            element.classList.remove("active");
        })
    //   removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

    return (
        <div className={`side-menu ${inactive ? 'inactive' : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={world} alt="JD Developer" />
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                    {inactive ? <i className="bi bi-arrow-right-square-fill"></i> : <i className="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>
            <div className="search-controller">
                <button className="search-btn">
                    <i className="bi bi-search"></i>
                </button>
                <input type="text" className="form-control" placeholder="Buscar" />
            </div>
            <div className="divider"></div>
            {menuItem.map((menuItem, index) => (
            <MenuItem key={index} 
                      name={menuItem.name} to={menuItem.to} subMenus = {menuItem.subMenus || []} 
                      iconClassName={menuItem.iconClassName}/>))}
            
            <div className="side-menu-footer">
                <div className="avatar">
                    <img src={user} alt="user" />
                </div>
                <div className="user-info">
                    <h5>José Daniel Grijalba Osorio</h5>
                    <p>jose.jdgo97@gmail.com</p>
                    {/* <p>Cra 7Tbis #76-12</p> */}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
