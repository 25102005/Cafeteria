import { useForm } from 'react-hook-form';
import './checkout.styles.scss';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { ShoppingCartContext } from '../../providers/ShoppingCartContext';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';

const Checkout = () => {
    const { productList } = useContext(ShoppingCartContext);
    const { register, handleSubmit } = useForm();
    const [payActive, setPayActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState({} as any);
    const [ticket, setTicket] = useState();
    const [totalFinal, setTotalFinal] = useState(0);

    useEffect(() => {
        let totalGeneral = 0;
        productList.forEach((product: ProductCardProps) => {
            const totalProducto = (product.quantity! * product.price) * (1 - (product.discount || 0) / 100);
            totalGeneral += totalProducto;
        });
        setTotalFinal(totalGeneral);
    }, [productList]);

    const onSubmit = async (dataForm: any) => {
        setData(dataForm);
        setPayActive(true);
    };

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [{
                description: 'Compra de productos',
                amount: {
                    currency_code: "MXN",
                    value: totalFinal.toFixed(2),
                }
            }],
        }).then((orderId: any) => {
            setModalOpen(true);
            setTicket(orderId);
            return orderId;
        });
    };

    const onError = (data: any) => {
        toast.error("Error con tu método de pago");
    };

    return (
        <div className="checkout">
            <h1>Finaliza la compra</h1>
            <h2>Datos de envío</h2>
            <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="checkout-form-column">
                    <label>Nombre completo</label>
                    <input type="text" {...register("name")} />
                    <label>Calle</label>
                    <input type="text" {...register("street")} />
                    <label>Código Postal</label>
                    <input type="text" {...register("postalCode")} />
                    <label>Colonia</label>
                    <input type="text" {...register("colony")} />
                </div>
                <div className="checkout-form-column">
                    <label>Municipio</label>
                    <input type="text" {...register("town")} />
                    <label>Estado</label>
                    <input type="text" {...register("state")} />
                    <label>Número de teléfono</label>
                    <input type="number" {...register("phoneNumber")} />
                    {
                        payActive ? 
                            <PayPalButtons 
                                createOrder={createOrder}
                                onError={onError}
                                className="paypal"
                            /> :
                            <input type="submit" value="Continuar compra" />
                    }
                </div>
            </form>
            <Modal isOpen={modalOpen}>
                <div className="checkout-modal">
                    <h2>Compra exitosa</h2>
                    <h3>Fecha: {moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
                    <h3>Número de ticket: {ticket}</h3>
                    <h3>Datos de compra</h3>
                    <label>Nombre: {data.name}</label>
                    <label>Calle: {data.street}</label>
                    <label>Código Postal: {data.postalCode}</label>
                    <label>Colonia: {data.colony}</label>
                    <label>Número de telefono: {data.phoneNumber}</label>
                    {
                        productList.map((product: ProductCardProps) => {
                            const totalProducto = (product.quantity! * product.price) * (1 - (product.discount || 0) / 100);
                            return (
                                <div className="checkout-modal-product" key={product.id}>
                                    <div className="checkout-modal-product-image">
                                        <img src={product.imagesUrl[0]} alt="" />
                                    </div>
                                    <label>{product.description}</label>
                                    <label>Cantidad: {product.quantity}</label>
                                    <label>Descuento: {product.discount || 0}%</label>
                                    <label>Total: ${totalProducto.toFixed(2)}</label>
                                </div>
                            );
                        })
                    }
                    <h3>Total final: ${totalFinal.toFixed(2)}</h3>
                </div>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export { Checkout };
