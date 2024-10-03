import styles from './home.module.css';
import { Link } from 'react-router-dom';
export default function Home() {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.head}>Welcome to the Task Managment App</h1>
                <Link to="/login" className={styles.link}>Start your journey with US <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    );
}