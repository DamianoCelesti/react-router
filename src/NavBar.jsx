import { link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">HomePage</NavLink>
                </li>
                <li>
                    <NavLink to="/chisiamo">Chi siamo</NavLink>
                </li>
                <li>
                    <NavLink to="/listapost">Lista Post</NavLink>
                </li>
            </ul>
        </nav>
    )
}