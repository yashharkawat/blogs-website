import { Link, Outlet, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup';
import { useState } from "react";
import './Navbar.css'
import profileImage from './profile.png' 

const NavBar=(props)=>{
    const initialValues={
        author:'',
        date:'',
        likes:'',
        comments:'',
    };
    const [filter,setFilter]=useState(false);
    const navigate=useNavigate();
    const logoutHandler=()=>{
        navigate('/login');
    }
    const [searchText,setSearchText]=useState('');
    const searchHandler=(e)=>{
        setSearchText(e.target.value);
        props.searchHandler(e.target.value);
    }
    return (
        <>

            <div className='navbar-container'>
                <input className="navbar-search" type="text" placeholder="Search posts" onChange={searchHandler} />
                <div className="navbar-right">
                    <Link to='/profile'>
                        <img className='navbar-profile' src={profileImage} alt='profile photo'/>
                    </Link>
                    <Link to='/add' className="navbar-write">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
                        <div className="write">Write</div>
                    </Link>
                    <button onClick={logoutHandler} className="logout-button">Logout</button>
                </div>
            </div>
            
            
            <div>
                {props.hideFilter===true?'':<button className="filter-button" onClick={()=>setFilter(true)}>Add Filters</button>}
                {filter &&
                    <Formik initialValues={initialValues} onSubmit={(values)=>{
                        //console.log(values);
                        setFilter(false);
                        props.sendFilter(values);
                    }}>
                        {({values,handleChange,handleSubmit})=>(
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Filter by Author: </label>
                                    <input type="text" name="author" value={values.author} onChange={handleChange} />
                                    </div>
                                    <div>
                                    <label>Filter by Date: </label>
                                    <input type="date" name="date" value={values.date} onChange={handleChange} />
                                    </div>
                                    <div>
                                    <label>Filter by Likes: </label>
                                    <input type="number" name="likes" value={values.likes} onChange={handleChange} />
                                    </div>
                                    <div>
                                    <label>Filter by Comments: </label>
                                    <input type="number" name="comments" value={values.comments} onChange={handleChange} />
                                    </div>
                                    <button className="filter-button" type="submit">Apply Filters</button> 
                            </form>
                        )}
                    </Formik>
                }
            </div>
        </>
    );
}
export default NavBar;