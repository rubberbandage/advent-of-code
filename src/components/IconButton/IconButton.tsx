import React from "react";
import './IconButton.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: React.ComponentType
    ariaLabel: string
}

const IconButton = ({Icon, ariaLabel, ...props}: Props) =>
    <div data-tooltip={!props.disabled ? ariaLabel : undefined}>
        <button {...props}>
            <Icon aria-label={ariaLabel}/>
        </button>
    </div>

export {IconButton};