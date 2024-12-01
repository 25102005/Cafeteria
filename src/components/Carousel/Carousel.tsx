import { FC } from 'react';
import { CarouselItem, CarouselItemProps } from './CarouselItem/CarouselItem';
import './Carousel.styles.scss';
import { useNavigate } from 'react-router-dom';

interface CarouselProps {
    title: string;
    items: CarouselItemProps[];
}

const Carousel: FC<CarouselProps> = ({ title, items }) => {
    const navigate = useNavigate();

    return (
        <div className="carousel">
            <h2 className="carousel-title">{title}</h2>
            <div className="carousel-items-container">
                {items.map((item) => (
                    <CarouselItem
                        key={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        onClick={() => navigate(`/product/${item.id}`)} // Navegación dinámica
                        id={item.id}                    />
                ))}
            </div>
        </div>
    );
};

export { Carousel };
