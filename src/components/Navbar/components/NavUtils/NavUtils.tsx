import './NavUtils.styles.scss';
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { Favorites } from "../Favorites/Favorites";
import { AboutUs } from '../AboutUs/AboutUs';

const NavUtils: React.FC = () => {
    return (
        <div className="nav-Utils">
            <AboutUs/>
            <Favorites />
            <ShoppingCart />
        </div>
    );
};

export { NavUtils };