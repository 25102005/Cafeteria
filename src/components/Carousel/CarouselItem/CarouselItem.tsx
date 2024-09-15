import { FC } from 'react';
import './CarouselItem.syles.scss';
import { Tag } from '../../Tag/Tag';

export interface CarouselItemProps{
    imageUrl: string;
    title: string;
}

const CarouselItem: FC<CarouselItemProps>=({imageUrl,title})=>{
    return <div className='carousel-item'>
        <img className='carousel-item-image' src={imageUrl} alt={title}  />
        <div className='carousel-item-tag'>
        <Tag color= 'black' backgroundColor= ' white' label={title}/>
        </div>
    </div>

}
export {CarouselItem};