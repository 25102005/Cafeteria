
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import {  catalogbebidas } from "../../data/catalogbebidas";


const heroBebidasPage ={
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/001/855/122/non_2x/row-of-iced-coffees-free-photo.jpg',
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