
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import {  catalogdesa } from "../../data/catalogdesa";


const heroDesayunosPage ={
    imageUrl: 'https://img.freepik.com/fotos-premium/tazon-granola-yogur-bayas-frescas-sobre-fondo-oscuro-desayunos-saludables-ia-generativa_874904-3835.jpg',
  imageText: 'DESPIERTA TUS MAÑANAS CON LOS MEJORES DESAYUNOS EN NUESTRA CAFETERÍA.',
  headline: 'LOS MEJORES DESAYUNOS',
  button: {
    href:'/',
    label: 'COMPRA YA'}
}


const Desayunospage = ( ) => {
    return <>
        <Hero {...heroDesayunosPage} /> 
        <Catalog productList={catalogdesa}/>
        
    </>
}
export { Desayunospage};