import { useParams } from 'react-router-dom';
import './Product.styles.scss';
import '../../data/catalogdesa';
import EmblaCarousel from '../../components/EmablaCarousel/EmblaCarousel';
import { useEffect, useState } from 'react';
import { catalogdesa } from '../../data/catalogdesa';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';
import ReactStars from 'react-stars';

const ProductPage= () => {
    const params =useParams();
    const [product, setProduct] = useState<ProductCardProps>();
    
    useEffect(() => {
        const result = catalogdesa.find ((product) => {
            return product.id === params.productId
        });
        if (result) {
            setProduct(result);
        }
        
    }, []);
    if (!product) {
        return <div>Loading...</div>;
    }
    return <div className='product-page'>
        <div className='product-page-carousel'>
            <EmblaCarousel slides={product?.imagesUrl}/>
        </div>
        <div className='product-page-detail-wrapper'>
            <div className='product-page-detail-title'>{product.title}</div>
            <div className='product-page-detail-price'>{product.price}</div>
            <div className='product-page-detail-discount'>{product.discount}</div>
            <ReactStars
                count={5}
                size={16}
                value={product.stars}
                edit={false}
            />
            {product.description}
        </div>
        
    </div>
};
export { ProductPage};