import styles from './Card.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCard, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = props => {

    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);
    const cardId = props.cardId;

    const handleClick = e => {
        e.preventDefault();
        setIsFavorite(!isFavorite);
        dispatch(toggleFavoriteCard( cardId ));
    };

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard( cardId ));
    };

    return (
        <li className={styles.card}>{props.title}
            <div>
                <button className={clsx(styles.fav_button, isFavorite && styles.isFavorite)} onClick={handleClick}>
                    <i className="fa fa-star-o"></i>
                </button>
                <button className={styles.fav_button} onClick={handleRemove}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default Card;