
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import {  catalogpos } from "../../data/catalogpos";


const heroPostresPage ={
    imageUrl: 'https://img.freepik.com/fotos-premium/tazon-granola-yogur-bayas-frescas-sobre-fondo-oscuro-desayunos-saludables-ia-generativa_874904-3835.jpg',
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