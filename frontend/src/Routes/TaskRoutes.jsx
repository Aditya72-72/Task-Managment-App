import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from '../Pages/home/Home';
import Login from '../Pages/Authentication/login/Login';
import SignUp from '../Pages/Authentication/signup/SignUp';
import Navbar from '../components/navbar/Navbar';
import Listing from '../Pages/listings/Listing';
import Edit from '../Pages/edit/Edit';
import Delete from '../Pages/delete/Delete';
import Create from '../Pages/create/Create';

export default function TaskRoutes() {

    return (
        
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element= {<Home />}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/listings' element={<Listing />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path='/delete/:id' element={<Delete />} />
                </Routes>
            </BrowserRouter>
    )
}