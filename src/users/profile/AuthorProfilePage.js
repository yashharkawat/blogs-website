import React from "react";
import { Link, useParams } from "react-router-dom";

const AuthorProfilePage= () => {
    const params=useParams();
  return (
    <div className="author-profile">
      <h2>{params.name}</h2>
      <p>Email: 'johnDoe@gmail.com'</p>
      <p>Bio: 'Hi, its my bio'</p>
      
      
    </div>
  );
};

export default AuthorProfilePage;
