
import './Navdar.styles.scss';
import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "../components/Menu/Menu";
import { NavUtils } from "./components/NavUtils/NavUtils";

const NavBar = ()=>{
    return<div className='nav-bar'>
        <a href="/">
        <ImageFrame
            src="https://png.pngtree.com/png-clipart/20230330/original/pngtree-coffee-logo-illustration-design-a-cup-of-with-vintage-style-very-png-image_9013016.png"
            alt="Logo-cafe" 
            width="80"
        />
        </a>
        
        <Menu/>
        <NavUtils/>
    </div>
}
export default NavBar;