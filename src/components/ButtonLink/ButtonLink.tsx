import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import './ButtonLink.styles.scss';
import classNames from "classnames";

export interface ButtonLinkProps{
    href: string;
    label?: string;
    className?: string;
    iconAfter?: () => React.ReactElement;
}

const ButtonLink: FC<ButtonLinkProps> = ({href, label, className, iconAfter}) => {
    const classes = classNames('button-link', className)
    return <a className ={classes} href={href}>
        {
            label && <div className="button-link-label">{label}</div>
        }
        {    
            iconAfter?
            iconAfter() :
            <FaLongArrowAltRight />
        }
    </a>;
}

export {ButtonLink};