import { isEmpty } from '../../helpers/FormHelpers';

type FormValues = {
    name?: string;
    columns?: [];
};

type BoardFormProps = {
    object: FormValues;

    setCloseDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const BoardFrom = ({ object }: BoardFormProps) => {
    return (
        <div className='w-86 md:w-120 p-6 md:p-8'>
            <header>
                <p className='text-headingL mb-6'>
                    {isEmpty(object) ? 'Add New Board' : 'Edit Board'}
                </p>
            </header>
        </div>
    );
};

export default BoardFrom;
