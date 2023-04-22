import { useEffect, useRef, ComponentPropsWithRef, KeyboardEvent } from 'react';

type ModalProps = ComponentPropsWithRef<'dialog'> & {
    isOpen: boolean;
    setCloseDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ children, isOpen, setCloseDialog }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const closeDialog = (e: KeyboardEvent<HTMLDialogElement>) => {
        if (e.code === 'Escape') {
            setCloseDialog(false);
        }
    };

    useEffect(() => {
        isOpen && dialogRef.current?.showModal();
        !isOpen && dialogRef.current?.close();
    }, [isOpen]);

    return (
        <dialog ref={dialogRef} onKeyDown={closeDialog}>
            {children}
        </dialog>
    );
};
