import PostList from "../post/PostList";
import NavBar from "../navbar/NavBar";
import { useState } from "react";
import "./Display.css";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const Display = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    author: "",
    date: "",
    likes: "",
    comments: "",
  });

  const searchHandler = (searchText) => {
    setSearch(searchText);
  };
  const filterHandler = (filterValues) => {
    setFilter(filterValues);
  };
  const id=useSelector(state=>state.id);
  console.log(id);
  return (
    <>
      <h2 className="page-heading container">
        <p className="text">Your Feed</p>
      </h2>
      <NavBar searchHandler={searchHandler} sendFilter={filterHandler} />
      <div className="button-sheet">
        <span className="button-style">
          <Button variant="contained" href="/topics">
            Topics
          </Button>
        </span>
        <span className="button-style">
          <Button variant="contained" href="/pay">
            Pay
          </Button>
        </span>
        <span className="button-style">
          <Button variant="contained" href="/saved-posts">
            Saved Posts
          </Button>
        </span>
      </div>

      <PostList searchText={search} filter={filter} />
    </>
  );
};
export default Display;
