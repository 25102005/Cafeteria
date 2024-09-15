import { Carousel } from "../../components/Carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingProducts } from "../../data/trending-products";

const heroProps = {
    imageUrl: 'https://png.pngtree.com/thumb_back/fw800/background/20231103/pngtree-elegant-coffee-cups-against-a-backdrop-of-black-textured-wallpaper-image_13763663.png',
  imageText: 'EL CAFE MAS SABROSO DE TODA LA CIUDAD',
  headline: 'APROVECHA YA LAS OFERTAS',
  button: {
    href:'/',
    label: 'COMPRA YA'
  }

};
const Homepages = ( ) => {
    return <>
      <Hero {...heroProps}/>
      <div className='app-body'>
        <Carousel title="TENDENCIAS" items={trendingProducts}/>
        <Carousel title="PROMOCIONES" items={sales}/>
      </div>
    </>
}
export { Homepages};