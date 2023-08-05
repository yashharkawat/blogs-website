import { Formik } from "formik";
import React, { useEffect ,useState} from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const editProfileSchema=yup.object().shape({
    name:yup.string().required('enter valid name'),
    age:yup.string(),
    bio:yup.string(),
    email:yup.string().email('Enter valid email')

})
const EditProfile=()=>{
    const navigate=useNavigate();
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setLoading(true);
        const current_user=JSON.parse(localStorage.getItem('current_user'));
        setUser(current_user);
        //console.log(user);
        setLoading(false);
      },[localStorage.getItem('current_user')])    
      if(loading){
        return <div>Loading...</div>
      }     
    return (
        <div className="container">
            <h2>Edit Profile, {user.username}</h2>
            <Formik initialValues={{email:''||user.email,name:''||user.name,age:''||user.age,bio:''||user.bio}} validationSchema={editProfileSchema} onSubmit={(values)=>{
                //console.log(values);
                localStorage.setItem('current_user',JSON.stringify({...values,password:user.password}));
                //navigate('/');
            }}>
            {({values,handleBlur,handleChange,handleSubmit,errors,touched})=>
                (
                    <form noValidate onSubmit={handleSubmit} className="form">
                        <input name='name' className="input" type='text' placeholder="Enter name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        
                        {touched.name&&errors.name && <div  className="error">{errors.name}</div>}
                        <input name='age'  className="input" type='number' placeholder="age" value={values.age} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.age&&errors.age && <div className="error">{errors.age}</div>}
                        
                        <input name='bio'  className="input" type='text' placeholder="bio" value={values.bio} onChange={handleChange} onBlur={handleBlur}/>
                       
                        <input name='email'  className="input" type='email' placeholder="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        
                        
                        <button type="submit" className="button">Edit Profile</button>
                    </form>
                )
            }
            </Formik>
            <Link to='/profile'><button className="button">Profile</button></Link>
        </div>
    );
}
export default EditProfile;