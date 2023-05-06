import { useEffect, useRef, ComponentPropsWithRef, KeyboardEvent } from 'react';

type ModalProps = ComponentPropsWithRef<'dialog'> & {
    isOpen: boolean;
    setCloseDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ children, isOpen, setCloseDialog }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const childrenWrapperRef = useRef<HTMLDivElement>(null);

    const closeDialogOnPressingEscape = (
        e: KeyboardEvent<HTMLDialogElement>
    ) => {
        if (e.code === 'Escape') {
            setCloseDialog(false);
        }
    };

    const closeDialogOnClickingBackground = (
        e: React.MouseEvent<HTMLDialogElement, MouseEvent>
    ) => {
        const dialogDimensions = dialogRef?.current?.getBoundingClientRect();
        if (
            dialogDimensions &&
            (e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom)
        ) {
            setCloseDialog(false);
        }
    };

    useEffect(() => {
        isOpen && !dialogRef.current?.open && dialogRef.current?.showModal();
        !isOpen && dialogRef.current?.close();
    }, [isOpen]);

    return (
        <dialog
            ref={dialogRef}
            onKeyDown={closeDialogOnPressingEscape}
            className='mx-auto p-0'
            onClick={closeDialogOnClickingBackground}
        >
            {children}
        </dialog>
    );
};
