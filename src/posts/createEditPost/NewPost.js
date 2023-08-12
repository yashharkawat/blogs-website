import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import './NewPost.css'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase'
import { useSelector,useDispatch } from 'react-redux';
import { actions } from '../../store';
import { setRevisionHistory } from '../../actions/setRevisionHistory';

const NewPost = (props) => {
  //const [loading,setLoading]=useState(true);
  const username = useSelector(state => state.name);
  const [initialValues, setInitialValues] = useState({});
  const [loading, setLoading] = useState(true);
  const revisionHistory=useSelector(state=>state.revisionHistory);
  const user=useSelector(state=>state);
  const dispatch=useDispatch();
  const currUser=useSelector(state=>state);

  useEffect(() => {
    setLoading(true);
    setInitialValues({
      title: props.initialValues.title,
      topic: props.initialValues.topic,
      image: props.initialValues.image,
      text: props.initialValues.text,
    });
    setLoading(false);
  }, [props.initialValues])
  //console.log("hi",props.id,props.initialValues);
  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    topic: yup.string().required('title is required'),
    image: yup.string().required("Image is required"),
    text: yup.string().required('text is required'),
  });

  const addPost = async (values) => {
    const date = new Date();
    const articlesCollection = collection(db, "articles");
    await addDoc(articlesCollection, { ...values, created_at: date, author: username, view: 0 ,liked_by:[],comments:[]});
    setRevisionHistory(revisionHistory,dispatch,currUser,values.title,"added");
  }
  const updatePost = async (id, values) => {

    const newPost={ ...props.initialValues,...values, author: username};
    //console.log(newPost);
    const article = doc(db, "articles", id);
    await updateDoc(article, newPost);
    setRevisionHistory(revisionHistory,dispatch,currUser,props.initialValues.title,"updated");
  }
  if (loading) return <div>Loading</div>;
  return (
    <div className='container'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, { resetForm }) => {

        if (props.id === undefined) {
          try {
            addPost(values);

          }
          catch (err) { console.log(err) };
          resetForm();
        }
        else {
          try {
            updatePost(props.id, values);
          }
          catch (err) { console.log(err) };
        }
      }}>
        {({ values, handleBlur, handleChange, handleSubmit, errors, touched }) => (
          <form noValidate onSubmit={handleSubmit} className="newpost-form">
            <div>
              <input type="text" name="title" placeholder="Title" value={values.title} onChange={handleChange} onBlur={handleBlur} className="newpost-input" />
              {touched.title && errors.title && <div className="newpost-error">{errors.title}</div>}
            </div>
            <div>
              <input type="text" name="topic" placeholder="Topic" value={values.topic} onChange={handleChange} onBlur={handleBlur} className="newpost-input" />

            </div>
            <div>
              <input type="text" name="image" placeholder="Featured Image URL" value={values.image} onChange={handleChange} onBlur={handleBlur} className="newpost-input" />
              <ErrorMessage name="image" component="div" className="newpost-error" />
            </div>
            <div>
              <input type="text" name="text" placeholder="Text" value={values.text} onChange={handleChange} onBlur={handleBlur} className="newpost-input" />
              <ErrorMessage name="text" component="div" className="newpost-error" />
            </div>

            <button type="submit" className="newpost-button">Add Post</button>
          </form>
        )}
      </Formik>
      <Link to='/'><button className="newpost-button">View Posts</button></Link>
    </div>
  );
};

export default NewPost;
