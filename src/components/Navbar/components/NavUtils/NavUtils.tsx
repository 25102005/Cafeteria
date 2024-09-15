import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import './NavUtils.styles.scss';
const NavUtils = () =>{
    return <div className="nav-Utils">
        <a href="favoritos"><FaHeart /></a>
        <a href="pedidos"><FaCartShopping /></a>
    </div>
}

export {NavUtils};