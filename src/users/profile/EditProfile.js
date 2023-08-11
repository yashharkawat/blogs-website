import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";
import { db } from '../../config/firebase';
import { doc, updateDoc } from 'firebase/firestore'

const editProfileSchema = yup.object().shape({
    name: yup.string().required('enter valid name'),
    age: yup.string(),
    bio: yup.string(),

})
const updateUser = async (id, values) => {

    const user = doc(db, "users", id);
    //console.log(values, id);
    await updateDoc(user, values);
}
const EditProfile = () => {

    const user = useSelector(state => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="container">
            <h2>Edit Profile </h2>
            <Formik initialValues={{  name: user.name, age: user.age, bio: user.bio }} validationSchema={editProfileSchema} onSubmit={(values,{setSubmitting}) => {
                if (values === {  name: '', age: '', bio: '' }) { }
                else {
                    dispatch(actions.changeCurrentUserName(values.name));
                    dispatch(actions.changeCurrentUserAge(values.age));
                    dispatch(actions.changeCurrentUserBio(values.bio));
                }

                console.log('values',values);
                //console.log(user);
                updateUser(user.id, values);
                setSubmitting(false);
            }}>
                {({ values, handleBlur, handleChange, handleSubmit, errors, touched }) =>
                (
                    <form noValidate onSubmit={handleSubmit} className="form">
                        <input name='name' className="input" type='text' placeholder="Enter name" value={values.name} onChange={handleChange} onBlur={handleBlur} />

                        {touched.name && errors.name && <div className="error">{errors.name}</div>}
                        <input name='age' className="input" type='number' placeholder="age" value={values.age} onChange={handleChange} onBlur={handleBlur} />
                        {touched.age && errors.age && <div className="error">{errors.age}</div>}

                        <input name='bio' className="input" type='text' placeholder="bio" value={values.bio} onChange={handleChange} onBlur={handleBlur} />
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