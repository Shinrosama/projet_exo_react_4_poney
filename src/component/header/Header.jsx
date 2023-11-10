import { Link } from "react-router-dom";
import './Header.scss'
const Header = () => {

    return (

        <header className="head">

            <div className="logoo">
                <img className="log" src="https://media.carrefour.fr/medias/1fc95aeea9c23273a1986592e227814c/p_540x540/430c2cbc29f94a40a3e04738ab438241-image.jpg" alt="logo" />
            </div>
            <h1>Blog Poney</h1>
            <ul className="navlist">
                <li>
                    <Link to= "/">Home</Link>
                </li>
                <li>
                    <Link to= "/poneys">Poneys</Link>
                </li>
                <li>
                    <Link to= "/contact">Contact</Link>
                </li>
                <li>
                    <Link to= "/about">About</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header