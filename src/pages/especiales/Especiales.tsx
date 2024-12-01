import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogspecial } from "../../data/catalogespecials";


const heroEspecialesPage = {
    imageUrl: 'https://img.freepik.com/vector-gratis/diseno-arbol-navidad-elementos-decorativos-sobre-fondo-bokeh_1017-35262.jpg',
    imageText: 'ESPECIALES DE TEMPORADAS IMPRESIONANTES.',
    headline: 'APROVECHA NUESTROS PRODUCTOS ESPECIALES DE TEMPORADA',
    button: {
        href: '/',
        label: 'COMPRA YA'
    }
};

const Especialespage = () => {
    return <>
        <Hero {...heroEspecialesPage} />
        <Catalog productList={catalogspecial} />
        </>
};

export { Especialespage };
