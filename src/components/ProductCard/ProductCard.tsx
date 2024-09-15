import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import './ProductCard.styles.scss';
import ReactStars from 'react-stars';
import { RiShoppingCart2Fill } from "react-icons/ri";

export interface ProductCardProps {
    id: string;
    imagesUrl: string[];
    description: string;
    price: number;
    stars: number;
    discount?: number;
    title: string;
}
const ProductCard: FC<ProductCardProps> = ({id,imagesUrl,description,price,stars,discount,title} ) => {
    return <a className="product-card" href={`product/${id}`}>
        <img className="product-card-img" src={imagesUrl[0]} alt="" />
        <label className="product-card-title">{title}</label>
        <p className="product-card-description">{description}</p>
        <div className="product-card-stars">
            <ReactStars
                count={5}
                value={stars}
                size={16}
                edit={false}
            />
        </div>
        <div className="product-card-footer">
            <p>
                <label className="product-card-price">$MXN {price}</label>
                <label className="product-card-discount">-{discount}% </label>
            </p>
            <ButtonLink className="dark" href="Carro de compra"  iconAfter={()=><RiShoppingCart2Fill />} />
        </div>
    </a>
}
export { ProductCard};