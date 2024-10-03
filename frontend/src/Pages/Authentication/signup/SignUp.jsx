import { Link, useNavigate } from 'react-router-dom';
import styles from './signup.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submitData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/", data).then(()=>{
            console.log("registered");
            // useNavigate("/login"); // You need to define the navigate function
        }).catch( e=> {
            console.log(e);
        });
    };

    console.log(data);
    return(
        <div className={styles.container} >
            <form className={styles.form} onSubmit={submitData}> 
                <h1 className={styles.title}>Sign UP</h1>
                <div className={styles.username}>
                    <label className={styles.label}>Username :</label>
                    <input 
                        className={styles.input} 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder='Enter Username' 
                        required 
                        value={data.username} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className={styles.email}>
                    <label className={styles.label}>Email :</label>
                    <input 
                        className={styles.input} 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='Enter email' 
                        required 
                        value={data.email} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className={styles.password}>
                    <label className={styles.label}>Password :</label>
                    <input 
                        className={styles.input} 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Enter Password' 
                        required 
                        value={data.password} 
                        onChange={handleInputChange} 
                    />
                </div>
                
                <button className={styles.btn} type='submit'>Submit</button>
                <div className={styles.login}>
                    <Link to="/login">Alredy Have an account? Login here</Link>
                </div>
            </form>
        </div>
    );
}