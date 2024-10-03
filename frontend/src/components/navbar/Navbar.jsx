import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import { useContext } from 'react';
import { AuthContext } from '../States';
import axios from 'axios';

export default function Navbar() {
    const navigate = useNavigate();

    const { isLogged,setIsLogged } = useContext(AuthContext);

    const getlogout = ()=> {
        axios.get("http://localhost:8000/api/user/logout").then( ()=> {
            setIsLogged(false);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <nav className={styles.container}>
            <a href="/" className={styles.title}>Task Managment</a>
            <div className={styles.buttons}>
                {isLogged ? <button className={styles.login} onClick={getlogout}>Logout</button> : <button className={styles.login} onClick={() => navigate("/login")}>Login</button>}
            </div>
        </nav>
    );
}