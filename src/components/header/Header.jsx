import { NavLink, useOutletContext, } from "react-router-dom";
import logo from "./images/adii.png"

function Header(fontColor){
    return(
        <>
        <div className="w-full h-16 fixed z-50 flex headerDiv items-center justify-evenly">
        <img src={logo} alt="" className="w-8 rounded"/>
        <ul className="flex  items-center justify-center"
        style={{color: `${fontColor.fontColor}`}}>
            <li >
                <NavLink to={"/"} >
                Home
                </NavLink>
            </li>

            <li>
            <NavLink to={"/ToDo"} >
                ToDo
                </NavLink>
            </li>
            <li >
                <NavLink to={"/"} >
                Home
                </NavLink>
            </li>

            <li>
            <NavLink to={"/ToDo"} >
                ToDo
                </NavLink>
            </li><li >
                <NavLink to={"/"} >
                Home
                </NavLink>
            </li>

            <li>
            <NavLink to={"/ToDo"} >
                ToDo
                </NavLink>
            </li><li >
                <NavLink to={"/"} >
                Home
                </NavLink>
            </li>

            <li>
            <NavLink to={"/ToDo"} >
                ToDo
                </NavLink>
            </li>
           
        </ul>

        </div>
        </>
    )
}

export default Header;