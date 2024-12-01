import './Menu.styles.scss';

const Menu = () => {
    return (
        <div className="navbar-menu">
            <a href="/desayunos">DESAYUNOS</a>
            <a href="/bebidas">BEBIDAS</a>
            <a href="/postres">POSTRES</a>
            <a href="/especiales">ESPECIALES</a>
        </div>
    );
};

export { Menu };
