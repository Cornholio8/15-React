import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';
import { useSelector } from 'react-redux';
import { searchStringValue } from '../../redux/searchStringRedux';

const SearchForm = () => {
    //const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const currentSearchStringValue = useSelector(searchStringValue);

    const [searchString, setSearchString] = useState(currentSearchStringValue);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
        setSearchString('');
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." onChange={e => setSearchString(e.target.value)} value={searchString} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;