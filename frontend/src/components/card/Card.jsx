import { Link, useNavigate } from 'react-router-dom';
import styles from './card.module.css';
import axios from 'axios';

export default function Card({task,onDelete}) {
    const navigate = useNavigate();
    const editListing = (id) => {
        navigate(`/edit/${id}`);
    }

    const deleteListing = (id) => {
        axios.delete(`http://localhost:8000/api/tasks/${id}`).then(()=>{
            onDelete();
            navigate('/listings');
        }).catch((e) => {
            console.log(e);
        });
    }

    return(
            <div className={styles.task1}>
                <div className={styles.taskDiv}>
                    <h3>{task.taskTitle}</h3>
                    <p className={styles.desc}>{task.taskDesc}</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn} onClick={() => editListing(task._id)}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className={styles.btn} onClick={() => deleteListing(task._id)}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
    );
}