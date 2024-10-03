import { Link, Navigate, useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../components/States';

export default function Login() {
    const [ data, setData ] = useState({
        username: '',
        password: '',
    });
    const { isLogged, setIsLogged } = useContext(AuthContext);

    const submitData = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
      
        axios.post("http://localhost:8000/api/user/login", {
          username: username,
          password: password
        })
        .then((response) => {
          console.log("authenticated");
          console.log(response);
          setIsLogged(true);
        })
        .catch((error) => {
          console.log("Error:", error.message);
          console.log("Error Response:", error.response);
        });
    }  
    console.log(data);

    if (isLogged) {
        return <Navigate to="/listings" replace />;
    }

    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submitData}> 
                <h1 className={styles.title}>Login</h1>
                <div className={styles.username}>
                    <label className={styles.label}>Username :</label>
                    <input className={styles.input} type="text" name="username" id="username" placeholder='Enter Username' required />
                </div>
                <div className={styles.password}>
                    <label className={styles.label}>Password :</label>
                    <input className={styles.input} type="password" name="password" id="password" placeholder='Enter Password' required />
                </div>
                
                <button className={styles.btn} type='submit' >Submit</button>
                <div className={styles.signup}>
                    <Link to="/signup">Dont Have an account? SignUp here</Link>
                </div>
            </form>
        </div>
    );
}