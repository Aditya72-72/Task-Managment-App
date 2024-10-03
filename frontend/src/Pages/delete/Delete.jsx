import styles from './delete.module.css';
import { useParams } from 'react-router-dom';

export default function Delete() {
    const { id } = useParams();
    console.log(id);

    return(
        <div className={styles.container}>
            delete container
        </div>
    );
}