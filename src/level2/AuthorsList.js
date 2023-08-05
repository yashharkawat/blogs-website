import React from "react";

const AuthorList = () => {
    const authors=[];
  return (
    <div>
      <h2>All Authors</h2>
      {authors.map((author) => (
        <div key={author.id}>
          <img
            src={author.profilePicture}
            alt={`Profile of ${author.name}`}
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <h3>{author.name}</h3>
          <p>{author.bio}</p>
          <button>Follow author</button>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;
