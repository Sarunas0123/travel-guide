import { NavLink } from "react-router"

export default function NavBar() {
    return (
        <div className="flex flex-row">
            <NavLink to={"/"} end>
                <div className="p-1">
                    <span>Travel</span><br></br><span>Guide</span>
                </div>
            </NavLink>
            <div>
                <nav className="p-1 justify-right m-3 space-x-2">
                    <NavLink to={"/atractions"} end>Atractions</NavLink>
                    <NavLink to={"/hotels"} end>Hotels</NavLink>
                    <NavLink to={"/cars"} end>Cars</NavLink>
                    <NavLink to={"/about"} end>About</NavLink>
                </nav>
            </div>
        </div>
    )
}