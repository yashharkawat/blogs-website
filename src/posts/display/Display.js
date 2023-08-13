import PostList from "../post/PostList";
import NavBar from "../navbar/NavBar";
import { useState } from "react";
import "./Display.css";

import { useSelector } from "react-redux";
import { Filter } from "../Filter";
import TopicListPage from "../Topics/TopicList";

const Display = () => {
  // const user=useSelector(state=>state);
  // console.log("user",user);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    author: "",
    date: "",
    likes: "",
    comments: "",
  });
  const [topics, setTopics] = useState(false);
  const filterHandler = (filterValues) => {
    setFilter(filterValues);
    console.log(filterValues);
  };
  const id = useSelector((state) => state.id);
  console.log(id);
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const topicHandler = (val) => {
    setTopics(val);
  };
  return (
    <div className="display-container">
      <NavBar />
      <div className="flex space-between margin-top">
        <input
          onChange={searchHandler}
          placeholder="Search posts"
          className="search-input"
          type="text"
          value={search}
        ></input>
        {/* <Filter sendFilter={filterHandler} /> */}
      </div>
      <TopicListPage active={topicHandler} sendFilter={filterHandler} />

      {!topics && <PostList searchText={search} filter={filter} />}
    </div>
  );
};
export default Display;
