import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Product.styles.scss';
import { useContext, useEffect, useState } from 'react';
import { catalogbebidas } from '../../data/catalogbebidas';
import { catalogdesa } from '../../data/catalogdesa';
import { catalogpos } from '../../data/catalogpos';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';
import ReactStars from 'react-stars';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Catalog } from '../../components/Catalog/Catalog';
import { ShoppingCartContext } from '../../providers/ShoppingCartContext';
import { setToLocalStorage } from '../../utils/localStorage';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { FavoritesContext } from '../../providers/FavoritesContext';
import EmblaCarousel from '../../components/EmablaCarousel/EmblaCarousel';
import { catalogspecial } from '../../data/catalogespecials';

interface ProductFormProps {
    quantity: number;
}

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";

const ProductPage = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const { favoritesList, setFavoritesList } = useContext(FavoritesContext);
    const { register, handleSubmit } = useForm<ProductFormProps>();
    const params = useParams();
    const [product, setProduct] = useState<ProductCardProps>();
    const [relatedProducts, setRelatedProducts] = useState<ProductCardProps[]>([]);

    useEffect(() => {
        const combinedCatalogs = [
            ...catalogbebidas,
            ...catalogdesa,
            ...catalogpos,
            ...catalogspecial
        ];

        const result = combinedCatalogs.find((product) => product.id === params.productId);

        if (result) {
            setProduct(result);

            let currentCatalog: ProductCardProps[] = [];
            if (catalogbebidas.find(p => p.id === result.id)) {
                currentCatalog = catalogbebidas;
            } else if (catalogdesa.find(p => p.id === result.id)) {
                currentCatalog = catalogdesa;
            } else if (catalogpos.find(p => p.id === result.id)) {
                currentCatalog = catalogpos;
            } else if (catalogspecial.find(p => p.id === result.id)) {
                currentCatalog = catalogspecial;
            }

            setRelatedProducts(currentCatalog.filter(p => p.id !== result.id).slice(0, 3));
        }
    }, []);

    useEffect(() => {
        if (productList && productList.length > 0) {
            setToLocalStorage(PRODUCT_LIST_KEY, productList);
        }
    }, [productList]);

    const findProduct = () => {
        const result = productList.findIndex((productSearch: ProductCardProps) => 
            productSearch.id === product?.id
        );

        return result;
    };

    const onSubmit: SubmitHandler<ProductFormProps> = (data) => {
        const productIndex = findProduct();
        if (productIndex === -1) { 
            setProductList([
                ...productList,
                {
                    ...product,
                    quantity: Number(data.quantity)
                }
            ]);
        } else { 
            productList[productIndex].quantity = 
                Number(productList[productIndex].quantity) + 
                Number(data.quantity);
            setProductList([...productList]);
        }
        toast.info("Producto añadido al carrito");
    };

    const addProductToFavorites = () => {
        if (!product) {
            toast.error("Producto no disponible para añadir a favoritos");
            return;
        }
    
        // Usamos un bucle for para verificar si el producto ya está en favoritos
        let isProductInFavorites = false;
        for (let i = 0; i < favoritesList.length; i++) {
            if (favoritesList[i].id === product.id) {
                isProductInFavorites = true;
                break;
            }
        }
    
        if (isProductInFavorites) {
            toast.warn("El producto ya está en favoritos");
            return;
        }
    
        const updatedFavorites = [...favoritesList, product];
        setFavoritesList(updatedFavorites);
        setToLocalStorage(FAVORITES_LIST_KEY, updatedFavorites);
        toast.info("Producto añadido a favoritos");
    };
    
    

    if (!product) {
        return <div className="loading">NO EXISTE ESTE PRODUCTO -_-</div>;
    }

    return (
        <div className="product">
            <div className="product-page">
                <div className="product-page-content">
                    <div className="product-page-carousel">
                        <EmblaCarousel slides={product?.imagesUrl} />
                    </div>
                    <div className="product-page-detail-wrapper">
                        <h1 className="product-page-detail-title">{product.title}</h1>
                        <div className='product-page-price-container'>
                            <div className="product-page-detail-price"> {product.price} MXN</div>
                            {product.discount && (
                                <div className="product-page-detail-discount">-{product.discount}%</div>
                            )}
                        </div>
                        <div className="product-page-stars">
                            <ReactStars count={5} size={20} value={product.stars} edit={false} />
                        </div>
                        <p className="product-page-detail-description">{product.description}</p>
                        <form className='product-page-form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='product-page-form-quantity'>
                                <label>
                                    Cantidad
                                </label>
                                <select className='select dark' {...register('quantity')}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <Input type='submit' value="Agregar al carrito" className='dark' />
                            <Button 
                                type="button"
                                onClick={addProductToFavorites}
                                label="Añadir a favoritos"
                                className="dark"
                            />
                        </form>
                        
                    </div>
                </div>
                <div className="product-page-related">
                    <label className='product-page-related-title'>Productos relacionados:</label>
                    <Catalog productList={relatedProducts} />
                </div>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} 
                closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover 
                className="custom-toast-container" toastClassName="custom-toast"/>
            </div>
        </div>
    );
    
};

export { ProductPage };