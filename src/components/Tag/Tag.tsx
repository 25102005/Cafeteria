import { FC } from 'react';
import './Tag.styles.scss';

// Interface
interface TagProps {
    label: string;
    color: string;
    backgroundColor: string;
}

// Body
const Tag: FC<TagProps> = ({ label, color, backgroundColor }) => {
    return (
        <div 
            className="tag" 
            style={{ backgroundColor, color }}
        >
            {label}
        </div>
    );
};

export { Tag };
