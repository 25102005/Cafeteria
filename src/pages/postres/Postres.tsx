
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import {  catalogpos } from "../../data/catalogpos";


const heroPostresPage ={
    imageUrl: 'https://img.freepik.com/fotos-premium/pastel-chocolate-sobre-fondo-oscuro-vista-superior-espacio-copia-chocolate-casero-clasico-ia-generativa_874904-3886.jpg',
  imageText: 'LOS MEJORES POSTRES SOLO CON NOSOTROS.',
  headline: 'LOS MEJORES POSTRES',
  button: {
    href:'/',
    label: 'COMPRA YA'}
}


const Postrespage = ( ) => {
    return <>
        <Hero {...heroPostresPage} /> 
        <Catalog productList={catalogpos}/>
        
    </>
}
export { Postrespage};