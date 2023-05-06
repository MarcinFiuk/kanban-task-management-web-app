import {
    useEffect,
    useRef,
    ComponentPropsWithRef,
    KeyboardEvent,
    MouseEvent,
} from 'react';

type ModalProps = ComponentPropsWithRef<'dialog'> & {
    isOpen: boolean;
    setCloseDialog: () => void;
};

export const Modal = ({ children, isOpen, setCloseDialog }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const closeDialogOnPressingEscape = (
        e: KeyboardEvent<HTMLDialogElement>
    ) => {
        if (e.code === 'Escape') {
            setCloseDialog();
        }
    };

    const closeDialogOnClickingBackground = (
        e: MouseEvent<HTMLDialogElement, globalThis.MouseEvent>
    ) => {
        const dialogDimensions = dialogRef?.current?.getBoundingClientRect();
        if (
            dialogDimensions &&
            (e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom)
        ) {
            setCloseDialog();
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
            onClick={(e) => closeDialogOnClickingBackground(e)}
        >
            {children}
        </dialog>
    );
};
