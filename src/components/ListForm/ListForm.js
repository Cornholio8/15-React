import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import {useDispatch} from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <label>Title:</label> <TextInput id="title" value={title} onChange={e => setTitle(e.target.value)} />
            <label>Description:</label> <TextInput id="description" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm