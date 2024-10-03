import { Link, useNavigate } from 'react-router-dom';
import styles from './listing.module.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card';
import { AuthContext } from '../../components/States';

export default function Listing() {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const { isLogged } = useContext(AuthContext);

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    } else {
      fetchTasks();
    }
  }, [isLogged]);
  

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/tasks/");
      setListings(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.username}>
        <p className={styles.usernameText}>Hello , User</p>
      </div>
      <div className={styles.list}>
        <div className={styles.Tasks}>
          <div className={styles.taskNav}>
            <p className={styles.head}>Your Tasks ({listings.length})</p>
            <Link to="/create" className={styles.addBtn}>Add <i className="fa-solid fa-plus"></i></Link>
          </div>
          <div className={styles.task}>
            {listings.map(listing => (
              <Card task={listing} key={listing._id} onDelete={fetchTasks} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}