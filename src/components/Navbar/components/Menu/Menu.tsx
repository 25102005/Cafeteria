import './Menu.styles.scss';

const Menu = () => {
    const navigate = (path: string) => {
        window.location.href = path; // Navegación básica; puedes cambiarlo si usas React Router
    };

    return (
        <div className="navbar-menu">
            <div onClick={() => navigate('/desayunos')}>DESAYUNOS</div>
            <div onClick={() => navigate('/comidas')}>COMIDAS</div>
            <div onClick={() => navigate('/postres')}>POSTRES</div>
            <div onClick={() => navigate('/especiales')}>ESPECIALES</div>
        </div>
    );
};

export { Menu };
