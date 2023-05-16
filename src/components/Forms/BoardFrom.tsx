import { useForm, useFieldArray } from 'react-hook-form';

import { isEmpty } from '../../helpers/formHelpers';

import ButtonPrimary from '../ButtonPrimary';
import CloseIcon from '../../assets/icon-cross.svg';

type FormValues = {
    name?: string;
    columns?: { name: string }[];
};

type BoardFormProps = {
    object: FormValues;
    setCloseDialog: () => void;
};

const BoardFrom = ({ object, setCloseDialog }: BoardFormProps) => {
    const { register, handleSubmit, control } = useForm<FormValues>();

    const { fields, append, remove } = useFieldArray({
        name: 'columns',
        control,
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
        setCloseDialog();
    };

    return (
        <div className='w-86 md:w-120 p-6 md:p-8'>
            <header>
                <p className='text-headingL mb-6'>
                    {isEmpty(object) ? 'Add New Board' : 'Edit Board'}
                </p>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-wrap mb-6'>
                    <label
                        htmlFor='boardName'
                        className='text-headingS text-grayMedium mb-2 tracking-normal'
                    >
                        Board Name
                    </label>
                    <input
                        type='text'
                        id='boardName'
                        {...register('name')}
                        placeholder='e.g. Take coffee break'
                        className='basis-full text-bodyL leading-xl text-black px-4 py-2 border rounded border-grayMedium/25 placeholder:text-bodyL placeholder:leading-xl placeholder:text-black/25'
                    />
                </div>
                <div className='flex flex-wrap mb-6'>
                    <label className='text-headingS text-grayMedium mb-2 tracking-normal'>
                        Board Columns
                    </label>
                    <div className='basis-full '>
                        {fields.map((field, index) => {
                            return (
                                <div
                                    key={field.id}
                                    className='flex flex-nowrap gap-4 mb-3'
                                >
                                    <input
                                        type='text'
                                        placeholder='e.g. ToDo'
                                        {...register(`columns.${index}.name`)}
                                        className='flex-grow text-bodyL leading-xl text-black px-4 py-2 border rounded border-grayMedium/25 placeholder:text-bodyL placeholder:leading-xl placeholder:text-black/25'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => remove(index)}
                                    >
                                        <img
                                            src={CloseIcon}
                                            alt='close icon'
                                            role='none'
                                        />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <ButtonPrimary
                        type='button'
                        onClick={() => append({ name: '' })}
                        classes='text-mainPurple bg-mainPurple/10 text-bodyL leading-xl py-2'
                    >
                        + Add New Column
                    </ButtonPrimary>
                </div>
                <ButtonPrimary classes='bg-mainPurple text-white text-bodyL leading-xl py-2'>
                    Create New Board
                </ButtonPrimary>
            </form>
        </div>
    );
};

export default BoardFrom;
