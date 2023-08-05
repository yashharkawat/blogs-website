import React, { useEffect ,useState} from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import './NewPost.css'

const NewPost = (props) => {
    //const [loading,setLoading]=useState(true);
    const [initialValues,setInitialValues]=useState({
      title: props.initialValues.title,
      topic: props.initialValues.topic,
      image: props.initialValues.image,
      description: props.initialValues.description,
      author: props.initialValues.author,
    });
    
    //console.log(props.initialValues);
    //console.log(initialValues)
  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    topic: yup.string(),
    image: yup.string(),
    description: yup.string().required('description is required'),
    author: yup.string().required('Author is required'),
  });
  const postRequest=async(method,postData)=>{
    const options = {
        method: method,
  
        headers: new Headers({'content-type': 'application/json'
        }),
        body: JSON.stringify(postData)
        };
        const url='http://localhost:3000/articles'
        const data=await fetch(url,options);
        const posts=await data.json();
        return posts;
  }
  
  return (
    <div className='container'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values,{resetForm})=>{
            if(props.id===undefined||props.id===null){
              //console.log(props.id);
              postRequest('POST',values);
            }
            else{
              postRequest('PUT',{...values,id:props.id});
            }
            //change this to values
            
        }}>
      {({values,handleBlur,handleChange,handleSubmit,errors,touched})=>(
        <form noValidate onSubmit={handleSubmit} className="newpost-form">
            <div>
          <input type="text" name="title" placeholder="Title"  value={values.title} onChange={handleChange} onBlur={handleBlur} className="newpost-input"/>
          {touched.title &&errors.title && <div className="newpost-error">{errors.title}</div>}
        </div>
        <div>
          <input type="text" name="topic" placeholder="Topic" value={values.topic} onChange={handleChange} onBlur={handleBlur} className="newpost-input" />
          
        </div>
        <div>
          <input type="text" name="image" placeholder="Featured Image URL" value={values.image} onChange={handleChange} onBlur={handleBlur} className="newpost-input"/>
          <ErrorMessage name="image" component="div" className="newpost-error" />
        </div>
        <div>
          <input type="" name="description" placeholder="Text" value={values.description} onChange={handleChange} onBlur={handleBlur} className="newpost-input"/>
          <ErrorMessage name="description" component="div" className="newpost-error"/>
        </div>
        <div>
          <input type="text" name="author" placeholder="Author" value={values.author} onChange={handleChange} onBlur={handleBlur} className="newpost-input"/>
          <ErrorMessage name="author" component="div" className="newpost-error" />
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
