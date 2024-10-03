import { useEffect, useState } from 'react';
import styles from './edit.module.css'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    const [task , setTask ] = useState({});

    const { id } = useParams();
    const Nevigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          await axios.get(`http://localhost:8000/api/tasks/${id}`).then(res => {
            setTask(res.data);
            console.log(res.data);
          }).catch(e => {
            console.log(e);
          })
        };
        fetchData();
      }, []);

    const submitData = (e) => {
        e.preventDefault();
        if (Object.keys(task).length > 0) { 
          axios.put(`http://localhost:8000/api/tasks/${id}`, task)
            .then((res) => {
              Nevigate("/listings");
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          console.log("Task data is not loaded yet. Please try again.");
        }
      };

   return(
        <div className={styles.container}>
            <form className={styles.editContainer} onSubmit={submitData}>
                <h2 className={styles.head}>Edit the task </h2>
                <div className={styles.edit}>
                    <label className={styles.label}>Task Title : </label>
                    <input value={task.taskTitle} placeholder='new Task' className={styles.input} name='title' onChange={e => {
                        setTask({...task,taskTitle: e.target.value});
                    }} /> 
                </div>
                <div className={styles.edit}>
                    <label className={styles.label}>Description : </label>
                    <textarea value={task.taskDesc} placeholder='new Task' className={styles.textarea} name='desc' onChange={e => {
                        setTask({...task,taskDesc:e.target.value});
                    }}> 
                    </textarea>
                </div>
                <button className={styles.btn}>Edit</button>
            </form>
        </div>
    );
}