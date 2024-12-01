
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import {  catalogdesa } from "../../data/catalogdesa";


const heroDesayunosPage ={
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/037/112/550/small_2x/ai-generated-beautiful-advertisment-of-morning-breakfast-with-copy-space-free-photo.jpeg',
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
};
export { Desayunospage};