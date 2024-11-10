import { FaRegHeart } from "react-icons/fa";
import './NavUtils.styles.scss';
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
const NavUtils = () =>{
    return <div className="nav-Utils">
        <a href="favoritos"><FaRegHeart /></a>
        <ShoppingCart/>
    </div>
}

export {NavUtils};