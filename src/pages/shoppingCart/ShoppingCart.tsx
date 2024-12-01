import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../providers/ShoppingCartContext";
import { ProductCardProps } from "../../components/ProductCard/ProductCard";

import './ShoppingCart.styles.scss';
import { setToLocalStorage } from "../../utils/localStorage";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

const ShoppingCartPage = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalGlobal = 0;
        productList.forEach((product: ProductCardProps) => {
            const totalByProduct = (product.quantity! * product.price) * (1 - (product.discount || 0) / 100); // Aplicar descuento
            totalGlobal += totalByProduct; // Sumar al total global
        });
        setTotal(totalGlobal); // Actualizar el total general
    }, [productList]);

    const handleClick = (id: string) => {
        const result = productList.filter((product: ProductCardProps) => product.id !== id);
        setProductList(result);
        setToLocalStorage(PRODUCT_LIST_KEY, result);
    };

    const findProduct = (id: string) => {
        const result = productList.findIndex((productSearch: ProductCardProps) =>
            productSearch.id === id
        );
        return result;
    };

    const handleOnQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const productIndex = findProduct(id);
        productList[productIndex].quantity = Number(event.target.value);
        setProductList([...productList]);
        setToLocalStorage(PRODUCT_LIST_KEY, [...productList]);
    };

    return (
        <div className="shopping-cart-page">
            <h1>Carrito</h1>
            <div className="shopping-cart-page-list">
                <div className="shopping-cart-page-list-headline">
                    <label>Precio</label>
                    <label>Descuento</label> {/* Nuevo apartado de descuento */}
                    <label>Total</label>
                </div>
                {
                    productList.map((product: ProductCardProps) => {
                        const discountedPrice = product.price * (1 - (product.discount || 0) / 100); // Calcular precio con descuento
                        const totalByProduct = product.quantity! * discountedPrice; // Total por producto con descuento

                        return (
                            <div className="shopping-cart-page-product" key={product.id}>
                                <div className="shopping-cart-page-product-image">
                                    <img src={product.imagesUrl[0]} alt="" />
                                </div>
                                <div className="shopping-cart-page-product-desc">
                                    <div>{product.description}</div>
                                    <div className="shopping-cart-page-product-quantity">
                                        <div>
                                            <label>CANTIDAD:</label>
                                            <Input
                                                className="dark"
                                                type="number"
                                                defaultValue={product.quantity}
                                                onChange={(e) => { handleOnQuantityChange(e, product.id) }}
                                            />
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={() => handleClick(product.id)}
                                            label="Eliminar"
                                            className="dark"
                                        />
                                    </div>
                                </div>
                                <div className="shopping-cart-page-product-price">
                                    ${product.price}
                                </div>
                                <div className="shopping-cart-page-product-discount">
                                    {product.discount || 0}% {/* Mostrar el descuento aplicado */}
                                </div>
                                <div className="shopping-cart-page-product-total">
                                    ${totalByProduct.toFixed(2)} {/* Total con descuento */}
                                </div>
                            </div>
                        );
                    })
                }
                <div className="shopping-cart-page-total">
                    <label>Total: ${total.toFixed(2)}</label> {/* Total global actualizado */}
                    <ButtonLink href="checkout" label="Proceder al pago" className="dark" />
                </div>
            </div>
        </div>
    );
};

export { ShoppingCartPage };
