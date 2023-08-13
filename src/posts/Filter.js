import { Formik } from "formik";
import { useState } from "react";

export const Filter = (props) => {
  const initialValues = {
    author: "",
    date: "",
    likes: "",
    comments: "",
  };
  const [filter, setFilter] = useState(false);
  return (
    <div className="align-top">
      {props.hideFilter === true ? (
        ""
      ) : (
        <button className="filter-button" onClick={() => setFilter(true)}>
          Add Filters
        </button>
      )}
      {filter && (
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            //console.log(values);
            setFilter(false);
            props.sendFilter(values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Filter by Author: </label>
                <input
                  type="text"
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Filter by Date: </label>
                <input
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Filter by Likes: </label>
                <input
                  type="number"
                  name="likes"
                  value={values.likes}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Filter by Comments: </label>
                <input
                  type="number"
                  name="comments"
                  value={values.comments}
                  onChange={handleChange}
                />
              </div>
              <button className="filter-button" type="submit">
                Apply Filters
              </button>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};
