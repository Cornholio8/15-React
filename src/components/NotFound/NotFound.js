import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Gojira from './Gojira.jpg'

const NotFound = () => {
    return (
        <div className={styles.hero}>
            <PageTitle title="404 NOT FOUND" />
            <img src={Gojira} alt='not found'></img>
        </div>
    )
};

export default NotFound