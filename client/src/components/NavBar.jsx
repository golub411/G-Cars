import { Link } from "react-router-dom"
import "../styles/navBarStyle.css"

const NavBar = () => {
    return(
        <ul>
            <Link to="/"><li><a class="active" href="#home">На главную</a></li></Link>
            <Link to="/salons"><li><a href="#contact">Салоны</a></li></Link>
            <Link to="/about"><li><a href="#about">О нас</a></li></Link>
        </ul>
    )
}
export default NavBar