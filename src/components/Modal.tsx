import { useEffect, useRef, ReactNode } from 'react';

type ModalProps = {
    children: ReactNode;
    isOpen: boolean;
};

export const Modal = ({ children, isOpen }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        isOpen && dialogRef.current?.showModal();
    }, [isOpen]);

    return <dialog ref={dialogRef}>{children}</dialog>;
};
