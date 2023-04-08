// NOTE: think about make 2 buttons one for child- text other for child - svg ????

import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = { classes?: string } & ComponentPropsWithoutRef<'button'>;

const ButtonPrimary = ({ classes, children, ...props }: ButtonProps) => {
    const className = `grid place-content-center w-full text-white text-headingM rounded-3xl cursor-pointer ${classes} `;
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export default ButtonPrimary;
