import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './create.module.css';
import axios from 'axios';

export default function Create() {
    const [data, setData] = useState({
        userId: '1',
        taskTitle: '',
        taskDesc: '',
    });
    const navigate = useNavigate();

    const submitData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(data);
        axios.post("http://localhost:8000/api/tasks/", data).then(()=>{
            navigate("/listings");
        }).catch(e =>{
            console.log(e);
        });
    }

    

    return (
        <div className={styles.container}>
            <form className={styles.content} onSubmit={submitData}>
                <h1 className={styles.head}>Add new Task</h1>
                <div className={styles.desc}>
                    <label className={styles.label}>Task Title :</label>
                    <input name='taskTitle' className={styles.input} placeholder="add title" onChange={(e) => setData({ ...data, taskTitle: e.target.value })} />
                </div>
                <div className={styles.desc}>
                    <label className={styles.label}>Description :</label>
                    <textarea name='taskDesc' className={styles.textarea} placeholder="add description" onChange={(e) => setData({ ...data, taskDesc: e.target.value })}  ></textarea>
                </div>
                <button className={styles.btn} type='submit'>Submit</button>
            </form>
        </div>
    );
}