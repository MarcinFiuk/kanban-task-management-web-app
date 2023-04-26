import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import ButtonPrimary from './ButtonPrimary';

import CloseIcon from './../assets/icon-cross.svg';

type FormProps = {
    object: {
        title?: string;
        description?: string;
        subtasks?: { title: string; isCompleted: boolean }[];
        status?: [];
    };
};

type ReactHookFormTypes = Pick<FormProps, 'object'>;

const Form = ({ object }: FormProps) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: object });

    const { fields, append, remove } = useFieldArray({
        name: 'subtasks',
        control,
    });

    return (
        <div className='w-86 p-6'>
            <h1 className='text-headingL mb-6'>
                {Object.hasOwn(object, 'title') ? 'Edit Task' : 'Add New Task'}
            </h1>
            <form>
                <div className='flex flex-wrap mb-6'>
                    <label
                        htmlFor='title'
                        className='text-headingS text-grayMedium mb-2 tracking-normal'
                    >
                        Title
                    </label>
                    <input
                        type='text'
                        id='title'
                        placeholder='e.g. Take coffee break'
                        className='basis-full text-bodyL leading-xl text-black px-4 py-2 border rounded border-grayMedium/25 placeholder:text-bodyL placeholder:leading-xl placeholder:text-black/25'
                        {...register('title')}
                    />
                </div>
                <div className='flex flex-wrap mb-6'>
                    <label
                        htmlFor='description'
                        className='text-headingS text-grayMedium mb-2 tracking-normal'
                    >
                        Description
                    </label>
                    <textarea
                        id='description'
                        rows={4}
                        placeholder='e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little.'
                        className='basis-full text-bodyL leading-xl text-black px-4 py-2 border rounded border-grayMedium/25 placeholder:text-bodyL placeholder:leading-xl placeholder:text-black/25'
                        {...register('description')}
                    />
                </div>
                <div className='flex flex-wrap mb-6'>
                    <label
                        htmlFor='subtasks'
                        className='text-headingS text-grayMedium mb-2 tracking-normal'
                    >
                        Subtasks
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
                                        placeholder='e.g. Make coffee'
                                        {...register(`subtasks.${index}.title`)}
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
                        onClick={() =>
                            append({
                                title: '',
                                isCompleted: false,
                            })
                        }
                        classes='text-mainPurple bg-mainPurple/10 text-bodyL leading-xl py-2'
                    >
                        + Add New Subtask
                    </ButtonPrimary>
                </div>
                <div className='flex flex-wrap mb-6'>
                    <label
                        htmlFor='status'
                        className='text-headingS text-grayMedium mb-2 tracking-normal '
                    >
                        Status
                    </label>
                    <div
                        className={`relative basis-full after:content-link after:absolute after:right-2 after:top-3 after:-z-10`}
                    >
                        <select
                            id='status'
                            {...register('status')}
                            className='appearance-none block font-body text-bodyL leading-xl m-0 py-2 px-4 w-full border rounded border-grayMedium/25 bg-transparent'
                            // className='w-full text-bodyL leading-xl text-black px-4 py-2 border rounded border-grayMedium/25'
                        >
                            <option value='todo'>ToDo</option>
                            <option value='doing'>Doing</option>
                            <option value='done'>Done</option>
                        </select>
                    </div>
                </div>
                <ButtonPrimary classes='bg-mainPurple text-white text-bodyL leading-xl py-2'>
                    Create Task
                </ButtonPrimary>
            </form>
        </div>
    );
};

export default Form;
