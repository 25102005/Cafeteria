import { FC } from 'react';
import { Tag } from '../../Tag/Tag';

import './CarouselItem.syles.scss';

export interface CarouselItemProps {
    id: string; // Identificador como string
    imageUrl: string;
    title: string;
    onClick?: () => void;
}

const CarouselItem: FC<CarouselItemProps> = ({
    imageUrl,
    title,
    onClick,
}) => {
    return <div className='carousel-item' onClick={onClick} style={{ cursor: 'pointer' }}>
        <img 
            className='carousel-item-image'
            src={imageUrl} 
            alt="item" />
        <div className='carousel-item-tag'>
            <Tag 
                color='white'
                backgroundColor='black'
                label={title} />
        </div>
    </div>
}

export { CarouselItem };
