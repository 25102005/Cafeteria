
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import {  catalogbebidas } from "../../data/catalogbebidas";


const heroBebidasPage ={
    imageUrl: 'https://img.freepik.com/fotos-premium/tazon-granola-yogur-bayas-frescas-sobre-fondo-oscuro-desayunos-saludables-ia-generativa_874904-3835.jpg',
  imageText: 'TIENES PRISA EN NUESTRA CAFETERÍA TE LLEVARAS UNA BEBIDA EXCELENTE Y DELICIOSA.',
  headline: 'LAS MEJORES BEBIDAS',
  button: {
    href:'/',
    label: 'COMPRA YA'}
}


const BebidasPage = ( ) => {
    return <>
        <Hero {...heroBebidasPage} /> 
        <Catalog productList={catalogbebidas}/>
        
    </>
}
export { BebidasPage};