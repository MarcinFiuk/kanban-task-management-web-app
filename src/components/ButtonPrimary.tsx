import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = { classes?: string } & ComponentPropsWithoutRef<'button'>;

const ButtonPrimary = ({ classes, children, ...props }: ButtonProps) => {
    const className = `grid place-content-center w-full text-white text-headingM  rounded-3xl py-3.5 ${classes} bg-transparent`;
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export default ButtonPrimary;
